import * as borsh from "borsh"
import { useEffect, useState } from "react"
import { concatArray, gcmEncrypt, getRandomBytes, int2U8Array, str2U8Array, u8Array2Bits } from "../utils"
import { genAndCircuit, genCircuitByInputSizeAndCompareFlag, genXORCircuit, setCircuitLine } from "../zk-build/circuit"
import { genProof, genProofInputs, genVerifyInputs, verifyProof } from "../zk-build"
import init from "../wasm-circuit/wasm_lib"
import { VOLEitHWaterfallProofSchema } from "../zk-build/proof"
import { Card, Form, Input, Button, Spin, Divider, Descriptions } from "antd"
import type { FormProps } from "antd"

const { TextArea } = Input

type FieldType = {
  text: string
}

type ProofInfo = {
  aesBlockCount: number
  runTime: string
  proofSize: number
  circuitOutput: string
  verifyResult: string
  verifyRunTime: string
}

export default function AesCard() {
  const [loading, setLoading] = useState(false)
  const [proofInfo, setProofInfo] = useState<ProofInfo>()

  const startGenProof = async (params: FieldType) => {
    try {
      setLoading(true)
      const { text } = params
      const dataBytes = str2U8Array(text)
      const iv = getRandomBytes(4)
      const key = getRandomBytes(16)
      const { cipher: cipher_text, nonce } = await gcmEncrypt(iv, key, dataBytes)
      const cipher = cipher_text.slice(8)
      console.log("base message", {
        text,
        dataBytes,
        iv,
        key,
        cipher,
        nonce
      })

      const counterBits = []
      const textBits = []
      const cipherBits = []

      const loopCount = Math.ceil(dataBytes.length / 16)

      console.log("loopCount", loopCount)

      const aesBlockList: any[] = []

      for (let i = 0; i < loopCount; i++) {
        const counter = concatArray(nonce, int2U8Array(i + 2, 4))
        console.log("counter", counter)
        counterBits.push(...u8Array2Bits(counter))
        const aesBlock = dataBytes.slice(i * 16, (i + 1) * 16)
        aesBlockList.push(aesBlock)
        textBits.push(...u8Array2Bits(aesBlock))
        cipherBits.push(...u8Array2Bits(cipher.slice(i * 16, i * 16 + aesBlock.length)))
      }

      console.log("counterBits", counterBits)
      console.log("textBits", textBits)
      console.log("cipherBits", cipherBits)

      const inputBits = [...u8Array2Bits(key), ...counterBits, ...textBits, ...cipherBits]

      console.log("inputBits", inputBits.join(', '))

      const baseCircuit: any = {}

      baseCircuit.equal128 = genCircuitByInputSizeAndCompareFlag(128, "=")
      baseCircuit.xor128 = genXORCircuit(128)

      const circuitLine: any[] = []
      let circuitLineArray: any[] = []
      let compareCircuitIds: any[] = []

      let aesCircuitId = 0
      const requestCounterLength = loopCount * 128
      let messageSkipWires = 128 + requestCounterLength

      let cipherSkipWires = messageSkipWires + textBits.length

      for (let i = 0; i < loopCount; i++) {
        const aesBlockLen = aesBlockList[i].length * 8
        aesCircuitId = circuitLineArray.length
        circuitLine.push(aesCircuitId) //set circuit line id
        circuitLine.push("AES") //circuit name
        //add clientKey
        circuitLine.push({
          id: -1, //depend circuit line id (circuit input line is -1)
          currentStartWire: 0, //current circuit line start wire
          dependencyInputWire: 0, //depend circuit input wire
          offset: 128,
        })
        //add aes counter
        circuitLine.push({
          id: -1, //depend circuit line id (circuit input line is -1)
          currentStartWire: 128, //current circuit line start wire
          dependencyInputWire: (i + 1) * 128, //depend circuit input wire
          offset: 128,
        })

        setCircuitLine(circuitLine, circuitLineArray) // aes circuit

        const xorCircuitId = circuitLineArray.length
        //xor aes block
        const xorCircuitName = `xor_${aesBlockLen}`
        baseCircuit[xorCircuitName] = genXORCircuit(aesBlockLen)
        circuitLine.push(xorCircuitId)
        circuitLine.push(xorCircuitName)
        //add aes result
        circuitLine.push({
          id: aesCircuitId,
          currentStartWire: 0,
          dependencyInputWire: 128 - aesBlockLen,
          offset: aesBlockLen,
        })
        //add aes block
        circuitLine.push({
          id: -1,
          currentStartWire: aesBlockLen,
          dependencyInputWire: messageSkipWires,
          offset: aesBlockLen,
        })

        messageSkipWires += aesBlockLen

        setCircuitLine(circuitLine, circuitLineArray) // aes xor circuit

        // compare aes block with cipher block
        const checkBlockCircuitId = circuitLineArray.length
        circuitLine.push(checkBlockCircuitId)
        if (aesBlockLen === 128) {
          circuitLine.push("equal128")
        } else {
          const equalCircuitName = `equal_${aesBlockLen}`
          baseCircuit[equalCircuitName] = genCircuitByInputSizeAndCompareFlag(aesBlockLen, "=")
          circuitLine.push(equalCircuitName)
        }

        circuitLine.push(
          {
            id: xorCircuitId,
            currentStartWire: 0,
            dependencyInputWire: 0,
            offset: aesBlockLen,
          },
          {
            id: -1,
            currentStartWire: aesBlockLen,
            dependencyInputWire: cipherSkipWires,
            offset: aesBlockLen,
          }
        )
        cipherSkipWires += aesBlockLen

        if(loopCount == 1){
          setCircuitLine(circuitLine, circuitLineArray, true) // check block circuit
        }else{

          setCircuitLine(circuitLine, circuitLineArray) // check block circuit
        }

        if(loopCount > 1) {
          compareCircuitIds.push(checkBlockCircuitId)
        }
      }

      let circuitList = circuitLineArray 

      if(compareCircuitIds.length){
        const { circuitList: finalList, andCircuit } = genAndCircuit(compareCircuitIds, circuitLineArray)
        circuitList = finalList
        baseCircuit.andCircuit = andCircuit
  
      }
 
      console.log("circuitList", circuitList)
      console.log("inputBits", inputBits)
      console.log("baseCircuit", baseCircuit)

      await init()

      const proofInputs = await genProofInputs(circuitList, baseCircuit, [...inputBits])

      console.log("proofInputs", proofInputs)

      const { proof, runTime } = await genProof(proofInputs)

      const { outputs = [] } = borsh.deserialize(VOLEitHWaterfallProofSchema, proof) as any

      console.log("proof", proof)
      console.log("proof runTime", runTime)
      console.log("proof outputs", outputs)

      const verifyInputs = await genVerifyInputs(circuitList, baseCircuit)

      console.log("verify inputs", verifyInputs)

      const result = await verifyProof(verifyInputs, proof)

      console.log("verify result", result)

      setProofInfo({
        aesBlockCount: loopCount,
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
    <Card title='Verify the AES encryption circuit.'>
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
            label='Encrypted text'
            name='text'
            rules={[{ required: true, message: "Please enter the text that needs to be encrypted." }]}
          >
            <TextArea
              placeholder='Please enter the text that needs to be encrypted.'
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
              <Descriptions.Item label='Aes Block Count'>{proofInfo.aesBlockCount}</Descriptions.Item>
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
