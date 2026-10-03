// What a card hands to the prover and shows in its two columns. The four statements are plain
// modules with their own parameters; this is only the shape the card component reads.
import { Statement, WITNESS } from "../zk-build/types"

/** A statement and the witness that proves it. */
export interface Claim {
  statement: Statement
  witness: boolean[]
}

/** One row of the prover / verifier columns. `private` is masked on the verifier's side,
 *  `prover` is shown on the prover's side only, `verifier` on the verifier's only, `public` on
 *  both. The rest the prover shows from the start and the verifier only once the proof is
 *  verified: `claim` is what the proof asserts (`ok` says whether it holds), `result` a value it
 *  reveals, `note` a remark on the verifier's side alone. */
export interface Row {
  label: string
  kind: "private" | "prover" | "verifier" | "public" | "claim" | "result" | "note"
  text: string
  /** The verifier's wording, where the prover's names a private value. */
  verifierText?: string
  /** For a claim: whether it holds. */
  ok?: boolean
  /** A caption under the row. */
  caption?: string
  /** The way this row offers to test the proof: a lie, or another statement to check against. */
  action?: Action
}

/** A button on a row. `falseClaim` proves a claim that is false (the AES lie keeps the
 *  statement and changes the text; the Web Proof lie names another address in the statement);
 *  `otherStatement` verifies the proof against another statement, and the verifier's side then
 *  shows `alt` instead of the row's text. */
export interface Action {
  kind: "falseClaim" | "otherStatement"
  label: string
  alt?: { text: string; note: string }
}

export type Role = "aes" | "xor" | "constant" | "check" | "output"

/** A node of the statement as the circuit figure draws it; `inputs` are the nodes it reads. */
export interface CircuitNode {
  id: number
  name: string
  out: boolean
  role: Role
  inputs: number[]
}

/** A node's role from its name, the naming the extension and the fixtures use. */
function roleOf(name: string): Role {
  if (name === "AES" || name === "AES256") return "aes"
  if (name.startsWith("xor")) return "xor"
  if (name.startsWith("compare") || name.startsWith("equal") || name === "and_circuit") return "check"
  if (name.startsWith("public_field")) return "output"
  return "constant"
}

export const circuitNodes = (statement: Statement): CircuitNode[] =>
  statement.nodes.map((node) => ({
    id: node.id,
    name: node.name,
    out: node.out,
    role: roleOf(node.name),
    inputs: [...new Set(node.deps.map((dep) => dep.source).filter((source) => source !== WITNESS))],
  }))
