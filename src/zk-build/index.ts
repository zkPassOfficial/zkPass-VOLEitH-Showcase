// The prover library behind every card: statements in, proof bytes out, verified outputs back.
// Everything crosses the wasm boundary as Borsh bytes (`schema.ts`); the outputs of a proof can
// only be read by verifying it.
import * as borsh from "borsh"
import init, { voleithGenProof, voleithProofSections, voleithVerifyProofOutputs } from "../wasm-circuit/wasm_lib"
import * as schema from "./schema"
import { Statement } from "./types"

export interface NodeOutput {
  id: bigint
  groups: boolean[][]
}

export interface ProofSection {
  name: string
  bytes: number
}

/** Load the wasm module; idempotent, so every entry point may call it. */
export const ready = () => init()

/** The statement as the verifier takes it: Borsh `Waterfall`. */
export function statementBytes(statement: Statement): Uint8Array {
  return borsh.serialize(schema.Waterfall, waterfall(statement))
}

/** A statement back from its Borsh bytes: the inverse of `statementBytes`. */
export function statementFromBytes(bytes: Uint8Array): Statement {
  const wf = borsh.deserialize(schema.Waterfall, bytes) as {
    circuits: { name: string; bristol: string }[]
    nodes: { id: bigint; name: string; out: boolean; deps: { source: bigint; input_start: bigint; source_start: bigint; size: bigint }[] }[]
  }
  return {
    circuits: Object.fromEntries(wf.circuits.map((c) => [c.name, c.bristol])),
    nodes: wf.nodes.map((node) => ({
      id: Number(node.id),
      name: node.name,
      out: node.out,
      deps: node.deps.map((dep) => ({
        source: Number(dep.source),
        inputStart: Number(dep.input_start),
        sourceStart: Number(dep.source_start),
        size: Number(dep.size),
      })),
    })),
  }
}

/** The prover's input: the statement, the witness and the chunk size, as Borsh `WaterfallInput`. */
export function proofInput(statement: Statement, witness: boolean[], k: 4 | 8): Uint8Array {
  return borsh.serialize(schema.WaterfallInput, { k, inputs: witness, waterfall: waterfall(statement) })
}

/** Prove; `ms` is the wall-clock time of the wasm call. */
export function prove(input: Uint8Array): { proof: Uint8Array; ms: number } {
  const start = performance.now()
  const proof: Uint8Array = voleithGenProof(input)
  return { proof, ms: performance.now() - start }
}

/** Verify `proof` against `statement` and return the outputs it commits to, in node-id order.
 *  Throws with the library's message when the proof is malformed or rejected. */
export function verify(statement: Uint8Array, proof: Uint8Array): { outputs: NodeOutput[]; ms: number } {
  const start = performance.now()
  const bytes: Uint8Array = voleithVerifyProofOutputs(statement, proof)
  const outputs = borsh.deserialize(schema.NodeOutputs, bytes) as NodeOutput[]
  return { outputs, ms: performance.now() - start }
}

/** The byte layout of `proof`, section by section; the sizes sum to its length. */
export function proofSections(proof: Uint8Array): ProofSection[] {
  const bytes: Uint8Array = voleithProofSections(proof)
  const sections = borsh.deserialize(schema.ProofSections, bytes) as { name: string; bytes: bigint }[]
  return sections.map((section) => ({ name: section.name, bytes: Number(section.bytes) }))
}

function waterfall(statement: Statement) {
  return {
    circuits: Object.entries(statement.circuits).map(([name, bristol]) => ({ name, bristol })),
    nodes: statement.nodes.map((node) => ({
      id: node.id,
      name: node.name,
      out: node.out,
      deps: node.deps.map((dep) => ({
        source: dep.source,
        input_start: dep.inputStart,
        source_start: dep.sourceStart,
        size: dep.size,
      })),
    })),
  }
}
