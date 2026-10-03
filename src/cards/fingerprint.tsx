import { useEffect, useState } from "react"
import { Measurement } from "../components/proof"
import StatementCard from "../components/StatementCard"
import { build, circuit, fingerprintOf, ID_BYTES, Params, rows as baseRows, validId } from "../statements/fingerprint"
import { Row } from "../statements/types"
import { hex } from "../utils"
import { NodeOutput } from "../zk-build"

/** Whether the fingerprint of the proof just accepted was seen in an earlier one; `seen` lists
 *  the fingerprints of every accepted proof, the last one being this proof's. */
function seenBefore(seen: string[]): Row {
  const first = seen.indexOf(seen[seen.length - 1])
  const again = first >= 0 && first < seen.length - 1
  return {
    label: "seen before?",
    kind: "note",
    text: again
      ? `yes, first seen in proof #${first + 1}: the same id, which the verifier never saw`
      : `no, a new fingerprint${seen.length > 1 ? ": a different id" : ""}`,
  }
}

export default function FingerprintCard({ onMeasured }: { onMeasured: (m: Measurement) => void }) {
  const [id, setId] = useState("alice@example.org")
  const [params, setParams] = useState<Params>({ id })
  const [seen, setSeen] = useState<string[]>([])
  const valid = validId(id)
  useEffect(() => {
    if (validId(id)) setParams({ id })
  }, [id])
  const rows = (p: Params, outputs?: NodeOutput[]) => (outputs ? [...baseRows(p, outputs), seenBefore(seen)] : baseRows(p))
  return (
    <StatementCard
      id='fingerprint'
      title='Anonymous Fingerprint'
      tag='AES-256 one-way function · 3 nodes'
      description='The same id always gives the same 32-byte fingerprint, and the fingerprint cannot be inverted unless the id can be guessed: the same person can be recognised without being named.'
      inputs={
        <div className='row'>
          <label className='field'>
            id
            <input type='text' name='id' maxLength={ID_BYTES.max} value={id} onChange={(e) => setId(e.target.value)} />
            {!valid && (
              <span className='bad'>
                {ID_BYTES.min} to {ID_BYTES.max} bytes of UTF-8
              </span>
            )}
          </label>
        </div>
      }
      params={params}
      disabled={!valid}
      build={build}
      rows={rows}
      circuit={circuit}
      onVerified={(outputs) => setSeen((all) => [...all, hex(fingerprintOf(outputs))])}
      onMeasured={onMeasured}
    />
  )
}
