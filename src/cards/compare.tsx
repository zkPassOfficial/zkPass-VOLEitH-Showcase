import { useEffect, useState } from "react"
import { Measurement } from "../components/proof"
import StatementCard from "../components/StatementCard"
import { build, circuit, MAX, otherStatement, Params, rows } from "../statements/compare"
import { Relation } from "../zk-build/circuit"

const RELATIONS: Relation[] = [">", ">=", "<", "<=", "=", "!="]
const MAX_DIGITS = String(MAX).length

/** The number a field holds, or null past 64 bits. */
const number = (digits: string): bigint | null => {
  const value = BigInt(digits || "0")
  return value <= MAX ? value : null
}

export default function CompareCard({ onMeasured }: { onMeasured: (m: Measurement) => void }) {
  const [a, setA] = useState("1337")
  const [b, setB] = useState("42")
  const [relation, setRelation] = useState<Relation>(">")
  const [params, setParams] = useState<Params>({ a: 1337n, b: 42n, relation: ">" })
  const valid = number(a) !== null && number(b) !== null
  useEffect(() => {
    const [x, y] = [number(a), number(b)]
    if (x !== null && y !== null) setParams({ a: x, b: y, relation })
  }, [a, b, relation])

  const field = (name: string, value: string, set: (v: string) => void) => (
    <label className='field'>
      {name}
      <input type='text' name={name} inputMode='numeric' maxLength={MAX_DIGITS} value={value} onChange={(e) => set(e.target.value.replace(/\D/g, ""))} />
      {number(value) === null && <span className='bad'>at most {MAX.toLocaleString("en").replace(/,/g, " ")}</span>}
    </label>
  )
  return (
    <StatementCard
      id='compare'
      title='Compare'
      tag='1 boolean circuit'
      description='A relation between two numbers, proven without showing either.'
      inputs={
        <div className='row'>
          {field("a", a, setA)}
          <label className='field' style={{ flex: "0 0 110px" }}>
            relation
            <select name='relation' value={relation} onChange={(e) => setRelation(e.target.value as Relation)}>
              {RELATIONS.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </label>
          {field("b", b, setB)}
        </div>
      }
      params={params}
      disabled={!valid}
      build={build}
      rows={rows}
      circuit={circuit}
      otherStatement={otherStatement}
      onMeasured={onMeasured}
    />
  )
}
