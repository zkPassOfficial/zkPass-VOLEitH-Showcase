import { useEffect, useState } from "react"
import { Measurement } from "../components/proof"
import StatementCard from "../components/StatementCard"
import { build, circuit, falseClaim, MAX_BYTES, Params, params as freshParams, rows, validPlaintext } from "../statements/aes"

export default function AesCard({ onMeasured }: { onMeasured: (m: Measurement) => void }) {
  const [plaintext, setPlaintext] = useState("hello, verifier")
  // random, so drawn in the browser only
  const [params, setParams] = useState<Params | null>(null)
  const valid = validPlaintext(plaintext)
  useEffect(() => {
    if (validPlaintext(plaintext)) setParams(freshParams(plaintext))
  }, [plaintext])
  if (!params) return null
  return (
    <StatementCard
      id='aes'
      title='AES'
      tag='AES-128 gadget · 1 216 rows per block'
      description='The AES-128 block a Web Proof decrypts its TLS records with, proven on its own.'
      inputs={
        <div className='row'>
          <label className='field'>
            plaintext (a block per 16 bytes)
            <input type='text' name='plaintext' maxLength={MAX_BYTES} value={plaintext} onChange={(e) => setPlaintext(e.target.value)} />
            {!valid && <span className='bad'>1 to {MAX_BYTES} bytes of UTF-8</span>}
          </label>
        </div>
      }
      params={params}
      disabled={!valid}
      build={build}
      rows={rows}
      circuit={circuit}
      falseClaim={falseClaim}
      onMeasured={onMeasured}
      footnote='The same block as boolean gates: 6 400 AND gates, 6 656 rows — 5.5× the gadget.'
    />
  )
}
