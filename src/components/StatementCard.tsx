import { ReactNode, useEffect, useMemo, useRef, useState } from "react"
import { Action, CircuitNode, Claim, Row } from "../statements/types"
import { DETAIL } from "../walkthrough"
import { NodeOutput, proofInput, proofSections, prove, ready, statementBytes, verify } from "../zk-build"
import { Statement } from "../zk-build/types"
import Circuit from "./Circuit"
import { bytes, millis } from "./format"
import { CardId, Cheat, flipAt, K, Measurement, Outcome, Phase, Proven } from "./proof"
import ProofInside from "./ProofInside"
import SplitPanel from "./SplitPanel"
import Stat from "./Stat"

interface Props<P> {
  id: CardId
  title: string
  /** The circuit in a few words, on the button that shows it. */
  tag: string
  description: string
  inputs: ReactNode
  params: P
  disabled?: boolean
  build: (p: P) => Claim
  rows: (p: P, outputs?: NodeOutput[]) => Row[]
  circuit: (p: P) => CircuitNode[]
  otherStatement?: (p: P) => Statement
  falseClaim?: (p: P) => P
  onVerified?: (outputs: NodeOutput[]) => void
  onMeasured: (m: Measurement) => void
  footnote?: string
}

/** Lets the browser paint between two synchronous wasm calls. */
const frame = () => new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve)))

/** One statement: inputs, prove and verify, the two columns, and the proof's inside. A change of
 *  the parameters or of k, or an input turning invalid, drops the proof; a run still in flight
 *  then commits nothing. */
export default function StatementCard<P>(props: Props<P>) {
  const { id, title, tag, description, inputs, params, disabled, build, rows, circuit, otherStatement, falseClaim, onVerified, onMeasured, footnote } = props
  const [k, setK] = useState<K>(8)
  const [busy, setBusy] = useState<"proving" | "verifying" | null>(null)
  const [proven, setProven] = useState<Proven<P> | null>(null)
  const [outcome, setOutcome] = useState<Outcome | null>(null)
  const [showCircuit, setShowCircuit] = useState(false)
  const [showInside, setShowInside] = useState(false)
  const generation = useRef(0)

  useEffect(() => {
    generation.current++
    setBusy(null)
    setProven(null)
    setOutcome(null)
    setShowInside(false)
  }, [params, k, disabled])

  async function run(p: P) {
    const token = ++generation.current
    setBusy("proving")
    setProven(null)
    setOutcome(null)
    let made: Proven<P>
    try {
      await ready()
      await frame()
      if (token !== generation.current) return
      const { statement, witness } = build(p)
      const { proof, ms } = prove(proofInput(statement, witness, k))
      made = { params: p, statement: statementBytes(statement), proof, sections: proofSections(proof), proveMs: ms }
    } catch (error) {
      if (token === generation.current) {
        setOutcome({ kind: "failed", reason: String(error) })
        setBusy(null)
      }
      return
    }
    setProven(made)
    await check(made, made.statement, made.proof, null)
  }

  async function check(made: Proven<P>, statement: Uint8Array, proof: Uint8Array, cheat: Cheat | null) {
    const token = generation.current
    setBusy("verifying")
    await frame()
    if (token !== generation.current) return
    let outcome: Outcome
    try {
      const { outputs, ms } = verify(statement, proof)
      outcome = { kind: "accepted", outputs, verifyMs: ms }
    } catch (error) {
      outcome = { kind: "rejected", cheat, reason: String(error) }
    }
    setOutcome(outcome)
    setBusy(null)
    if (outcome.kind === "accepted") {
      onVerified?.(outcome.outputs)
      onMeasured({ k, proveMs: made.proveMs, verifyMs: outcome.verifyMs, bytes: proof.length })
    }
  }

  function flip() {
    if (!proven) return
    const tampered = new Uint8Array(proven.proof)
    tampered[flipAt(proven.sections)] ^= 1
    check(proven, proven.statement, tampered, "flip")
  }

  function act(action: Action) {
    if (!proven) return
    if (action.kind === "falseClaim" && falseClaim) run(falseClaim(params))
    if (action.kind === "otherStatement" && otherStatement) check(proven, statementBytes(otherStatement(proven.params)), proven.proof, "other")
  }

  const phase: Phase = busy ?? (outcome === null ? "idle" : outcome.kind === "accepted" ? "verified" : outcome.kind)
  const outputs = outcome?.kind === "accepted" ? outcome.outputs : undefined
  const shown = rows(proven?.params ?? params, outputs)
  const verifyStat = outcome?.kind === "accepted" ? outcome.verifyMs : outcome?.kind === "rejected" ? "rejected" : null
  const nodes = useMemo(() => (showCircuit ? circuit(params) : []), [circuit, params, showCircuit])

  return (
    <div className='card'>
      <h3>
        {title}
        <button className={`tag${showCircuit ? " open" : ""}`} onClick={() => setShowCircuit(!showCircuit)}>
          {tag} <span className='caret'>▾</span>
        </button>
      </h3>
      <p className='desc'>{description}</p>
      {showCircuit && (
        <div className='circuit'>
          <Circuit nodes={nodes} />
        </div>
      )}
      {inputs}
      <div className='row'>
        <span className='kswitch' role='group' aria-label='k'>
          {([4, 8] as const).map((value) => (
            <button
              key={value}
              type='button'
              className={k === value ? "on" : ""}
              aria-pressed={k === value}
              disabled={busy !== null}
              onClick={() => setK(value)}
            >
              k = {value}
            </button>
          ))}
        </span>
        <button className={`primary${busy ? " busy" : ""}`} disabled={busy !== null || disabled} onClick={() => run(params)}>
          {busy === "proving" ? "Proving…" : busy === "verifying" ? "Verifying…" : "Prove & verify"}
        </button>
      </div>
      <div className='results'>
        <Stat label='prove' value={proven?.proveMs ?? null} format={millis} />
        <Stat label='verify' value={verifyStat} format={millis} />
        <Stat label='proof' value={proven?.proof.length ?? null} format={bytes} />
      </div>
      <SplitPanel rows={shown} phase={phase} proven={proven} outcome={outcome} canAct={proven !== null && busy === null} onAction={act} onFlip={flip} />
      {proven && busy === null && (
        <ProofInside proven={proven} outcome={outcome} detail={DETAIL[id]} open={showInside} onToggle={() => setShowInside(!showInside)} />
      )}
      {footnote && <p className='desc'>{footnote}</p>}
    </div>
  )
}
