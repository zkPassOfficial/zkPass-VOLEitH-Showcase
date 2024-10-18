import * as borsh from "borsh"
import { useEffect, useState } from "react"
import { bits2U8Array, bytes2Hex, int2Bits, str2U8Array, u8Array2Bits, u8Array2Str } from "../utils"
import { genCircuitText, setCircuitLine } from "../zk-build/circuit"
import { genProof, genProofInputs, genVerifyInputs, verifyProof } from "../zk-build"
import init from "../wasm-circuit/wasm_lib"
import { Card, Form, Input, Button, Spin, Divider, Descriptions } from "antd"
import type { FormProps } from "antd"

import * as CircuitSchema from "../zk-build/schema"

const { TextArea } = Input

type FieldType = {
  text: string
}

type ProofInfo = {
  sha256Count: number
  runTime: string
  proofSize: number
  circuitOutput: string
  verifyResult: string
  verifyRunTime: string
}

export default function SHA256Card() {
  const [loading, setLoading] = useState(false)
  const [proofInfo, setProofInfo] = useState<ProofInfo>()

  const baseCircuit: any = {}

  const padMessage = (data: Uint8Array, dataLen?: number) => {
    let bitsArr = u8Array2Bits(data).reverse()
    const msgLength = dataLen ? dataLen / 8 : bitsArr.length / 8
    const lenBits = int2Bits(msgLength * 8)

    const v = (9 + bitsArr.length / 8) % 64
    const padByteCount = v === 0 ? 9 : 64 - v + 9

    const padArr = Array(padByteCount * 8 - 1 - lenBits.length).fill(0)

    bitsArr.push(1)
    bitsArr = bitsArr.concat(padArr, lenBits).reverse()
    return { msgBits: bitsArr }
  }

  const addConstCircuit = (value: Uint8Array, circuitLineArray: any[], circuitName: string) => {
    const circuitLine: any[] = []
    const circuitId = circuitLineArray.length
    baseCircuit[circuitName] = genCircuitText(value)
    circuitLine.push(circuitId)
    circuitLine.push(circuitName)
    circuitLine.push({
      id: -1,
      currentStartWire: 0,
      dependencyInputWire: 0,
      offset: 1,
    })

    setCircuitLine(circuitLine, circuitLineArray)
    return circuitId
  }

  const startGenProof = async (params: FieldType) => {
    try {
      setLoading(true)
      const { text: value } = params
      let circuitLineArray: any[] = []

      const dataBytes = str2U8Array(value)

      const { msgBits } = padMessage(dataBytes)

      console.log("msgBits", msgBits)

      //sha256 init state
      const sha256_init_state = new Uint8Array([
        106, 9, 230, 103, 187, 103, 174, 133, 60, 110, 243, 114, 165, 79, 245, 58, 81, 14, 82, 127, 155, 5, 104, 140,
        31, 131, 217, 171, 91, 224, 205, 25,
      ])

      let sha256StateId = addConstCircuit(sha256_init_state, circuitLineArray, "sha256_init_state")

      let sha256Count = msgBits.length / 512

      const allCircuitLine: any[] = []
      let circuitList: any[] = []

      console.log("allCircuitLine", [...allCircuitLine])

      for (let i = sha256Count - 1; i >= 0; i--) {
        const circuitLine: any[] = []
        const sha256CircuitId = circuitLineArray.length
        circuitLine.push(sha256CircuitId)
        circuitLine.push("sha256")
        circuitLine.push({
          id: -1,
          currentStartWire: 0,
          dependencyInputWire: i * 512,
          offset: 512,
        })
        circuitLine.push({
          id: sha256StateId,
          currentStartWire: 512,
          dependencyInputWire: 0,
          offset: 256,
        })

        sha256StateId = sha256CircuitId
        const list = setCircuitLine(circuitLine, circuitLineArray, i === 0)
        if (i === 0) {
          circuitList = list
        }
      }

      await init()

      const proofInputs = await genProofInputs(circuitList, baseCircuit, [...msgBits])

      console.log("proofInputs", proofInputs)

      const { proof, runTime } = await genProof(proofInputs)

      const { outputs = [] } = borsh.deserialize(CircuitSchema.VOLEitHWaterfallProof, proof) as any

      console.log("proof", proof)
      console.log("proof runTime", runTime)
      console.log("proof outputs", outputs)

      const verifyInputs = await genVerifyInputs(circuitList, baseCircuit)

      console.log("verify inputs", verifyInputs)

      const result = await verifyProof(verifyInputs, proof)

      console.log("verify result", result)
      const hexBits = outputs.values().next().value[0].map((v: any)=> v.w).map((v: boolean) => (v ? 1 : 0))
      console.log("hexBits", hexBits)
      const hexBytes = bits2U8Array(hexBits)
      console.log("hexBytes", hexBytes)
      const hex = bytes2Hex(hexBytes)
      
      setProofInfo({
        sha256Count: sha256Count,
        runTime,
        proofSize: proof.length,
        circuitOutput: hex,
        verifyResult: result.verify_result ? "Pass" : "Fail",
        verifyRunTime: result.runTime,
      })
    } catch (error) {
      console.log("proof error", error)
    } finally {
      setLoading(false)
    }
  }

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values)
    startGenProof(values)
  }

  useEffect(() => {
    init()
  })

  return (
    <Card title='Calculate the SHA-256 result.'>
      <Spin spinning={loading}>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 800 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            label='SHA-256 text'
            name='text'
            rules={[{ required: true, message: "Please enter the text that needs to be calculated." }]}
          >
            <TextArea
              placeholder='Please enter the text that needs to be calculated.'
              autoSize={{ minRows: 5, maxRows: 10 }}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Generate Proof
            </Button>
          </Form.Item>
        </Form>

        {proofInfo && (
          <>
            <Divider />
            <Descriptions title='Proof Info' column={2}>
              <Descriptions.Item label='SHA-256 Count'>{proofInfo.sha256Count}</Descriptions.Item>
              <Descriptions.Item label='Proof Size'>{`${proofInfo.proofSize / 1024}K`}</Descriptions.Item>
              <Descriptions.Item label='Run Time'>{proofInfo.runTime}</Descriptions.Item>
              <Descriptions.Item label='Circuit Outputs'>{proofInfo.circuitOutput}</Descriptions.Item>
            </Descriptions>
            <Divider />
            <Descriptions title='Verify Info' column={2}>
              <Descriptions.Item label='Verify Result'>{proofInfo.verifyResult}</Descriptions.Item>
              <Descriptions.Item label='Run Time'>{proofInfo.verifyRunTime}</Descriptions.Item>
            </Descriptions>
          </>
        )}
      </Spin>
    </Card>
  )
}
