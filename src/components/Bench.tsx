import { useEffect, useState } from "react"
import reference from "../benchmarks.json"
import { bytes, millis } from "./format"
import { CardId, Measurement } from "./proof"

const TITLE: Record<CardId, string> = {
  compare: "Compare",
  aes: "AES",
  fingerprint: "Anonymous Fingerprint",
  webproof: "Web Proof · an HTTPS session",
}

/** The reference measurements, replaced row by row by what the cards above measured here. */
export default function Bench({ measured }: { measured: Partial<Record<CardId, Measurement>> }) {
  const [device, setDevice] = useState("this device")
  useEffect(() => {
    const chrome = /Chrome\/(\d+)/.exec(navigator.userAgent)
    setDevice(`this device · ${chrome ? `Chrome ${chrome[1]}` : "browser"}, ${navigator.hardwareConcurrency ?? "?"} cores`)
  }, [])

  return (
    <section>
      <div className='wrap'>
        <h2>Fast, small, nothing to trust</h2>
        <div className='scroll'>
          <table className='bench'>
            <thead>
              <tr>
                <th>statement</th>
                <th className='num'>k</th>
                <th className='num'>prove</th>
                <th className='num'>verify</th>
                <th className='num'>proof</th>
                <th>device</th>
              </tr>
            </thead>
            <tbody>
              {(Object.keys(TITLE) as CardId[]).map((card) => {
                const mine = measured[card]
                const row = mine ?? reference.rows[card]
                // the key change restarts the flash
                return (
                  <tr key={`${card}-${mine?.proveMs ?? "reference"}`} className={mine ? "mine flash" : ""}>
                    <td>{TITLE[card]}</td>
                    <td className='num'>{row.k}</td>
                    <td className='num'>{millis(row.proveMs)}</td>
                    <td className='num'>{millis(row.verifyMs)}</td>
                    <td className='num'>{bytes(row.bytes)}</td>
                    <td className='dev'>{mine ? device : `reference · ${reference.machine}, ${reference.browser}`}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className='claims'>
          <div className='q'>
            <h4>No trusted setup</h4>
            <p>No ceremony, no proving or verifying key to generate or distribute: the first proof needs nothing but the wasm module and the statement.</p>
          </div>
          <div className='q'>
            <h4>Symmetric primitives only</h4>
            <p>
              The proof system is built from AES, Blake2b and ChaCha: no elliptic curves, no pairings, no number-theoretic assumption for a quantum computer to
              break. What the security proof covers is stated with the prover library.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
