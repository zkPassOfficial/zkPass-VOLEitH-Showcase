// Compare: `a <relation> b` over two 64-bit numbers the verifier never sees.
import { compareCircuit, Relation } from "../zk-build/circuit"
import { Statement, WITNESS } from "../zk-build/types"
import { NodeOutput } from "../zk-build"
import { wires } from "../utils"
import { CircuitNode, circuitNodes, Claim, Row } from "./types"

export interface Params {
  a: bigint
  b: bigint
  relation: Relation
}

const BITS = 64

/** The largest number a side can be: 64 bits. */
export const MAX = (1n << 64n) - 1n

const OPPOSITE: Record<Relation, Relation> = { ">": "<", "<": ">", ">=": "<=", "<=": ">=", "=": "!=", "!=": "=" }

function statement(relation: Relation): Statement {
  const name = `compare_${relation}_${BITS}`
  return {
    circuits: { [name]: compareCircuit(BITS, relation) },
    nodes: [{ id: 0, name, out: true, deps: [{ source: WITNESS, inputStart: 0, sourceStart: 0, size: 2 * BITS }] }],
  }
}

export function build({ a, b, relation }: Params): Claim {
  return { statement: statement(relation), witness: [...wires(u64(a)), ...wires(u64(b))] }
}

/** The statement the verifier checks against when it disagrees with the prover: the opposite relation. */
export const otherStatement = ({ relation }: Params): Statement => statement(OPPOSITE[relation])

const holds = ({ a, b, relation }: Params): boolean => ({ ">": a > b, ">=": a >= b, "<": a < b, "<=": a <= b, "=": a === b, "!=": a !== b })[relation]

export function rows(params: Params, outputs?: NodeOutput[]): Row[] {
  const { a, b, relation } = params
  const result = outputs ? outputs[0].groups[0][0] : holds(params)
  const verb = result ? "holds" : "does not hold"
  const other = OPPOSITE[relation]
  return [
    { label: "a", kind: "private", text: String(a) },
    { label: "b", kind: "private", text: String(b) },
    {
      label: "statement",
      kind: "public",
      text: `a ${relation} b`,
      action: {
        kind: "otherStatement",
        label: `check against a ${other} b`,
        alt: { text: `a ${other} b`, note: "the verifier checks against this statement, not the prover's" },
      },
    },
    { label: "result", kind: "claim", ok: result, text: `${result} · ${a} ${relation} ${b} ${verb}`, verifierText: `${result} · a ${relation} b ${verb}` },
  ]
}

export const circuit = (params: Params): CircuitNode[] => circuitNodes(statement(params.relation))

function u64(value: bigint): Uint8Array {
  if (value < 0n || value > MAX) throw new Error(`${value} does not fit 64 bits`)
  const bytes = new Uint8Array(8)
  for (let i = 7; i >= 0; i--) {
    bytes[i] = Number(value & 0xffn)
    value >>= 8n
  }
  return bytes
}
