import { useEffect, useState } from "react"
import { failingStep, PROVER, VERIFIER } from "../walkthrough"
import { integer } from "./format"
import { flipAt, Outcome, Proven, sectionAt } from "./proof"

interface Props {
  proven: Pick<Proven<unknown>, "proof" | "sections">
  outcome: Outcome | null
  /** The statement-dependent steps, `DETAIL[card]`. */
  detail: Record<string, string>
  open: boolean
  onToggle: () => void
}

const COLOUR: Record<string, string> = {
  "copath seeds": "#91caff",
  "hidden leaf commitments": "#69b1ff",
  corrections: "#95de64",
  d: "#ffd666",
  response: "#ffa39e",
  outputs: "#ff7875",
}
const GREY = "#d9d9d9"

/** The playback: one tick per 560 ms. The prover's steps light up one by one, then the proof is
 *  sent, then the verifier's steps, each taking a tick to run and a tick to come out ok or bad. */
const TICK_MS = 560
const SENT = PROVER.length
const LAST = SENT + 2 + VERIFIER.length

export default function ProofInside({ proven, outcome, detail, open, onToggle }: Props) {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (!open) return
    setTick(0)
    const timer = setInterval(() => {
      setTick((t) => {
        if (t + 1 >= LAST) clearInterval(timer)
        return t + 1
      })
    }, TICK_MS)
    return () => clearInterval(timer)
  }, [open, proven, outcome])

  const total = proven.proof.length
  const cheat = outcome?.kind === "rejected" ? outcome.cheat : null
  const broken = cheat === "flip" ? sectionAt(proven.sections, flipAt(proven.sections)) : null
  const failsAt = outcome?.kind === "rejected" ? failingStep(outcome.reason) : -1

  const filled = (name: string) => !open || PROVER.some((step, i) => tick > i && step.segs?.includes(name))
  const sent = open && tick > SENT
  const running = VERIFIER.findIndex((_, j) => tick === SENT + 2 + j)
  const reads = new Set(running >= 0 ? (VERIFIER[running].reads ?? []) : [])

  const verifierState = (j: number): "" | "skip" | "on" | "on bad" | "on ok" => {
    if (!open || tick <= SENT + 1 + j) return ""
    if (failsAt >= 0 && j > failsAt) return "skip"
    if (tick <= SENT + 2 + j) return "on"
    return j === failsAt ? "on bad" : "on ok"
  }

  return (
    <div className='inside'>
      <div className='striprow'>
        <div className='strip'>
          {proven.sections.map((section) => {
            const share = (100 * section.bytes) / total
            return (
              <i
                key={section.name}
                className={`${filled(section.name) ? "filled" : ""}${reads.has(section.name) ? " read" : ""}${sent && section.name === broken ? " broken" : ""}`}
                style={{ width: `${share.toFixed(2)}%`, ["--seg" as string]: COLOUR[section.name] ?? GREY }}
                title={`${section.name} · ${integer(section.bytes)} B`}
              >
                {share > 7 ? `${section.name} ${integer(section.bytes)}` : ""}
              </i>
            )
          })}
        </div>
        <button className='mini' onClick={onToggle}>
          {open ? "hide the walkthrough" : "▶ walk through: how it was made and checked"}
        </button>
      </div>
      {open && (
        <div className='lanes'>
          <div className='lane'>
            <h5>The prover</h5>
            {PROVER.map((step, i) => (
              <div key={i} className={`lstep${step.challenge ? " chal" : ""}${tick > i ? " on" : ""}`}>
                <span className='n'>{step.n}</span>
                <span>{detail[`p${i}`] ?? step.text}</span>
              </div>
            ))}
            <div className='outcome'>{sent && broken && `sent… with one byte of "${broken}" flipped on the way`}</div>
          </div>
          <div className={`arrow${sent ? " on" : ""}`}>→</div>
          <div className='lane ver'>
            <h5>The verifier</h5>
            {VERIFIER.map((step, j) => {
              const state = verifierState(j)
              return (
                <div key={j} className={`lstep ${state}`}>
                  <span className='n'>{step.n}</span>
                  <span>
                    {detail[`v${j}`] ?? step.text}
                    {state === "on bad" && ` — ${step.why}`}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
