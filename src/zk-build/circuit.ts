// Bristol circuit text for the boolean nodes of a statement, and the wiring of the AES one-way
// function. Every generator follows the extension's gate order, so a statement built here is the
// one the verifier expects.
import { wires } from "../utils"
import { Dependency, WITNESS } from "./types"

export type Relation = ">" | ">=" | "<" | "<=" | "=" | "!="

/** A circuit with one input group and one output group: the Bristol header and its gates. */
function circuit(gates: string[], wires: number, inputs: number, outputs: number): string {
  return `${gates.length} ${wires}\n1 ${inputs}\n1 ${outputs}\n${gates.join("\n")}`
}

/** `a <relation> b` for two `bits`-wide inputs, one output bit. Equality is a tree of ANDs over
 *  the negated XORs; an order is a carry chain, `a > b = (a ⊕ c)(b ⊕ c) ⊕ a` per bit. */
export function compareCircuit(bits: number, relation: Relation): string {
  if (relation === "=" || relation === "!=") return equalCircuit(bits, relation === "!=")
  const gates: string[] = []
  let wire = 2 * bits
  gates.push(`2 1 0 0 ${wire} XOR`) // the carry starts at 0
  const greater = relation === ">" || relation === "<="
  for (let i = 0; i < bits; i++) {
    gates.push(
      `2 1 ${i} ${wire} ${wire + 1} XOR`,
      `2 1 ${i + bits} ${wire} ${wire + 2} XOR`,
      `2 1 ${wire + 1} ${wire + 2} ${wire + 3} AND`,
      `2 1 ${greater ? i : i + bits} ${wire + 3} ${wire + 4} XOR`,
    )
    wire += 4
  }
  if (relation === "<=" || relation === ">=") {
    gates.push(`1 1 ${wire} ${wire + 1} INV`)
    wire += 1
  }
  return circuit(gates, wire + 1, 2 * bits, 1)
}

function equalCircuit(bits: number, negate: boolean): string {
  const gates: string[] = []
  const diffs: number[] = []
  let wire = 2 * bits
  for (let i = 0; i < bits; i++) {
    gates.push(`2 1 ${i} ${i + bits} ${wire} XOR`)
    diffs.push(wire++)
  }
  const same: number[] = []
  for (const diff of diffs) {
    gates.push(`1 1 ${diff} ${wire} INV`)
    same.push(wire++)
  }
  while (same.length > 1) {
    const [x, y] = same.splice(0, 2)
    gates.push(`2 1 ${x} ${y} ${wire} AND`)
    same.splice(1, 0, wire++)
  }
  if (negate) {
    gates.push(`1 1 ${wire - 1} ${wire} INV`)
    wire += 1
  }
  return circuit(gates, wire, 2 * bits, 1)
}

/** Bitwise XOR of two `bits`-wide inputs. */
export function xorCircuit(bits: number): string {
  const gates: string[] = []
  for (let i = 0; i < bits; i++) gates.push(`2 1 ${i} ${i + bits} ${2 * bits + i} XOR`)
  return circuit(gates, 3 * bits, 2 * bits, bits)
}

/** AND of `inputs` bits into one. */
export function andCircuit(inputs: number): string {
  const gates: string[] = []
  const pending = Array.from({ length: inputs }, (_, i) => i)
  let wire = inputs
  while (pending.length > 1) {
    const [x, y] = pending.splice(0, 2)
    gates.push(`2 1 ${x} ${y} ${wire} AND`)
    pending.splice(1, 0, wire++)
  }
  return circuit(gates, wire, inputs, 1)
}

/** A constant: one witness bit in, `0 = w ⊕ w`, `1 = ¬0`, one INV per output bit. Wire `i` of
 *  the output is bit `i` of `bytes` as a big-endian integer. */
export function constantCircuit(bytes: Uint8Array): string {
  const bits = wires(bytes)
  const gates = ["2 1 0 0 1 XOR", "1 1 1 2 INV", ...bits.map((bit, i) => `1 1 ${bit ? 1 : 2} ${i + 3} INV`)]
  return circuit(gates, bits.length + 3, 1, bits.length)
}

// The AES one-way function of a value, proven by two `AES256` nodes:
//   K = value ‖ 0x00 × (31 − L) ‖ L      (32 bytes, L = the value's byte length, 1 ≤ L ≤ 31)
//   N = AES-256_K(P0) ‖ AES-256_K(P1)    (P0 = 0, P1 = 1 as 16-byte big-endian integers)
// A constant node holds `P1 ‖ P0 ‖ PAD`; each AES node's key is the padding from the constant on
// its low wires and the value from the witness above, its block is P0 or P1. The production
// statement uses this construction, and the node name must match it.

/** The name of the constant node; a verifier recognises the subgraph by it. */
export const OWF_CONSTANT = "owf_constant"
export const OWF_NODE = "AES256"

const KEY_BYTES = 32
const BLOCK_BYTES = 16

/** The AES-256 key of `value`: the value, zero padding, then its length as one byte. */
export function owfKey(value: Uint8Array): Uint8Array {
  if (value.length < 1 || value.length >= KEY_BYTES) {
    throw new Error(`a one-way function value takes 1 to ${KEY_BYTES - 1} bytes, got ${value.length}`)
  }
  const key = new Uint8Array(KEY_BYTES)
  key.set(value)
  key[KEY_BYTES - 1] = value.length
  return key
}

/** The block P₀ or P₁: `i` (0 or 1) in the last of 16 bytes. */
export function owfBlock(i: number): Uint8Array {
  const block = new Uint8Array(BLOCK_BYTES)
  block[BLOCK_BYTES - 1] = i
  return block
}

/** What the constant node holds: `P1 ‖ P0 ‖ PAD`, so that in wire order the padding sits lowest,
 *  then P0, then P1. */
export function owfConstant(value: Uint8Array): Uint8Array {
  const pad = owfKey(value).subarray(value.length)
  const bytes = new Uint8Array(2 * BLOCK_BYTES + pad.length)
  bytes.set(owfBlock(1), 0)
  bytes.set(owfBlock(0), BLOCK_BYTES)
  bytes.set(pad, 2 * BLOCK_BYTES)
  return bytes
}

/** The dependencies of the two `AES256` nodes, in node order: the key is the constant's padding
 *  on the low wires and the value's witness wires above it (`valueWires` in ascending wire order),
 *  the block is P0 for the first node and P1 for the second. */
export function owfNodes(constantId: number, value: Uint8Array, valueWires: { start: number; end: number }[]): Dependency[][] {
  const padWires = 8 * (KEY_BYTES - value.length)
  const key: Dependency[] = [{ source: constantId, inputStart: 0, sourceStart: 0, size: padWires }]
  let wire = padWires
  for (const { start, end } of valueWires) {
    key.push({ source: WITNESS, inputStart: wire, sourceStart: start, size: end - start })
    wire += end - start
  }
  if (wire !== 8 * KEY_BYTES) {
    throw new Error(`the value's witness ranges cover ${wire - padWires} bits, expected ${8 * value.length}`)
  }
  return [padWires, padWires + 8 * BLOCK_BYTES].map((blockWire) => [
    ...key,
    { source: constantId, inputStart: 8 * KEY_BYTES, sourceStart: blockWire, size: 8 * BLOCK_BYTES },
  ])
}
