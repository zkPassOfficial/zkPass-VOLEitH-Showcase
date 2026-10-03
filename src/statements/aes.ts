// AES: the ciphertext is this plaintext under this key, block by block under AES-CTR. Each block
// is an AES-128 node (the keystream), an XOR with the text, and an equality against the cipher
// block held by a constant node; the block results are ANDed into one output bit.
import aesjs from "aes-js"
import { andCircuit, compareCircuit, constantCircuit, xorCircuit } from "../zk-build/circuit"
import { Dependency, Node, WITNESS } from "../zk-build/types"
import { NodeOutput } from "../zk-build"
import { concat, hex, randomBytes, utf8, wires } from "../utils"
import { CircuitNode, circuitNodes, Claim, Row } from "./types"

export interface Params {
  plaintext: string
  key: Uint8Array
  counters: Uint8Array[]
  /** What the prover claims the plaintext is, when it lies: same length, same statement. */
  claimed?: string
}

const BLOCK = 16

/** The longest plaintext: four blocks. */
export const MAX_BYTES = 4 * BLOCK

export const validPlaintext = (plaintext: string): boolean => {
  const length = utf8(plaintext).length
  return length >= 1 && length <= MAX_BYTES
}

/** Fresh key and counters for `plaintext`: one counter block per text block. */
export function params(plaintext: string): Params {
  const blocks = Math.max(1, Math.ceil(utf8(plaintext).length / BLOCK))
  return { plaintext, key: randomBytes(BLOCK), counters: Array.from({ length: blocks }, () => randomBytes(BLOCK)) }
}

/** The AES-CTR ciphertext of `plaintext` under the params' key and counters. */
function ciphertext({ plaintext, key, counters }: Params): Uint8Array {
  const text = utf8(plaintext)
  const cipher = new aesjs.ModeOfOperation.ecb(key)
  return concat(
    ...counters.map((counter, i) => {
      const block = text.subarray(i * BLOCK, (i + 1) * BLOCK)
      return cipher
        .encrypt(counter)
        .subarray(0, block.length)
        .map((byte, j) => byte ^ block[j])
    }),
  )
}

/** A same-length lie: the prover keeps the key and the ciphertext, and claims another text. */
export const falseClaim = (p: Params): Params => ({ ...p, claimed: lie(p.plaintext) })

export function build(p: Params): Claim {
  const text = utf8(p.claimed ?? p.plaintext)
  const cipher = ciphertext(p)
  const circuits: Record<string, string> = {}
  const nodes: Node[] = []
  const witness = [...wires(p.key), ...p.counters.flatMap((counter) => wires(counter))]
  const checks: number[] = []
  let textWire = witness.length
  for (let i = 0; i < p.counters.length; i++) {
    const block = text.subarray(i * BLOCK, (i + 1) * BLOCK)
    const bits = 8 * block.length
    witness.push(...wires(block))
    const aes = node(nodes, "AES", [dep(WITNESS, 0, 0, 128), dep(WITNESS, 128, 128 * (i + 1), 128)])
    const xor = node(nodes, `xor_${bits}`, [dep(aes, 0, 128 - bits, bits), dep(WITNESS, bits, textWire, bits)])
    const constant = node(nodes, `cipher_${i}`, [dep(WITNESS, 0, 0, 1)])
    const equal = node(nodes, `equal_${bits}`, [dep(xor, 0, 0, bits), dep(constant, bits, 0, bits)])
    circuits[`xor_${bits}`] = xorCircuit(bits)
    circuits[`cipher_${i}`] = constantCircuit(cipher.subarray(i * BLOCK, i * BLOCK + block.length))
    circuits[`equal_${bits}`] = compareCircuit(bits, "=")
    checks.push(equal)
    textWire += bits
  }
  if (checks.length === 1) nodes[checks[0]].out = true
  else {
    circuits.and_circuit = andCircuit(checks.length)
    node(
      nodes,
      "and_circuit",
      checks.map((id, i) => dep(id, i, 0, 1)),
      true,
    )
  }
  return { statement: { circuits, nodes }, witness }
}

/** Whether the proof's output bit is true: the claimed text is the one under the ciphertext. */
const holds = (p: Params): boolean => (p.claimed ?? p.plaintext) === p.plaintext

export function rows(p: Params, outputs?: NodeOutput[]): Row[] {
  const result = outputs ? outputs[0].groups[0][0] : holds(p)
  const plaintext = p.claimed === undefined ? p.plaintext : `${p.claimed} · claimed; it says "${p.plaintext}"`
  return [
    { label: "key", kind: "private", text: hex(p.key) },
    {
      label: "plaintext",
      kind: "private",
      text: plaintext,
      action: lie(p.plaintext) === p.plaintext ? undefined : { kind: "falseClaim", label: "claim it says something else" },
    },
    { label: "ciphertext", kind: "public", text: hex(ciphertext(p)) },
    {
      label: "result",
      kind: "claim",
      ok: result,
      text: `${result} · the ciphertext is ${result ? "" : "not "}this plaintext under this key`,
      verifierText: `${result} · the ciphertext is ${result ? "" : "not "}the plaintext under the key`,
    },
  ]
}

export const circuit = (p: Params): CircuitNode[] => circuitNodes(build(p).statement)

function node(nodes: Node[], name: string, deps: Dependency[], out = false): number {
  nodes.push({ id: nodes.length, name, out, deps })
  return nodes.length - 1
}

const dep = (source: number, inputStart: number, sourceStart: number, size: number): Dependency => ({ source, inputStart, sourceStart, size })

/** Another text of the same length: every letter and digit shifted by one. A text with neither
 *  is its own lie, and `rows` then offers no false claim. */
function lie(text: string): string {
  const next = (c: string) => {
    if (c === "z") return "a"
    if (c === "Z") return "A"
    if (c === "9") return "0"
    return String.fromCharCode(c.charCodeAt(0) + 1)
  }
  return text.replace(/[a-z0-9]/gi, next)
}
