import { voleith_gen_proof, voleith_verify_proof } from "../wasm-circuit/wasm_lib"
import { CircuitDependency, CircuitLine } from "./types"
import * as borsh from "borsh"
import * as CircuitSchema from "./schema"
/**
 * generate circuit inputs
 * @param circuit -> Big-endian
 * @param inputBits
 * @param seed
 * @returns
 */
export const genProofInputs = async (circuitList: CircuitLine[], baseCircuits: any, inputBits: number[]) => {
  const circuits = Object.entries(baseCircuits).map((item: any[]) => {
    // CircuitSchema.BaseCircuit
    return {
      name: item[0],
      data: item[1],
    }
  })

  const dags = circuitList.map((circuitLine: CircuitLine) => {
    const dependencies = circuitLine.dependency.map((dep: CircuitDependency) => {
      // CircuitSchema.Dependency
      return {
        id: dep.id,
        k_start: dep.currentStartWire,
        v_start: dep.dependencyInputWire,
        size: dep.offset,
      }
    })
    //CircuitSchema.Dag
    return {
      id: circuitLine.id,
      name: circuitLine.circuitName,
      deps: dependencies,
      out: circuitLine.out,
    }
  })
  //CircuitSchema.Waterfall
  const waterfall = {
    circuits,
    dags,
  }

  const waterfallInput = borsh.serialize(CircuitSchema.WaterfallInput, {
    seed: 0n,
    waterfall,
    inputs: inputBits.map((bit) => !!bit),
  })

  return waterfallInput
}

/**
 * generate circuit inputs
 * @param circuit -> Big-endian
 * @returns
 */
export const genVerifyInputs = async (circuitList: CircuitLine[], baseCircuits: any) => {
  const circuits = Object.entries(baseCircuits).map((item: any[]) => {
    // CircuitSchema.BaseCircuit
    return {
      name: item[0],
      data: item[1],
    }
  })

  const dags = circuitList.map((circuitLine: CircuitLine) => {
    const dependencies = circuitLine.dependency.map((dep: CircuitDependency) => {
      // CircuitSchema.Dependency
      return {
        id: dep.id,
        k_start: dep.currentStartWire,
        v_start: dep.dependencyInputWire,
        size: dep.offset,
      }
    })
    //CircuitSchema.Dag
    return {
      id: circuitLine.id,
      name: circuitLine.circuitName,
      deps: dependencies,
      out: circuitLine.out,
    }
  })
  
  const waterfall = borsh.serialize(CircuitSchema.Waterfall, {
    circuits,
    dags,
  })

  return waterfall
}

export const genProof = async (data: Uint8Array) => {
  const startTime = performance.now()
  const result = await voleith_gen_proof(data)
  const endTime = performance.now()
  const runTime = endTime - startTime
  console.log(`vole in the head evaluate:  ${runTime}ms`)
  console.log("evaluate result", result)

  return { proof: result, runTime: `${runTime}ms` }
}

export const verifyProof = async (data: Uint8Array, proof: Uint8Array) => {
  const startTime = performance.now()
  const verify_result = await voleith_verify_proof(data, proof)
  const endTime = performance.now()
  const runTime = endTime - startTime
  console.log(`vole in the head verify:  ${runTime}ms`)
  console.log("verify result", verify_result)

  return { verify_result, runTime: `${runTime}ms` }
}
