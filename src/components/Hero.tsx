import { useEffect, useRef, useState } from "react"

// Five-row block letters for the word mark.
const FONT: Record<string, string[]> = {
  Z: ["█████", "   █ ", "  █  ", " █   ", "█████"],
  K: ["█   █", "█  █ ", "███  ", "█  █ ", "█   █"],
  P: ["████ ", "█   █", "████ ", "█    ", "█    "],
  A: [" ███ ", "█   █", "█████", "█   █", "█   █"],
  S: [" ████", "█    ", " ███ ", "    █", "████ "],
}
const LOGO = [0, 1, 2, 3, 4].map((row) => [..."ZKPASS"].map((letter) => FONT[letter][row].replace(/█/g, "██").replace(/ /g, "  ")).join("   ")).join("\n")

const COMMAND = "./see-it-work --prove --verify --then-break-it"
const NOISE = { width: 118, height: 14, glyphs: "          .  . :-=+*#%@", churn: 60 }

export default function Hero() {
  const [typed, setTyped] = useState("")
  const noise = useRef<HTMLPreElement>(null)

  useEffect(() => {
    let length = 0
    const typing = setInterval(() => {
      setTyped(COMMAND.slice(0, ++length))
      if (length >= COMMAND.length) clearInterval(typing)
    }, 28)
    const glyph = () => NOISE.glyphs[Math.floor(Math.random() * NOISE.glyphs.length)]
    const rows = Array.from({ length: NOISE.height }, () => Array.from({ length: NOISE.width }, glyph))
    const draw = () => {
      if (noise.current) noise.current.textContent = rows.map((row) => row.join("")).join("\n")
    }
    draw()
    const living = setInterval(() => {
      for (let n = 0; n < NOISE.churn; n++) rows[Math.floor(Math.random() * NOISE.height)][Math.floor(Math.random() * NOISE.width)] = glyph()
      draw()
    }, 110)
    return () => {
      clearInterval(typing)
      clearInterval(living)
    }
  }, [])

  return (
    <>
      <div className='tbar'>
        <span>⊙</span>
        <span>zkpass@showcase: ~ — zsh</span>
        <span>×</span>
      </div>
      <div className='sidetag'>SHOWCASE · PROOF v9 · SCROLL ↓</div>
      <header className='top'>
        <div className='hl' />
        <div className='vl' />
        <div className='target' />
        <div className='wrap'>
          <div className='hero'>
            <pre className='ascii'>{LOGO}</pre>
            <div className='meta'>
              {"// PROJECT: VOLE-IN-THE-HEAD · ZERO-KNOWLEDGE PROOFS OF HTTPS SESSIONS"}
              <br />
              {"// PROOF VERSION 9 · K ∈ {4, 8} · ALL IN THIS TAB"}
              <br />
              <span className='lead'>Prove and verify in zero knowledge, in your browser, in milliseconds.</span>
            </div>
            <div className='cmd'>
              <span className='user'>zkpass@showcase</span>:~$ <span>{typed}</span>
              <span className='cur' />
              <a href='#cards' className='exec'>
                [ EXECUTE ]
              </a>
            </div>
            <pre className='noise' ref={noise} />
          </div>
        </div>
      </header>
    </>
  )
}
