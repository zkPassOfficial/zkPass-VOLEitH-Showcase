# zkPass-VOLEitH-Showcase

A web page that proves and verifies zero-knowledge statements in the browser, with the same
prover that zkPass Web Proofs use. Nothing leaves the page: the prover and the verifier are one
WebAssembly module and the statements are built in TypeScript. Timings and proof sizes are
measured as a card runs; the reference table starts from recorded values and switches to the
values measured here.

Four statements, each with its own card:

| card                  | statement                                                                                 | what the verifier learns                                                 |
| --------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Compare               | `a <relation> b` over two 64-bit numbers                                                  | one bit                                                                  |
| AES                   | the ciphertext is this plaintext under this key, AES-CTR block by block                   | one bit                                                                  |
| Anonymous Fingerprint | the AES-256 one-way function of an id                                                     | 32 bytes that cannot be inverted, unless the id can be guessed and tried |
| Web Proof             | a synthetic HTTPS session: the request carries an address, one response field is revealed | one bit and the field                                                    |

Between them the cards show three ways a proof can go wrong: a byte flipped in transit (every
card), a check against another statement (Compare, Web Proof), and an honest proof of a false
claim (AES, Web Proof). The walkthrough under a proof replays, at a fixed pace, how the prover
made it and how the verifier checked it, on the proof's real byte layout.

## What it implements

The proof system is VOLE-in-the-Head: the prover builds a VOLE correlation from vector
commitments opened all but one (_Publicly Verifiable Zero-Knowledge and Post-Quantum Signatures
From VOLE-in-the-Head_, [eprint 2023/996](https://eprint.iacr.org/2023/996), §3.1), commits the
witness through it, and proves every AND gate and AES S-box as a low-degree polynomial constraint
on the commitments, folded by random weights into one check evaluated at the verifier's key Δ.

The prover and the verifier are zkPass's Rust implementation of that system, compiled to
WebAssembly and vendored here as `src/wasm-circuit/` (proof version 9, k ∈ {4, 8}). This
repository builds statements and calls the module; it does not parse proofs itself.

## What it optimises

On top of the paper's proof system, the implementation optimises the protocol in these ways:

- **A statement as a waterfall of nodes.** Instead of one flattened circuit, a statement is a
  graph of nodes committed and checked one after another in dependency order, with an edge
  check binding each node's inputs to the outputs it is fed from. Prover and verifier hold one
  node's wires at a time rather than the whole circuit, so memory is bounded by the largest node:
  for a Web Proof of 40 nodes, about 10× less than the flattened circuit needs.
- **AES as a gadget, not as gates.** An AES block commits a short witness (key, block, the
  S-box outputs of the key schedule, every second round state) and proves byte-level
  constraints over GF(2⁸) instead of 6 400 AND gates: about 5.5× fewer committed rows per block.
  A Web Proof is mostly AES blocks, so the proof is about 3× smaller and proving and verifying
  about 3× faster.
- **A larger chunk size, chosen by the prover.** k = 8 instead of k = 4 means half as many
  commitment trees with the same soundness: the proof halves, for about 3× the prover's work.
  The proof carries its k, so nothing has to be agreed in advance: in production the prover
  reads its own environment and picks k on the spot, the smallest proof a laptop can make in
  milliseconds, the fastest one a phone or an extension can make without stalling, and the
  verifier accepts either with no change in security.
- **A faster pseudorandom core.** Most of a proof's work is expanding every leaf of the
  commitment trees into a long pseudorandom stream, and re-deriving the three challenges from
  the transcript. Both now run on a ChaCha stream: the leaves are expanded in one pass, and the
  challenges are expanded from one 256-bit hash instead of being derived one after another in a
  serial chain. Proving and verifying run about 3× faster.
- **A tighter encoding.** Every committed bit used to take a byte of the proof; eight now share
  one. The correction vectors travel as a single flat vector with one length prefix instead of
  one vector per block, and only for τ − 1 trees, since the first tree carries the common value
  itself. A node's dependencies are recorded as wire ranges instead of one entry per wire. The
  proof is about 1.2× smaller.

The rest of the stack was reworked accordingly: the row layout and wiring of a statement, the
three-round transcript and its challenge expansion, GF(2¹²⁸) arithmetic on carry-less multiply
instructions, the degree-7 polynomial commitments and their masking, the consistency hash, the
verifier's input validation and resource bounds, the proof byte format, the Rust–WebAssembly
boundary, and so on. All of it compounds into proofs **8× smaller**, proving and verification
**10× faster** and memory **10× lower**, with no change in security.

## Install, build, run

Node 20 or later and Yarn 1.

```bash
yarn install --frozen-lockfile
yarn lint
yarn build
yarn start         # http://localhost:9018
```

`yarn dev` serves the page with hot reload on port 3000.

## The simplest example

Prove that 5 > 3 at k = 8 and verify it:

```ts
import { proofInput, prove, ready, statementBytes, verify } from "./src/zk-build"
import { build } from "./src/statements/compare"

await ready()
const { statement, witness } = build({ a: 5n, b: 3n, relation: ">" })
const { proof } = prove(proofInput(statement, witness, 8))
const { outputs } = verify(statementBytes(statement), proof)
outputs[0].groups[0][0] // true
```

## Where to read

```text
src/zk-build/        the wasm boundary: statement bytes, prove, verify, proof sections
src/statements/      the four statements: how each is built, what its rows show, how to break it
src/walkthrough.ts   the prover's and the verifier's steps, in the order the implementation runs them
src/components/      one generic card and the page's sections
src/cards/           one file per card: its inputs and parameters
src/benchmarks.json  the reference timings on the page, with where and when they were measured
```

Start with `src/zk-build/index.ts`, then `src/statements/compare.ts`, the smallest statement.

## License

Apache License 2.0; see `LICENSE`.

## Stay Connected

Join our community for updates and discussions:

- Twitter: [@zkPass](https://twitter.com/zkPass)
- Discord: [zkPass](https://discord.gg/zkpass)
- Website: [zkPass Official Website](https://zkpass.org)
