// The Borsh layouts the prover library reads and writes, field for field as
// `zkpass_circuit::spec` and `zkpass_voleith_wasm` declare them. Borsh is positional: the field
// names here are documentation, the order is the contract.

const Dependency = {
  struct: { source: "i64", input_start: "u64", source_start: "u64", size: "u64" },
}

const Node = {
  struct: { id: "u64", name: "string", out: "bool", deps: { array: { type: Dependency } } },
}

const Circuit = { struct: { name: "string", bristol: "string" } }

/** A statement: what `voleithVerifyProofOutputs` takes. */
export const Waterfall = {
  struct: { circuits: { array: { type: Circuit } }, nodes: { array: { type: Node } } },
}

/** What `voleithGenProof` takes: the chunk size k (4 or 8), the witness, the statement. */
export const WaterfallInput = {
  struct: { k: "u8", inputs: { array: { type: "bool" } }, waterfall: Waterfall },
}

/** One output node's verified bits, one vector per output group; what
 *  `voleithVerifyProofOutputs` returns, as `Vec<NodeOutput>` in node-id order. */
const NodeOutput = {
  struct: { id: "u64", groups: { array: { type: { array: { type: "bool" } } } } },
}
export const NodeOutputs = { array: { type: NodeOutput } }

/** One section of a proof's byte layout; what `voleithProofSections` returns as a vector. */
const ProofSection = { struct: { name: "string", bytes: "u64" } }
export const ProofSections = { array: { type: ProofSection } }
