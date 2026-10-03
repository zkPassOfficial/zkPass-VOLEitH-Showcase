export const integer = (n: number): string => n.toLocaleString("en").replace(/,/g, " ")

export const millis = (ms: number): string => `${ms < 10 ? ms.toFixed(1) : integer(Math.round(ms))} ms`

export const bytes = (n: number): string => (n >= 10000 ? `${(n / 1024).toFixed(1)} KB` : `${integer(Math.round(n))} B`)
