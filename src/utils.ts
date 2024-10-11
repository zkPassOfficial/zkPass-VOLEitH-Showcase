export const bits2U8Array = (bits: number[]): Uint8Array => {
  const ba = new Uint8Array(bits.length / 8)
  for (let i = 0; i < ba.length; i++) {
    let sum = 0
    for (let j = 0; j < 8; j++) {
      sum += bits[i * 8 + j] * 2 ** j
    }
    ba[ba.length - 1 - i] = sum
  }
  return ba
}

export const str2U8Array = (s: string): Uint8Array => {
  const arr = new Uint8Array(s.length)
  for (let i = 0; i < s.length; i++) {
    arr[i] = s.charCodeAt(i)
  }
  return arr
}

export const u8Array2Str = (arr: Uint8Array): string => {
  let s = ''
  for (const a of arr) {
    s += String.fromCharCode(a)
  }
  return s
}

export function bytes2Hex(bytes: Uint8Array) {
  return Array.from(bytes, (byte) => {
    return ('0' + (byte & 0xff).toString(16)).slice(-2)
  }).join('')
}


export const u8Array2Bits = (n: Uint8Array) => {
  const bits: Array<number> = Array(n.length * 8) // little endian
  let index = 0
  for (let i = n.length - 1; i >= 0; i--) {
    for (let j = 0; j < 8; j++) {
      bits[index] = (n[i] >> j) & 0x01
      index++
    }
  }
  return bits
}


export const int2Bits = (i: number): any =>
  i
    .toString(2)
    .split('')
    .map((i) => +i)


export const concatArray = (...args: Uint8Array[]): Uint8Array => {
  let arr: any[] = []
  for (const a of args) {
    arr = arr.concat(Array.from(a))
  }
  return new Uint8Array(arr)
}

export const int2U8Array = (i: number | bigint, size?: number): Uint8Array => {
  let str = i.toString(16)

  if (str.length % 2 === 1) {
    str = `0${str}`
  }

  const arr = []
  for (let i = 0; i < str.length / 2; i++) {
    arr.push(parseInt(str.slice(2 * i, 2 * i + 2), 16))
  }

  const len = arr.length

  if (size && len < size) {
    return concatArray(new Uint8Array(size - len).fill(0), new Uint8Array(arr))
  } else if (size && len > size) {
    return new Uint8Array(arr.splice(0, size))
  }
  return new Uint8Array(arr)
}

export function getRandomBytes(byteLength: number) {
  const array = new Uint8Array(byteLength)
  return crypto.getRandomValues(array)
}

export async function gcmEncrypt(iv: any, key: any, data: any) {

  const explicit_nonce = getRandomBytes(8)
  const gcm_nonce = new Uint8Array([...iv, ...explicit_nonce])

  const enc_key = await crypto.subtle.importKey(
    'raw',
    key,
    'AES-GCM',
    false,
    ['encrypt', 'decrypt']
  )

  const res = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: gcm_nonce},
    enc_key,
    data
  )

  const res_bytes = new Uint8Array(res)
  return {
    cipher: new Uint8Array([ ...explicit_nonce, ...res_bytes ]),
    nonce: gcm_nonce
  }
}

export async function gcmDecrypt(iv: any, key: any, data: any) {
  const explicit_nonce = data.slice(0, 8)
  const rest = data.slice(8)
  const gcm_nonce = new Uint8Array([ ...iv, ...explicit_nonce ])

  const dec_key = await crypto.subtle.importKey(
    'raw',
    key,
    'AES-GCM',
    false,
    [ 'encrypt', 'decrypt' ])

  //if decrypt failed with throw exception
  const plain_text = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: gcm_nonce      
    },
    dec_key,
    rest
  )

  return new Uint8Array(plain_text)
}