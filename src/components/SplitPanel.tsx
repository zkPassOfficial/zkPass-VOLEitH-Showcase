import { Fragment, ReactNode } from "react"
import { Action, Row } from "../statements/types"
import { failingStep, VERIFIER } from "../walkthrough"
import { integer } from "./format"
import { flipAt, Outcome, Phase, Proven } from "./proof"

interface Props {
  rows: Row[]
  phase: Phase
  proven: Pick<Proven<unknown>, "proof" | "sections"> | null
  outcome: Outcome | null
  /** Whether the row buttons can act: a proof exists, nothing is running. */
  canAct: boolean
  onAction: (action: Action) => void
  onFlip: () => void
}

const MASK = { min: 3, max: 26 }
const SAMPLE = { before: 3, after: 5 }

const STATE: Record<Phase, string> = {
  idle: "waiting for a proof",
  proving: "waiting for a proof",
  verifying: "checking the proof…",
  verified: "proof accepted",
  rejected: "proof rejected",
  failed: "proving failed",
}

const byte = (value: number) => value.toString(16).padStart(2, "0")

/** The two columns: what the prover holds, and what the verifier sees and learns. */
export default function SplitPanel({ rows, phase, proven, outcome, canAct, onAction, onFlip }: Props) {
  const cheat = outcome?.kind === "rejected" ? outcome.cheat : null
  const claimFalse = phase === "verified" && rows.some((row) => row.kind === "claim" && !row.ok)
  const state = claimFalse ? "proof accepted · claim false" : outcome?.kind === "failed" ? `${STATE.failed} · ${outcome.reason}` : STATE[phase]
  const stateClass = claimFalse ? "warn" : phase === "verified" ? "on" : phase === "rejected" || phase === "failed" ? "off" : ""

  // a rejected proof is not attacked twice
  const button = (label: string, onClick: () => void, again: boolean) => (
    <button className='mini' disabled={!canAct || !again} onClick={onClick}>
      {label}
    </button>
  )
  const cell = (text: ReactNode, action?: Action, stack = false) =>
    action ? (
      <span className={`v has-act${stack ? " stack" : ""}`}>
        <span>{text}</span>
        {button(action.label, () => onAction(action), action.kind === "falseClaim" || cheat === null)}
      </span>
    ) : (
      <span className='v'>{text}</span>
    )
  const label = (row: Row) => <span className='k'>{row.label}</span>
  const mask = (text: string) => <span className='v mask'>{"▓".repeat(Math.min(Math.max(text.length, MASK.min), MASK.max))}</span>

  // eight bytes of the proof around the one "flip a byte" changes
  const proofRow = (side: "prover" | "verifier") => {
    if (!proven) return <span className='v pend'>—</span>
    const at = flipAt(proven.sections)
    const flipped = cheat === "flip"
    const sample = Array.from(proven.proof.slice(at - SAMPLE.before, at + SAMPLE.after), (value, i) =>
      i === SAMPLE.before && flipped ? (
        <span key={i} className='chg'>
          {byte(value ^ 1)}{" "}
        </span>
      ) : (
        `${byte(value)} `
      ),
    )
    const sent = flipped && side === "prover"
    const caption = sent
      ? `· byte ${integer(at)} of ${integer(proven.proof.length)} flipped before sending`
      : `· ${side === "prover" ? "sent as is" : "received"}`
    const text = (
      <span>
        <span className='hex'>… {sample}…</span> <span className={sent ? "chg" : "pend"}>{caption}</span>
      </span>
    )
    if (side === "verifier") return <span className='v'>{text}</span>
    return (
      <span className='v has-act'>
        {text}
        {button("flip a byte", onFlip, cheat === null)}
      </span>
    )
  }

  // what verifying reveals: a claim in green or amber, a result in green, a note as it is; a
  // rejection is explained once, on the first of them
  const revealed = (row: Row) => row.kind === "claim" || row.kind === "result" || row.kind === "note"
  const first = rows.find(revealed)
  const revealedCell = (row: Row) => {
    if (phase === "verified") {
      const tone = row.kind === "claim" ? (row.ok ? " ok" : " wn") : row.kind === "result" ? " ok" : ""
      return <span className={`v pop${tone}`}>{row.verifierText ?? row.text}</span>
    }
    if (row.kind === "note") return null
    if (outcome?.kind === "rejected") {
      const why = row === first ? ` · ${VERIFIER[failingStep(outcome.reason)].why}` : ""
      return <span className='v no pop'>✗ rejected{why}</span>
    }
    return <span className='v pend'>—</span>
  }

  return (
    <div className='split'>
      <div className='side'>
        <div className='sh'>The prover</div>
        <div className='kv'>
          {rows.map(
            (row) =>
              row.kind !== "verifier" &&
              row.kind !== "note" && (
                <Fragment key={row.label}>
                  {label(row)}
                  {cell(row.text, row.action?.kind === "falseClaim" ? row.action : undefined)}
                </Fragment>
              ),
          )}
          <span className='k'>proof</span>
          {proofRow("prover")}
        </div>
      </div>
      <div className='side ver'>
        <div className='sh'>
          The verifier <small className={stateClass}>{state}</small>
        </div>
        <div className='kv'>
          {rows.map((row) => {
            if (row.kind === "prover") return null
            const other = row.action?.kind === "otherStatement" ? row.action : undefined
            const alt = cheat === "other" ? other?.alt : undefined
            const value =
              row.kind === "private" ? mask(row.text) : revealed(row) ? revealedCell(row) : cell(alt?.text ?? row.text, other, row.kind === "verifier")
            if (value === null) return null
            return (
              <Fragment key={row.label}>
                {label(row)}
                {value}
                {(alt || row.caption) && <span className={`cap${alt ? " bad" : ""}`}>{alt?.note ?? row.caption}</span>}
              </Fragment>
            )
          })}
          <span className='k'>proof</span>
          {proofRow("verifier")}
        </div>
      </div>
    </div>
  )
}
