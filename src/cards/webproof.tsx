import { useEffect, useMemo, useState } from "react"
import { Measurement } from "../components/proof"
import StatementCard from "../components/StatementCard"
import { build, circuit, falseClaim, otherStatement, rows, Session } from "../statements/webproof"

const FIXTURE = "/fixtures/session.json"

export default function WebProofCard({ onMeasured }: { onMeasured: (m: Measurement) => void }) {
  const [session, setSession] = useState<Session | null>(null)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    fetch(FIXTURE)
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error(response.statusText))))
      .then(setSession, (reason) => setError(String(reason)))
  }, [])
  const params = useMemo(() => (session ? { session } : null), [session])
  if (!params)
    return (
      <div className='card'>
        <h3>Web Proof</h3>
        <p className='desc'>{error ? `the session could not be loaded: ${error}` : "loading the session…"}</p>
      </div>
    )
  return (
    <StatementCard
      id='webproof'
      title='Web Proof'
      tag='40 nodes · 23 circuits'
      description='Synthetic session data, the exact statement shape of production.'
      inputs={
        <div className='session'>
          <div className='slbl'>HTTPS session · synthetic, fixed</div>
          <pre>
            {params.session.request}
            {"\n"}
            {params.session.response}
          </pre>
        </div>
      }
      params={params}
      build={build}
      rows={rows}
      circuit={circuit}
      otherStatement={otherStatement}
      falseClaim={falseClaim}
      onMeasured={onMeasured}
    />
  )
}
