import { u8Array2Bits } from "../utils"

enum CompareFlag {
  GT = "greater than",
  GTE = "greater than and equal",
  LT = "less than",
  LTE = "less than and equal",
  EQ = "equal",
  NEQ = "not equal",
  IN = "exit in list",
  CONTAIN = "include some string slice",
}

const addAndCircuit = (inputSize: number) => {
  const gateLineArray: string[] = []
  const outputWires = []
  for (let i = 0; i < inputSize; i++) {
    outputWires.push(i)
  }
  let outputStartWire = outputWires.length
  while (outputWires.length > 1) {
    const wires = outputWires.splice(0, 2)
    gateLineArray.push(`2 1 ${wires[0]} ${wires[1]} ${outputStartWire} AND`)
    outputWires.splice(1, 0, outputStartWire)
    outputStartWire += 1
  }

  const outputSize = 1  

  const circuit = `${gateLineArray.length} ${outputStartWire}\n1 ${inputSize}\n1 ${outputSize}\n`

  return `${circuit}${gateLineArray.join("\n")}`
}

export const genCircuitText = (data: Uint8Array) => {
  const bits = u8Array2Bits(data)
  const inputSize = bits.length
  const gateLineArray: string[] = []

  for (let i = 0; i < bits.length; i++) {
    if (bits[i]) {
      gateLineArray.push(`1 1 1 ${i + 3} INV`)
    } else {
      gateLineArray.push(`1 1 2 ${i + 3} INV`)
    }
  }

  const circuit = `${gateLineArray.length + 2} ${inputSize + 3}\n1 1\n1 ${inputSize}\n2 1 0 0 1 XOR\n1 1 1 2 INV\n`

  return `${circuit}${gateLineArray.join("\n")}`
}

export const genAndCircuit = (compareCircuitIds: any[], circuitLineArray: any[]) => {
  const circuitLine: any[] = []
  const andCircuit = addAndCircuit(compareCircuitIds.length)
  circuitLine.push(circuitLineArray.length) //set circuit line id
  circuitLine.push("andCircuit")
  compareCircuitIds.forEach((lineId: number, index: number) => {
    circuitLine.push({
      id: lineId,
      currentStartWire: index,
      dependencyInputWire: 0,
      offset: 1,
    })
  })
  const circuitList = setCircuitLine(circuitLine, circuitLineArray, true)
  return { circuitList, andCircuit }
}

export const setCircuitLine = (circuitLine: any[], circuitList: any[], out = false) => {
  circuitList.push({
    id: circuitLine.splice(0, 1)[0],
    out: out,
    circuitName: circuitLine.splice(0, 1)[0],
    dependency: circuitLine.splice(0),
  })
  return circuitList
}

export const genXORCircuit = (inputSize: number) => {
  const gates: string[] = []
  const outputWires = []
  let outputWire = inputSize * 2
  for (let i = 0; i < inputSize; i++) {
    gates.push(`2 1 ${i} ${i + inputSize} ${outputWire} XOR`)
    outputWires.push(outputWire)
    outputWire += 1
  }

  const totalGate = gates.length
  const totalWires = outputWire
  const inputLine = `1 ${inputSize * 2}`
  const outputLine = `1 ${inputSize}`
  return `${totalGate} ${totalWires}\n${inputLine}\n${outputLine}\n${gates.join("\n")}`
}

export const genCircuitByInputSizeAndCompareFlag = (inputSize: number, flag: string) => {
  let circuitType = CompareFlag.GT

  switch (flag) {
    case ">":
      circuitType = CompareFlag.GT
      break
    case "<=":
      circuitType = CompareFlag.LTE
      break
    case "<":
      circuitType = CompareFlag.LT
      break
    case ">=":
      circuitType = CompareFlag.GTE
      break
    case "!=":
      circuitType = CompareFlag.NEQ
      break
    case "contain":
      circuitType = CompareFlag.EQ
      break
    case "in":
      circuitType = CompareFlag.EQ
      break
    default:
      circuitType = CompareFlag.EQ
  }

  return genCompareCircuit(inputSize, circuitType)
}

const genCompareCircuit = (inputSize: number, type = CompareFlag.GT) => {
  if (!inputSize) return ""

  if (type === CompareFlag.EQ || type === CompareFlag.NEQ) {
    return genEqualCircuit(inputSize, type)
  }

  const gates: Array<string> = []
  let outputWire = inputSize * 2
  gates.push(`2 1 0 0 ${outputWire} XOR`) // set initial c wire value => 0
  const isGreaterThan = type === CompareFlag.GT || type === CompareFlag.LTE
  /**
   * A B input wire
   * C carry wire
   * A > B => (A+C)(B+C) + A
   * A < B => (A+C)(B+C) + B
   */
  for (let i = 0; i < inputSize; i++) {
    const gate1 = `2 1 ${i} ${outputWire} ${outputWire + 1} XOR`
    const gate2 = `2 1 ${i + inputSize} ${outputWire} ${outputWire + 2} XOR`
    const gate3 = `2 1 ${outputWire + 1} ${outputWire + 2} ${outputWire + 3} AND`
    const gate4 = `2 1 ${isGreaterThan ? i : i + inputSize} ${outputWire + 3} ${outputWire + 4} XOR`
    outputWire += 4
    gates.push(gate1, gate2, gate3, gate4)
  }

  if (type === CompareFlag.LTE || type === CompareFlag.GTE) {
    gates.push(`1 1 ${outputWire} ${outputWire + 1} INV`)
    outputWire += 1
  }

  const totalGate = gates.length
  const totalWires = outputWire + 1
  const inputLine = `1 ${inputSize * 2}`
  const outputLine = `1 ${1}`

  return `${totalGate} ${totalWires}\n${inputLine}\n${outputLine}\n${gates.join("\n")}`
}

const genEqualCircuit = (inputSize: number, type: CompareFlag) => {
  const gates: string[] = []
  const outputWires = []
  let outputWire = inputSize * 2
  for (let i = 0; i < inputSize; i++) {
    gates.push(`2 1 ${i} ${i + inputSize} ${outputWire} XOR`)
    outputWires.push(outputWire)
    outputWire += 1
  }

  for (let i = 0; i < inputSize; i++) {
    gates.push(`1 1 ${outputWires[i]} ${outputWire} INV`)
    outputWires.push(outputWire)
    outputWire += 1
  }

  outputWires.splice(0, inputSize)

  while (outputWires.length > 1) {
    const wires = outputWires.splice(0, 2)
    gates.push(`2 1 ${wires[0]} ${wires[1]} ${outputWire} AND`)
    outputWires.splice(1, 0, outputWire)
    outputWire += 1
  }

  if (type === CompareFlag.NEQ) {
    gates.push(`1 1 ${outputWire - 1} ${outputWire} INV`)
    outputWire += 1
  }

  const totalGate = gates.length
  const totalWires = outputWire
  const inputLine = `1 ${inputSize * 2}`
  const outputLine = `1 ${1}`
  return `${totalGate} ${totalWires}\n${inputLine}\n${outputLine}\n${gates.join("\n")}`
}
