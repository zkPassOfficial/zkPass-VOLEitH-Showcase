// The walkthrough's steps, in the order of the prover library's `prover.rs` and `verifier.rs`.
// `segs` are the proof sections a prover step produces and `reads` the sections a verifier step
// uses; `why` is how a verifier step's failure is reported. The steps whose content depends on the
// statement are written per card in `DETAIL`.

interface ProverStep {
  n: string
  text: string | null
  segs?: string[]
  challenge?: boolean
}

interface VerifierStep {
  n: string
  text: string | null
  reads?: string[]
  why?: string
}

export const PROVER: ProverStep[] = [
  { n: "1", text: null, segs: ["version · k · salt"] },
  {
    n: "2",
    text: "grow τ = 128/k trees of 2ᵏ leaves from fresh seeds (each tree's iv comes from the salt). Every leaf gets a seed and a commitment; a tree's root hashes its leaf commitments; the forest root hashes the τ roots.",
    segs: ["forest root"],
  },
  {
    n: "3",
    text: "expand every leaf into a PRG stream. Per 128-row block, u = Σ leaves and v by divide-and-conquer: tree 0's u is the prover's VOLE bits r, the v's are its tags q.",
  },
  { n: "4", text: "corrections cᵢ = uᵢ ⊕ u₀ for trees 1..τ, so every tree carries the same u.", segs: ["corrections"] },
  {
    n: "⟲",
    challenge: true,
    text: "challenge 1 = hash(version ‖ k ‖ salt ‖ statement ‖ forest root ‖ corrections). Computed by the prover, never sent by anyone. It also picks the universal hash.",
  },
  { n: "5", text: "consistency: ũ = H(u), and ṽⱼ = H(Vⱼ) for each of the 128 columns; the proof carries ũ and hash(ṽ).", segs: ["ũ and the digest of Ṽ"] },
  { n: "6", text: null, segs: ["d"] },
  { n: "7", text: null, segs: ["outputs"] },
  { n: "⟲", challenge: true, text: "challenge 2 = hash(challenge 1 ‖ ũ ‖ Ṽ ‖ d ‖ outputs). Draws χ for every constraint and ρ for every wire." },
  { n: "8", text: null, segs: ["response"] },
  { n: "9", text: null, segs: ["edge sum"] },
  { n: "⟲", challenge: true, text: "challenge 3 = hash(challenge 2 ‖ response ‖ edge sum) → Δ. Its k bits per tree name the one leaf that stays hidden." },
  { n: "10", text: "open every tree at Δ: the k copath seeds and the hidden leaf's commitment, per tree.", segs: ["copath seeds", "hidden leaf commitments"] },
]

export const VERIFIER: VerifierStep[] = [
  {
    n: "1",
    text: "read k from the proof (only 4 and 8 are accepted); lay out the statement; check every length in the proof against it.",
    reads: ["version · k · salt"],
    why: "the proof does not fit the statement's shape",
  },
  {
    n: "2",
    text: "re-derive challenges 1, 2 and 3 from the statement and the proof, Δ included.",
    reads: ["version · k · salt", "forest root", "corrections", "ũ and the digest of Ṽ", "d", "outputs", "response", "edge sum"],
  },
  {
    n: "3",
    text: "rebuild each tree from its copath seeds and hidden leaf commitment; the τ rebuilt roots must hash to the forest root.",
    reads: ["copath seeds", "hidden leaf commitments", "forest root", "version · k · salt"],
    why: "the rebuilt roots do not hash to the forest root",
  },
  {
    n: "4",
    text: "regrow the streams of the 2ᵏ − 1 opened leaves; per block, w from them, aligned with the corrections wherever a bit of Δ is set: the keys t = q ⊕ r·Δ.",
    reads: ["corrections"],
  },
  {
    n: "5",
    text: "consistency: column by column, ṽⱼ must equal H(Qⱼ) ⊕ Δⱼ·ũ, and the ṽⱼ must hash to the digest in the proof.",
    reads: ["ũ and the digest of Ṽ", "corrections"],
    why: "the consistency hashes do not match",
  },
  { n: "6", text: null, reads: ["d", "outputs"], why: "an output bit does not agree with its key" },
  { n: "7", text: "the edge sum recomputed from the keys with ρ must equal the proof's.", reads: ["edge sum"], why: "the edge binding fails" },
  {
    n: "8",
    text: "one polynomial check for the whole DAG: the response must balance against the constraint sum lifted by Δ and the mask keys.",
    reads: ["response", "d"],
    why: "the polynomial check fails",
  },
  { n: "9", text: "accept, and return the output bits, node by node." },
]

/** The statement-dependent steps, per card: prover 1, 6, 7, 8, 9 and verifier 6 (and 7 where the
 *  statement has no edges). Keys are `p<index>` / `v<index>` into the arrays above. */
export const DETAIL: Record<string, Record<string, string>> = {
  compare: {
    p0: "lay out the statement: one boolean node, the comparison circuit. A row per input wire (a and b) and per AND gate, XORs are free, then the mask rows. Check it fits the budget; draw a 16-byte salt.",
    p6: "commit the one node: a and b come from the witness; walk the gates in order, committing every input wire and every AND-gate output as d = w ⊕ r. XOR and INV gates need nothing. Keep the MACs.",
    p7: "the claim: the circuit's single output bit with its MAC.",
    p9: "the constraints: one degree-2 constraint per AND gate, weighted by χ, folded into one sum; hidden with the mask rows; that is the response.",
    p10: "edge sum: one node, every witness bit read once — nothing to bind. The 16-byte sum is sent all the same.",
    v5: "walk the same gates on (d, t, Δ): a key per committed wire, the free gates' keys follow linearly, one constraint per AND gate with χ. The claimed output bit must agree with its key.",
    v6: "the edge sum recomputed from the keys must equal the proof's (here, trivially).",
  },
  aes: {
    p0: "lay out the statement: per block, an AES-128 node (key and block wires plus its witness rows: 1 216), xor (plaintext ⊕ keystream), the ciphertext constant, and an equality; then the mask rows. Check it fits the budget; draw a 16-byte salt.",
    p6: "commit node by node: the AES node takes its key and counter from the witness, then commits its witness rows, the expanded key words, the saved round states and the output. The xor and equality nodes commit their wires gate by gate like any boolean circuit.",
    p7: "the claim: the equality's single output bit with its MAC (the AND of the blocks' equalities when there are several).",
    p9: "the constraints: the AES node's 160 constraints over GF(2⁸) embedded in GF(2¹²⁸) (S-box and key schedule) and the equality's AND constraints, each weighted by χ, folded into one sum; hidden with the mask rows; that is the response.",
    p10: "edge sum: binds the AES output to the xor input, and the xor output and the constant to the equality's inputs: ρ · (input MAC ⊕ the parent's output MAC), one ρ per wire.",
    v5: "evaluate node by node on (d, t, Δ): the AES rounds re-derived on keys with their 160 constraints, the boolean nodes gate by gate, every constraint weighted with χ. The claimed output bit must agree with its key.",
  },
  fingerprint: {
    p0: "lay out the statement: three nodes. A constant holding P₁ ‖ P₀ ‖ padding (one row for its witness bit), and two AES-256 nodes (key and block wires plus witness rows, 1 696 each): 3 393 rows, then the mask rows. Check it fits the budget; draw a 16-byte salt.",
    p6: "commit the two AES-256 nodes: each key is the id's bytes from the witness joined with the padding from the constant, the blocks are P₀ and P₁; then each node's witness rows, the expanded key words, the saved round states and the output.",
    p7: "the claim: both nodes' 128-bit outputs with their MACs — the 32-byte fingerprint, 256 committed bits.",
    p9: "the constraints: 216 constraints over GF(2⁸) embedded in GF(2¹²⁸) per AES-256 node, each weighted by χ, folded into one sum; hidden with the mask rows; that is the response.",
    p10: "edge sum: binds each AES node's key wires to the constant's padding and to the witness bits both nodes read: ρ · (input MAC ⊕ the other commitment), one ρ per wire.",
    v5: "evaluate both AES-256 nodes on (d, t, Δ): 14 rounds re-derived on keys, 216 constraints each weighted with χ. All 256 claimed output bits must agree with their keys.",
  },
  webproof: {
    p0: "lay out the statement: 40 nodes, 23 circuits. Seven AES-128 nodes (1 216 rows each), seven xor nodes, seven ciphertext constants with their equality checks, the four content checks, and_circuit and public_field: 14 551 rows, then the 768 mask rows. Check it fits the budget; draw a 16-byte salt.",
    p6: "commit the 40 nodes in id order: keys, counters and plaintext from the witness (1 984 bits); each AES node's witness rows; every boolean node's input wires and AND-gate outputs, gate by gate.",
    p7: "the claim: and_circuit's bit and public_field's 16 bits, 17 committed bits with their MACs.",
    p9: "the constraints: 7 × 160 GF(2⁸) constraints from the AES nodes and one degree-2 constraint per AND gate elsewhere, each weighted by χ, folded into one sum; hidden with the mask rows; that is the response.",
    p10: "edge sum: every edge of the DAG, ρ · (input MAC ⊕ the parent's output MAC), one ρ per wire; a witness bit read by several nodes is bound to its first commitment.",
    v5: "evaluate the 40 nodes on (d, t, Δ): AES rounds and boolean gates re-derived on keys, every constraint weighted with χ. The 17 claimed output bits must agree with their keys.",
  },
}

const REJECTED = "proof rejected: "
const FAILS_AT: Record<string, number> = {
  "forest root hash": 2,
  "VOLE consistency check": 4,
  "output commitment": 5,
  "edge binding": 6,
}
const POLYNOMIAL_CHECK = 7

/** The verifier step (an index into `VERIFIER`) a rejected proof fails at, from the library's
 *  `proof rejected: <check>` message. The library has one more check than the table names, its
 *  polynomial check, so every rejection the table does not name is taken for it. A message that
 *  is not a rejection is a malformed proof, step 1. */
export function failingStep(reason: string): number {
  if (!reason.startsWith(REJECTED)) return 0
  return FAILS_AT[reason.slice(REJECTED.length)] ?? POLYNOMIAL_CHECK
}
