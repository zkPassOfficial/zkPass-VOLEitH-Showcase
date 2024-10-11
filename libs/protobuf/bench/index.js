'use strict'

// NOTE: This benchmark partly compares apples and oranges in that it measures protocol buffers,
// which is purely a binary format, and JSON, which is purely a string format.
//
// This matters because strings aren't actually transfered over the network but must still be
// converted to binary somewhere down the road. Because this can't be measured reliably, this
// benchmark compares both pure string performance of JSON and additional binary conversion of the
// same data using node buffers. Actual JSON performance on the network level should be somewhere
// in between.

let newSuite = require('./suite'),
  payload = require('./data/bench.json')

let Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from || function(value, encoding) { return new Buffer(value, encoding) }

// protobuf.js dynamic: load the proto and set up a buffer
let pbjsCls = require('..').loadSync(require.resolve('./data/bench.proto')).resolveAll().lookup('Test')
let pbjsMsg = payload // alt: pbjsCls.fromObject(payload);
let pbjsBuf = pbjsCls.encode(pbjsMsg).finish()

// protobuf.js static: load the proto
let pbjsStaticCls = require('./data/static_pbjs.js').Test

// JSON: set up a string and a buffer
let jsonMsg = payload
let jsonStr = JSON.stringify(jsonMsg)
let jsonBuf = Buffer_from(jsonStr, 'utf8')

// google-protobuf: load the proto, set up an Uint8Array and a message
let jspbCls = require('./data/static_jspb.js').Test
let jspbBuf = new Uint8Array(Array.prototype.slice.call(pbjsBuf))
let jspbMsg = jspbCls.deserializeBinary(jspbBuf)

newSuite('encoding')

  .add('protobuf.js (reflect)', function() {
    pbjsCls.encode(pbjsMsg).finish()
  })
  .add('protobuf.js (static)', function() {
    pbjsStaticCls.encode(pbjsMsg).finish()
  })
  .add('JSON (string)', function() {
    JSON.stringify(jsonMsg)
  })
  .add('JSON (buffer)', function() {
    Buffer_from(JSON.stringify(jsonMsg), 'utf8')
  })
  .add('google-protobuf', function() {
    jspbMsg.serializeBinary()
  })
  .run()

newSuite('decoding')

  .add('protobuf.js (reflect)', function() {
    pbjsCls.decode(pbjsBuf) // no allocation overhead, if you wondered
  })
  .add('protobuf.js (static)', function() {
    pbjsStaticCls.decode(pbjsBuf)
  })
  .add('JSON (string)', function() {
    JSON.parse(jsonStr)
  })
  .add('JSON (buffer)', function() {
    JSON.parse(jsonBuf.toString('utf8'))
  })
  .add('google-protobuf', function() {
    jspbCls.deserializeBinary(jspbBuf)
  })
  .run()

newSuite('combined')

  .add('protobuf.js (reflect)', function() {
    pbjsCls.decode(pbjsCls.encode(pbjsMsg).finish())
  })
  .add('protobuf.js (static)', function() {
    pbjsStaticCls.decode(pbjsStaticCls.encode(pbjsMsg).finish())
  })
  .add('JSON (string)', function() {
    JSON.parse(JSON.stringify(jsonMsg))
  })
  .add('JSON (buffer)', function() {
    JSON.parse(Buffer_from(JSON.stringify(jsonMsg), 'utf8').toString('utf8'))
  })
  .add('google-protobuf', function() {
    jspbCls.deserializeBinary(jspbMsg.serializeBinary())
  })
  .run()