import { CircuitNode, Role } from "../statements/types"

const LEGEND: [Role, string][] = [
  ["aes", "AES gadget"],
  ["xor", "XOR (decryption)"],
  ["constant", "constants"],
  ["check", "checks"],
  ["output", "outputs"],
]

/** Up to this many nodes a statement is drawn by level; beyond, by composition. */
const SMALL = 8

/** The statement, node by node, from what each node reads. A small statement is drawn by level:
 *  a node sits one level right of the nodes it reads, and an arrow means "feeds the next level".
 *  A large one (the Web Proof) is drawn by composition: every cipher block as a column of AES,
 *  xor, constant and check, the other nodes after them in id order. */
export default function Circuit({ nodes }: { nodes: CircuitNode[] }) {
  return nodes.length <= SMALL ? <Levels nodes={nodes} /> : <Blocks nodes={nodes} />
}

const draw = (node: CircuitNode) => (
  <div
    key={node.id}
    className={`node n-${node.out ? "output" : node.role}`}
    title={`node ${node.id} · reads ${node.inputs.length ? node.inputs.map((id) => `node ${id}`).join(", ") : "the witness"}`}
  >
    {node.name}
    {node.out && " → output"}
  </div>
)

function Levels({ nodes }: { nodes: CircuitNode[] }) {
  const byId = new Map(nodes.map((node) => [node.id, node]))
  const level = (node: CircuitNode): number => {
    if (node.inputs.length === 0) return 0
    return 1 + Math.max(...node.inputs.map((id) => level(byId.get(id)!)))
  }
  const levels: CircuitNode[][] = []
  for (const node of nodes) {
    const at = level(node)
    levels[at] ??= []
    levels[at].push(node)
  }
  return (
    <div className='flow'>
      {levels.map((group, i) => (
        <div key={i} className='step'>
          {i > 0 && <span className='arr'>→</span>}
          <div className='col'>{group.map(draw)}</div>
        </div>
      ))}
    </div>
  )
}

function Blocks({ nodes }: { nodes: CircuitNode[] }) {
  const byId = new Map(nodes.map((node) => [node.id, node]))
  const reads = (node: CircuitNode, role: Role) => node.inputs.map((id) => byId.get(id)!).find((input) => input.role === role)
  // a cipher block: an AES node, the xor that reads it, and the first check reading that xor and a constant
  const columns: CircuitNode[][] = []
  const placed = new Set<number>()
  for (const aes of nodes) {
    if (aes.role !== "aes") continue
    const xor = nodes.find((node) => node.role === "xor" && node.inputs.includes(aes.id))
    const check = xor && nodes.find((node) => node.role === "check" && node.inputs.includes(xor.id) && reads(node, "constant"))
    const constant = check && reads(check, "constant")
    if (!xor || !check || !constant) continue
    columns.push([aes, xor, constant, check])
    for (const node of columns[columns.length - 1]) placed.add(node.id)
  }
  const rest = nodes.filter((node) => !placed.has(node.id))
  return (
    <>
      <div className='graph'>
        {columns.map((column, i) => (
          <div key={i} className='col'>
            {column.map(draw)}
          </div>
        ))}
      </div>
      {rest.length > 0 && <div className='flow'>{rest.map(draw)}</div>}
      <div className='legend'>
        {LEGEND.map(([role, label]) => (
          <span key={role} className={`l-${role}`}>
            {label}
          </span>
        ))}
      </div>
    </>
  )
}
