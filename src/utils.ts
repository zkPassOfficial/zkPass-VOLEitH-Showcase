// Bytes and wires. A value's wire `i` is bit `i` of the value as a big-endian integer, so the
// last byte sits on the lowest wires (the prover library's convention).

/** The wires of `bytes`: lowest wire first. */
export function wires(bytes: Uint8Array): boolean[] {
  const bits: boolean[] = []
  for (let i = bytes.length - 1; i >= 0; i--) {
    for (let bit = 0; bit < 8; bit++) bits.push(((bytes[i] >> bit) & 1) === 1)
  }
  return bits
}

/** The bytes whose wires are `bits`: the inverse of `wires`. */
export function bytesFromWires(bits: boolean[]): Uint8Array {
  const bytes = new Uint8Array(bits.length / 8)
  for (let i = 0; i < bytes.length; i++) {
    let byte = 0
    for (let bit = 0; bit < 8; bit++) if (bits[8 * i + bit]) byte |= 1 << bit
    bytes[bytes.length - 1 - i] = byte
  }
  return bytes
}

export const utf8 = (text: string): Uint8Array => new TextEncoder().encode(text)

export const hex = (bytes: Uint8Array): string => Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("")

export const fromHex = (text: string): Uint8Array => new Uint8Array((text.match(/../g) ?? []).map((pair) => parseInt(pair, 16)))

export function concat(...parts: Uint8Array[]): Uint8Array {
  const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0))
  let at = 0
  for (const part of parts) {
    out.set(part, at)
    at += part.length
  }
  return out
}

export const randomBytes = (length: number): Uint8Array => crypto.getRandomValues(new Uint8Array(length))
