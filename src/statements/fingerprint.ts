// Anonymous Fingerprint: the AES one-way function of an id (`circuit.ts`), two AES-256 nodes whose
// outputs are the 32-byte fingerprint and whose key wires are the id the verifier never sees.
import aesjs from "aes-js"
import { constantCircuit, OWF_CONSTANT, OWF_NODE, owfBlock, owfConstant, owfKey, owfNodes } from "../zk-build/circuit"
import { Statement, WITNESS } from "../zk-build/types"
import { NodeOutput } from "../zk-build"
import { bytesFromWires, concat, hex, utf8, wires } from "../utils"
import { CircuitNode, circuitNodes, Claim, Row } from "./types"

export interface Params {
  id: string
}

/** The id's length in bytes: the one-way function's key has room for 1 to 31. */
export const ID_BYTES = { min: 1, max: 31 }

export const validId = (id: string): boolean => {
  const length = utf8(id).length
  return length >= ID_BYTES.min && length <= ID_BYTES.max
}

function statement(value: Uint8Array): Statement {
  const constant = 0
  return {
    circuits: { [OWF_CONSTANT]: constantCircuit(owfConstant(value)) },
    nodes: [
      { id: constant, name: OWF_CONSTANT, out: false, deps: [{ source: WITNESS, inputStart: 0, sourceStart: 0, size: 1 }] },
      ...owfNodes(constant, value, [{ start: 0, end: 8 * value.length }]).map((deps, i) => ({ id: constant + 1 + i, name: OWF_NODE, out: true, deps })),
    ],
  }
}

export function build({ id }: Params): Claim {
  const value = utf8(id)
  return { statement: statement(value), witness: wires(value) }
}

/** The fingerprint computed outside the proof: what the verified outputs must be. */
function expected({ id }: Params): Uint8Array {
  const cipher = new aesjs.ModeOfOperation.ecb(owfKey(utf8(id)))
  return concat(cipher.encrypt(owfBlock(0)), cipher.encrypt(owfBlock(1)))
}

/** The fingerprint the verifier learned: the two nodes' output blocks. */
export const fingerprintOf = (outputs: NodeOutput[]): Uint8Array => concat(...outputs.map((node) => bytesFromWires(node.groups[0])))

export function rows(p: Params, outputs?: NodeOutput[]): Row[] {
  const fingerprint = hex(outputs ? fingerprintOf(outputs) : expected(p))
  return [
    { label: "id", kind: "private", text: p.id },
    { label: "fingerprint", kind: "result", text: fingerprint },
  ]
}

export const circuit = (p: Params): CircuitNode[] => circuitNodes(build(p).statement)
