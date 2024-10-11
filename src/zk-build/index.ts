import { bits2U8Array } from "../utils"
import { gen_proof, verify_proof } from "../wasm-circuit/wasm_lib"
import { CircuitDependency, CircuitLine } from "./types"

/**
 * generate circuit inputs
 * @param circuit -> Big-endian
 * @param inputBits
 * @param seed
 * @returns
 */
export const genProofInputs = async (circuitList: CircuitLine[], baseCircuits: any, inputBits: number[]) => {
  const { zk } = await import("../proto/bundle")

  const circuits = Object.entries(baseCircuits).map((item: any[]) => {
    return zk.BaseCircuit.create({
      name: item[0],
      data: item[1],
    })
  })

  const dags = circuitList.map((circuitLine: CircuitLine) => {
    const dependencies = circuitLine.dependency.map((dep: CircuitDependency) => {
      return zk.Dependency.create({
        id: dep.id,
        kStart: dep.currentStartWire,
        vStart: dep.dependencyInputWire,
        size: dep.offset,
      })
    })
    return zk.Dag.create({
      id: circuitLine.id,
      name: circuitLine.circuitName,
      deps: dependencies,
      out: circuitLine.out,
    })
  })
  const inputLen = inputBits.length
  const inputData = bits2U8Array(inputBits.reverse())

  const input = zk.Data.create({
    bits: inputData,
    len: inputLen,
  })

  const message = zk.Waterfall.create({
    seed: new Uint8Array([0]),
    input,
    circuits,
    dags,
  })
  const arrayBuffer = zk.Waterfall.encode(message).finish()

  return arrayBuffer
}

/**
 * generate circuit inputs
 * @param circuit -> Big-endian
 * @returns
 */
export const genVerifyInputs = async (circuitList: CircuitLine[], baseCircuits: any) => {
  const { zk } = await import("../proto/bundle")

  const circuits = Object.entries(baseCircuits).map((item: any[]) => {
    return zk.BaseCircuit.create({
      name: item[0],
      data: item[1],
    })
  })

  const dags = circuitList.map((circuitLine: CircuitLine) => {
    const dependencies = circuitLine.dependency.map((dep: CircuitDependency) => {
      return zk.Dependency.create({
        id: dep.id,
        kStart: dep.currentStartWire,
        vStart: dep.dependencyInputWire,
        size: dep.offset,
      })
    })
    return zk.Dag.create({
      id: circuitLine.id,
      name: circuitLine.circuitName,
      deps: dependencies,
      out: circuitLine.out,
    })
  })

  const input = zk.Data.create({
    bits: new Uint8Array([0]),
    len: 0,
  })

  const message = zk.Waterfall.create({
    seed: new Uint8Array([0]),
    input,
    circuits,
    dags,
  })
  const arrayBuffer = zk.Waterfall.encode(message).finish()

  return arrayBuffer
}

export const genProof = async (data: Uint8Array) => {
  const startTime = performance.now()
  const result = await gen_proof(data)
  const endTime = performance.now()
  const runTime = endTime - startTime
  console.log(`vole in the head evaluate:  ${runTime}ms`)
  console.log("evaluate result", result)

  return { proof: result, runTime: `${runTime}ms` }
}

export const verifyProof = async (data: Uint8Array, proof: Uint8Array) => {
  const startTime = performance.now()
  const verify_result = await verify_proof(data, proof)
  const endTime = performance.now()
  const runTime = endTime - startTime
  console.log(`vole in the head verify:  ${runTime}ms`)
  console.log("verify result", verify_result)

  return { verify_result, runTime: `${runTime}ms`  }
}
