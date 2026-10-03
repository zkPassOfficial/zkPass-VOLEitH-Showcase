import { ReactNode } from "react"

const TREE = { k: 4, hidden: 5, width: 520, rowGap: 36, top: 16 }

/** One of the τ trees, k = 4, drawn in its opened state: one leaf unopened, its copath outlined. */
function Tree() {
  const { k, hidden, width, rowGap, top } = TREE
  const at = (level: number, index: number) => ({ x: ((index + 0.5) * width) / 2 ** level, y: top + level * rowGap })
  const copath = new Set<string>()
  for (let level = k, index = hidden; level > 0; level--, index >>= 1) copath.add(`${level}-${index ^ 1}`)
  const edges: ReactNode[] = []
  const nodes: ReactNode[] = []
  for (let level = 0; level <= k; level++) {
    for (let i = 0; i < 2 ** level; i++) {
      const key = `${level}-${i}`
      const { x, y } = at(level, i)
      if (level > 0) {
        const parent = at(level - 1, i >> 1)
        edges.push(<line key={key} className={`edge${copath.has(key) ? " copath" : ""}`} x1={parent.x} y1={parent.y} x2={x} y2={y} />)
      }
      const leaf = level === k
      const kind = leaf && i === hidden ? "hidden" : copath.has(key) ? "copath" : leaf ? "regrown" : "committed"
      nodes.push(<circle key={key} className={`node-${kind}`} cx={x} cy={y} r={leaf ? 9 : 7} />)
    }
  }
  return (
    <svg viewBox={`0 0 ${width} ${top + k * rowGap + 16}`}>
      {edges}
      {nodes}
    </svg>
  )
}

const Node = ({ role, children }: { role: string; children: string }) => <div className={`node n-${role}`}>{children}</div>
const Arrow = ({ label }: { label?: string }) => <span className='arr'>{label ? `→ ${label} →` : "→"}</span>

export default function TrustLayers() {
  return (
    <section>
      <div className='wrap'>
        <h2>Why you can trust the result</h2>
        <p className='sub'>Four ideas a proof is made of. The cards above show each of them at work.</p>
        <div className='trust'>
          <div className='t'>
            <div className='tn'>1</div>
            <div>
              <h4>A commitment the verifier cannot see through, and the prover cannot reopen</h4>
              <p>
                Everything rests on one correlation: the prover holds random bits u and tags v, the verifier holds a key Δ and q = u·Δ + v. The tags hide u, so
                the verifier learns nothing. Opening a bit to a different value would need a new tag v′ = q − u′·Δ, which means guessing Δ: 2⁻¹²⁸. And the
                relation is linear, so commitments add without any interaction.
              </p>
              <div className='fig'>
                <div className='fgrid'>
                  <span className='fl'>prover</span>
                  <span className='hex'>u = 1 0 1 1 0 1 0 0 …</span>
                  <span className='hex'>v = ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ …</span>
                  <span className='fl'>verifier</span>
                  <span className='hex'>Δ</span>
                  <span className='hex'>q = u·Δ + v = ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ …</span>
                </div>
              </div>
              <div className='link'>→ the ▓▓▓ rows on every card: inputs masked, only the declared outputs opened</div>
            </div>
          </div>
          <div className='t'>
            <div className='tn'>2</div>
            <div>
              <h4>Where the commitment comes from: trees opened all but one</h4>
              <p>
                The prover builds that correlation itself: τ trees of 2ᵏ leaves, every leaf committed, the roots hashed. The verifier names one unopened leaf
                per tree, and the τ unopened positions together are its key Δ. Δ comes into existence only after the proof&apos;s main steps are done, which is
                exactly when binding is needed.
              </p>
              <div className='fig tree'>
                <Tree />
                <div className='fcap'>
                  One of the τ trees, k = 4: the root at the top, its 2ᵏ = 16 leaves at the bottom. From 4 copath seeds (green outline) the verifier regrows 15
                  of the 16 leaves and their commitments; the dashed leaf stays unopened and only its commitment is sent, so the root can still be checked.
                </div>
              </div>
            </div>
          </div>
          <div className='t'>
            <div className='tn'>3</div>
            <div>
              <h4>The check on top: one polynomial for every gate</h4>
              <p>
                The witness is committed as d = w ⊕ u. Linear gates need no committed row of their own; every AND gate, and every S-box relation of an AES
                block, becomes a low-degree polynomial constraint on the commitments. A random combination folds all of them into one polynomial; the prover
                sends its coefficients, masked by a few spare rows of the correlation, and the verifier evaluates it at Δ. A false witness survives only if Δ
                happens to be a root of that nonzero polynomial: roughly a handful of values out of 2¹²⁸.
              </p>
              <div className='fig'>
                <div className='flow'>
                  <Node role='constant'>f₁</Node>
                  <Node role='constant'>f₂</Node>
                  <Node role='constant'>f₃</Node>
                  <span className='arr'>…</span>
                  <Node role='constant'>fₜ</Node>
                  <Arrow label='random weights' />
                  <Node role='check'>one polynomial p(X)</Node>
                  <Arrow label='at Δ' />
                  <Node role='output'>p(Δ) = 0 ?</Node>
                </div>
              </div>
              <div className='link'>→ claim another plaintext or address: the proof is valid, the output is false</div>
            </div>
          </div>
          <div className='t'>
            <div className='tn'>4</div>
            <div>
              <h4>No interaction, so a proof belongs to its statement and to its every byte</h4>
              <p>
                The verifier&apos;s three challenges are hashes of the statement and everything produced so far, computed by the prover itself. Nothing can be
                replayed against another statement. A byte changed before the opening moves Δ, so the trees no longer open to their root; a byte changed in the
                opening itself no longer rebuilds the root. Trying challenges until a lucky one comes up is no shortcut either: each try is a full proof with
                roughly a 2⁻¹²⁸ chance. In production the TLS proxy also signs the cipher records, so the session itself cannot be forged.
              </p>
              <div className='fig'>
                <div className='flow'>
                  <Node role='constant'>statement</Node>
                  <Arrow label='hash' />
                  <Node role='check'>challenge 1</Node>
                  <Arrow label='hash' />
                  <Node role='check'>challenge 2</Node>
                  <Arrow label='hash' />
                  <Node role='check'>challenge 3</Node>
                  <Arrow />
                  <Node role='output'>Δ</Node>
                </div>
              </div>
              <div className='link'>→ flip a byte, check against a &lt; b or other cipher records: the trees fail to rebuild, step 3 goes red</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
