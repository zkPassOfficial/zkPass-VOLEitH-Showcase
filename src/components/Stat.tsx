import { useEffect, useRef, useState } from "react"

interface Props {
  label: string
  /** A number counts up from zero; a string is shown as is; nothing is a dash. */
  value: number | string | null
  format: (value: number) => string
}

const COUNT_MS = 450

export default function Stat({ label, value, format }: Props) {
  const [shown, setShown] = useState<number | null>(null)
  const [flash, setFlash] = useState(false)
  const frame = useRef(0)
  const unflash = useRef(0)

  useEffect(() => {
    cancelAnimationFrame(frame.current)
    clearTimeout(unflash.current)
    if (typeof value !== "number") {
      setShown(null)
      return
    }
    const target = value
    const started = performance.now()
    setFlash(true)
    const tick = () => {
      const t = Math.min(1, (performance.now() - started) / COUNT_MS)
      setShown(target * (1 - (1 - t) ** 3))
      if (t < 1) frame.current = requestAnimationFrame(tick)
      else unflash.current = window.setTimeout(() => setFlash(false), 700)
    }
    tick()
    return () => {
      cancelAnimationFrame(frame.current)
      clearTimeout(unflash.current)
    }
  }, [value])

  const counting = typeof value === "number" && shown !== null
  const text = typeof value === "string" ? value : counting ? format(shown) : "—"
  return (
    <div className='stat'>
      <div className='k'>{label}</div>
      <div className={`v${counting ? "" : " pending"}${flash ? " flash" : ""}`}>{text}</div>
    </div>
  )
}
