/** One input range of a node: `size` wires read from `source` (a node id, or `WITNESS`) starting
 *  at its wire `sourceStart`, feeding the node's wires from `inputStart`. */
export interface Dependency {
  source: number
  inputStart: number
  sourceStart: number
  size: number
}

/** A node of a statement: the circuit it runs (by name, or `AES` / `AES256` for the gadgets),
 *  whether its outputs are made public, and where its inputs come from. */
export interface Node {
  id: number
  name: string
  out: boolean
  deps: Dependency[]
}

/** What a card proves: the circuits by name (Bristol text) and the nodes that wire them. The
 *  Borsh form is `schema.Waterfall`; the prover library calls it a waterfall. */
export interface Statement {
  circuits: Record<string, string>
  nodes: Node[]
}

/** The dependency source that means "the witness". */
export const WITNESS = -1
