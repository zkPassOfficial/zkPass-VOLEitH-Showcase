import * as borsh from "borsh"
import { useEffect, useState } from "react"
import { str2U8Array, u8Array2Bits } from "../utils"
import { genCircuitByInputSizeAndCompareFlag, setCircuitLine } from "../zk-build/circuit"
import { genProof, genProofInputs, genVerifyInputs, verifyProof } from "../zk-build"
import init from "../wasm-circuit/wasm_lib"
import { VOLEitHWaterfallProofSchema } from "../zk-build/proof"
import { Card, Form, InputNumber, Select, Button, Spin, Divider, Descriptions } from "antd"

import type { FormProps } from "antd"

const { Option } = Select

type FieldType = {
  leftValue: number
  rightValue: number
  compareFlag: string
}

type ProofInfo = {
  runTime: string
  proofSize: number
  circuitOutput: string
  verifyResult: string
  verifyRunTime: string
}

export default function Compare() {
  const [loading, setLoading] = useState(false)
  const [proofInfo, setProofInfo] = useState<ProofInfo>()

  const startGenProof = async (params: FieldType) => {
    try {
      setLoading(true)
      const { leftValue, rightValue, compareFlag } = params
      const valueLength = Math.max(leftValue.toString().length, rightValue.toString().length)
      const formattedLeftValue = leftValue.toString().padStart(valueLength, "0")
      const formattedRightValue = rightValue.toString().padStart(valueLength, "0")
      const inputSize = valueLength * 8

      const inputBits = [
        ...u8Array2Bits(str2U8Array(formattedLeftValue)),
        ...u8Array2Bits(str2U8Array(formattedRightValue)),
      ]

      const compareCircuit = genCircuitByInputSizeAndCompareFlag(inputSize, compareFlag)
      const circuitList = setCircuitLine(
        [
          0,
          "compareCircuit",
          {
            id: -1, //depend circuit line id (circuit input line is -1)
            currentStartWire: 0, //current circuit line start wire
            dependencyInputWire: 0, //depend circuit input wire
            offset: inputSize,
          },
          {
            id: -1, //depend circuit line id (circuit input line is -1)
            currentStartWire: inputSize, //current circuit line start wire
            dependencyInputWire: inputSize, //depend circuit input wire
            offset: inputSize,
          },
        ],
        [],
        true
      )

      await init()

      const proofInputs = await genProofInputs(circuitList, { compareCircuit }, inputBits)

      console.log("proofInputs", proofInputs)

      const { proof, runTime } = await genProof(proofInputs)

      const { outputs = [] } = borsh.deserialize(VOLEitHWaterfallProofSchema, proof) as any

      console.log("proof", proof)
      console.log("proof runTime", runTime)
      console.log("proof outputs", outputs)

      const verifyInputs = await genVerifyInputs(circuitList, { compareCircuit })

      console.log("verify inputs", verifyInputs)

      const result = await verifyProof(verifyInputs, proof)

      console.log("verify result", result)

      setProofInfo({
        runTime,
        proofSize: proof.length,
        circuitOutput: outputs[0].join(", "),
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
    <Card title='Get started by a compare circuit proof generation with vole-in-the-head'>
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
            label='Input Value'
            name='leftValue'
            rules={[{ required: true, message: "Please input a number" }]}
          >
            <InputNumber style={{ width: 200 }} />
          </Form.Item>

          <Form.Item<FieldType>
            label='Target Value'
            name='rightValue'
            rules={[{ required: true, message: "Please input a target number" }]}
          >
            <InputNumber style={{ width: 200 }} />
          </Form.Item>

          <Form.Item<FieldType>
            label='Compare Flag'
            rules={[{ required: true }]}
            name='compareFlag'
            wrapperCol={{ span: 12 }}
          >
            <Select placeholder='Select a compare Flag'>
              <Option value='>'>{">"}</Option>
              <Option value='>='>{">="}</Option>
              <Option value='<'>{"<"}</Option>
              <Option value='<='>{"<="}</Option>
              <Option value='='>{"="}</Option>
              <Option value='!='>{"!="}</Option>
            </Select>
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
