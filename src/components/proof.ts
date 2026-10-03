// What a card holds once it has proven something, and what verifying it came to.
import { NodeOutput, ProofSection } from "../zk-build"

export type K = 4 | 8

export type CardId = "compare" | "aes" | "fingerprint" | "webproof"

/** What a card reports once a proof is accepted, for the reference table. */
export interface Measurement {
  k: K
  proveMs: number
  verifyMs: number
  bytes: number
}

export interface Proven<P> {
  params: P
  statement: Uint8Array
  proof: Uint8Array
  sections: ProofSection[]
  proveMs: number
}

export type Cheat = "flip" | "other"

export type Outcome =
  { kind: "accepted"; outputs: NodeOutput[]; verifyMs: number } | { kind: "rejected"; cheat: Cheat | null; reason: string } | { kind: "failed"; reason: string }

export type Phase = "idle" | "proving" | "verifying" | "verified" | "rejected" | "failed"

/** The byte "flip a byte" changes. A rule of thumb for the demonstration: a third of the way
 *  in, which lands in the tree openings or the corrections, and past a section's 4-byte Borsh
 *  length prefix, which would make the proof malformed rather than rejected. */
export function flipAt(sections: ProofSection[]): number {
  const total = sections.reduce((sum, section) => sum + section.bytes, 0)
  const at = Math.floor(total * 0.317)
  let start = 0
  for (const section of sections) {
    if (at >= start && at < start + 4) return at + 4
    start += section.bytes
  }
  return at
}

/** The section a byte offset falls in. */
export function sectionAt(sections: ProofSection[], at: number): string {
  let start = 0
  for (const section of sections) {
    start += section.bytes
    if (at < start) return section.name
  }
  return sections[sections.length - 1].name
}
