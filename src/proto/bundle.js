/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.garble = (function() {

    /**
     * Namespace garble.
     * @exports garble
     * @namespace
     */
    var garble = {};

    garble.InputLabels = (function() {

        /**
         * Properties of an InputLabels.
         * @memberof garble
         * @interface IInputLabels
         * @property {number} id InputLabels id
         * @property {Array.<core.IBlock>|null} [labels] InputLabels labels
         */

        /**
         * Constructs a new InputLabels.
         * @memberof garble
         * @classdesc Represents an InputLabels.
         * @implements IInputLabels
         * @constructor
         * @param {garble.IInputLabels=} [properties] Properties to set
         */
        function InputLabels(properties) {
            this.labels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InputLabels id.
         * @member {number} id
         * @memberof garble.InputLabels
         * @instance
         */
        InputLabels.prototype.id = 0;

        /**
         * InputLabels labels.
         * @member {Array.<core.IBlock>} labels
         * @memberof garble.InputLabels
         * @instance
         */
        InputLabels.prototype.labels = $util.emptyArray;

        /**
         * Creates a new InputLabels instance using the specified properties.
         * @function create
         * @memberof garble.InputLabels
         * @static
         * @param {garble.IInputLabels=} [properties] Properties to set
         * @returns {garble.InputLabels} InputLabels instance
         */
        InputLabels.create = function create(properties) {
            return new InputLabels(properties);
        };

        /**
         * Encodes the specified InputLabels message. Does not implicitly {@link garble.InputLabels.verify|verify} messages.
         * @function encode
         * @memberof garble.InputLabels
         * @static
         * @param {garble.IInputLabels} message InputLabels message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputLabels.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    $root.core.Block.encode(message.labels[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InputLabels message, length delimited. Does not implicitly {@link garble.InputLabels.verify|verify} messages.
         * @function encodeDelimited
         * @memberof garble.InputLabels
         * @static
         * @param {garble.IInputLabels} message InputLabels message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputLabels.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InputLabels message from the specified reader or buffer.
         * @function decode
         * @memberof garble.InputLabels
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {garble.InputLabels} InputLabels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputLabels.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.garble.InputLabels();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.labels && message.labels.length))
                            message.labels = [];
                        message.labels.push($root.core.Block.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes an InputLabels message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof garble.InputLabels
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {garble.InputLabels} InputLabels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputLabels.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InputLabels message.
         * @function verify
         * @memberof garble.InputLabels
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InputLabels.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (var i = 0; i < message.labels.length; ++i) {
                    var error = $root.core.Block.verify(message.labels[i]);
                    if (error)
                        return "labels." + error;
                }
            }
            return null;
        };

        /**
         * Creates an InputLabels message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof garble.InputLabels
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {garble.InputLabels} InputLabels
         */
        InputLabels.fromObject = function fromObject(object) {
            if (object instanceof $root.garble.InputLabels)
                return object;
            var message = new $root.garble.InputLabels();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".garble.InputLabels.labels: array expected");
                message.labels = [];
                for (var i = 0; i < object.labels.length; ++i) {
                    if (typeof object.labels[i] !== "object")
                        throw TypeError(".garble.InputLabels.labels: object expected");
                    message.labels[i] = $root.core.Block.fromObject(object.labels[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an InputLabels message. Also converts values to other types if specified.
         * @function toObject
         * @memberof garble.InputLabels
         * @static
         * @param {garble.InputLabels} message InputLabels
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InputLabels.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.labels = [];
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (var j = 0; j < message.labels.length; ++j)
                    object.labels[j] = $root.core.Block.toObject(message.labels[j], options);
            }
            return object;
        };

        /**
         * Converts this InputLabels to JSON.
         * @function toJSON
         * @memberof garble.InputLabels
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InputLabels.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InputLabels
         * @function getTypeUrl
         * @memberof garble.InputLabels
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InputLabels.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/garble.InputLabels";
        };

        return InputLabels;
    })();

    garble.Input = (function() {

        /**
         * Properties of an Input.
         * @memberof garble
         * @interface IInput
         * @property {Array.<garble.IInputLabels>|null} [inputLabels] Input inputLabels
         */

        /**
         * Constructs a new Input.
         * @memberof garble
         * @classdesc Represents an Input.
         * @implements IInput
         * @constructor
         * @param {garble.IInput=} [properties] Properties to set
         */
        function Input(properties) {
            this.inputLabels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Input inputLabels.
         * @member {Array.<garble.IInputLabels>} inputLabels
         * @memberof garble.Input
         * @instance
         */
        Input.prototype.inputLabels = $util.emptyArray;

        /**
         * Creates a new Input instance using the specified properties.
         * @function create
         * @memberof garble.Input
         * @static
         * @param {garble.IInput=} [properties] Properties to set
         * @returns {garble.Input} Input instance
         */
        Input.create = function create(properties) {
            return new Input(properties);
        };

        /**
         * Encodes the specified Input message. Does not implicitly {@link garble.Input.verify|verify} messages.
         * @function encode
         * @memberof garble.Input
         * @static
         * @param {garble.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inputLabels != null && message.inputLabels.length)
                for (var i = 0; i < message.inputLabels.length; ++i)
                    $root.garble.InputLabels.encode(message.inputLabels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link garble.Input.verify|verify} messages.
         * @function encodeDelimited
         * @memberof garble.Input
         * @static
         * @param {garble.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @function decode
         * @memberof garble.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {garble.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.garble.Input();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.inputLabels && message.inputLabels.length))
                            message.inputLabels = [];
                        message.inputLabels.push($root.garble.InputLabels.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof garble.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {garble.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Input message.
         * @function verify
         * @memberof garble.Input
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Input.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inputLabels != null && message.hasOwnProperty("inputLabels")) {
                if (!Array.isArray(message.inputLabels))
                    return "inputLabels: array expected";
                for (var i = 0; i < message.inputLabels.length; ++i) {
                    var error = $root.garble.InputLabels.verify(message.inputLabels[i]);
                    if (error)
                        return "inputLabels." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof garble.Input
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {garble.Input} Input
         */
        Input.fromObject = function fromObject(object) {
            if (object instanceof $root.garble.Input)
                return object;
            var message = new $root.garble.Input();
            if (object.inputLabels) {
                if (!Array.isArray(object.inputLabels))
                    throw TypeError(".garble.Input.inputLabels: array expected");
                message.inputLabels = [];
                for (var i = 0; i < object.inputLabels.length; ++i) {
                    if (typeof object.inputLabels[i] !== "object")
                        throw TypeError(".garble.Input.inputLabels: object expected");
                    message.inputLabels[i] = $root.garble.InputLabels.fromObject(object.inputLabels[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @function toObject
         * @memberof garble.Input
         * @static
         * @param {garble.Input} message Input
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Input.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.inputLabels = [];
            if (message.inputLabels && message.inputLabels.length) {
                object.inputLabels = [];
                for (var j = 0; j < message.inputLabels.length; ++j)
                    object.inputLabels[j] = $root.garble.InputLabels.toObject(message.inputLabels[j], options);
            }
            return object;
        };

        /**
         * Converts this Input to JSON.
         * @function toJSON
         * @memberof garble.Input
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Input.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Input
         * @function getTypeUrl
         * @memberof garble.Input
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Input.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/garble.Input";
        };

        return Input;
    })();

    garble.OutputEncoding = (function() {

        /**
         * Properties of an OutputEncoding.
         * @memberof garble
         * @interface IOutputEncoding
         * @property {number} id OutputEncoding id
         * @property {Array.<boolean>|null} [encoding] OutputEncoding encoding
         */

        /**
         * Constructs a new OutputEncoding.
         * @memberof garble
         * @classdesc Represents an OutputEncoding.
         * @implements IOutputEncoding
         * @constructor
         * @param {garble.IOutputEncoding=} [properties] Properties to set
         */
        function OutputEncoding(properties) {
            this.encoding = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutputEncoding id.
         * @member {number} id
         * @memberof garble.OutputEncoding
         * @instance
         */
        OutputEncoding.prototype.id = 0;

        /**
         * OutputEncoding encoding.
         * @member {Array.<boolean>} encoding
         * @memberof garble.OutputEncoding
         * @instance
         */
        OutputEncoding.prototype.encoding = $util.emptyArray;

        /**
         * Creates a new OutputEncoding instance using the specified properties.
         * @function create
         * @memberof garble.OutputEncoding
         * @static
         * @param {garble.IOutputEncoding=} [properties] Properties to set
         * @returns {garble.OutputEncoding} OutputEncoding instance
         */
        OutputEncoding.create = function create(properties) {
            return new OutputEncoding(properties);
        };

        /**
         * Encodes the specified OutputEncoding message. Does not implicitly {@link garble.OutputEncoding.verify|verify} messages.
         * @function encode
         * @memberof garble.OutputEncoding
         * @static
         * @param {garble.IOutputEncoding} message OutputEncoding message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputEncoding.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.encoding != null && message.encoding.length)
                for (var i = 0; i < message.encoding.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.encoding[i]);
            return writer;
        };

        /**
         * Encodes the specified OutputEncoding message, length delimited. Does not implicitly {@link garble.OutputEncoding.verify|verify} messages.
         * @function encodeDelimited
         * @memberof garble.OutputEncoding
         * @static
         * @param {garble.IOutputEncoding} message OutputEncoding message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputEncoding.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutputEncoding message from the specified reader or buffer.
         * @function decode
         * @memberof garble.OutputEncoding
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {garble.OutputEncoding} OutputEncoding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputEncoding.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.garble.OutputEncoding();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.encoding && message.encoding.length))
                            message.encoding = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.encoding.push(reader.bool());
                        } else
                            message.encoding.push(reader.bool());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes an OutputEncoding message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof garble.OutputEncoding
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {garble.OutputEncoding} OutputEncoding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputEncoding.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutputEncoding message.
         * @function verify
         * @memberof garble.OutputEncoding
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutputEncoding.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (message.encoding != null && message.hasOwnProperty("encoding")) {
                if (!Array.isArray(message.encoding))
                    return "encoding: array expected";
                for (var i = 0; i < message.encoding.length; ++i)
                    if (typeof message.encoding[i] !== "boolean")
                        return "encoding: boolean[] expected";
            }
            return null;
        };

        /**
         * Creates an OutputEncoding message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof garble.OutputEncoding
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {garble.OutputEncoding} OutputEncoding
         */
        OutputEncoding.fromObject = function fromObject(object) {
            if (object instanceof $root.garble.OutputEncoding)
                return object;
            var message = new $root.garble.OutputEncoding();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.encoding) {
                if (!Array.isArray(object.encoding))
                    throw TypeError(".garble.OutputEncoding.encoding: array expected");
                message.encoding = [];
                for (var i = 0; i < object.encoding.length; ++i)
                    message.encoding[i] = Boolean(object.encoding[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an OutputEncoding message. Also converts values to other types if specified.
         * @function toObject
         * @memberof garble.OutputEncoding
         * @static
         * @param {garble.OutputEncoding} message OutputEncoding
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutputEncoding.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.encoding = [];
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.encoding && message.encoding.length) {
                object.encoding = [];
                for (var j = 0; j < message.encoding.length; ++j)
                    object.encoding[j] = message.encoding[j];
            }
            return object;
        };

        /**
         * Converts this OutputEncoding to JSON.
         * @function toJSON
         * @memberof garble.OutputEncoding
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutputEncoding.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OutputEncoding
         * @function getTypeUrl
         * @memberof garble.OutputEncoding
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OutputEncoding.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/garble.OutputEncoding";
        };

        return OutputEncoding;
    })();

    garble.GarbledCircuit = (function() {

        /**
         * Properties of a GarbledCircuit.
         * @memberof garble
         * @interface IGarbledCircuit
         * @property {string} id GarbledCircuit id
         * @property {Array.<garble.IInputLabels>|null} [inputLabels] GarbledCircuit inputLabels
         * @property {Array.<core.IBlock>|null} [encryptedGates] GarbledCircuit encryptedGates
         * @property {Array.<garble.IOutputEncoding>|null} [encoding] GarbledCircuit encoding
         */

        /**
         * Constructs a new GarbledCircuit.
         * @memberof garble
         * @classdesc Represents a GarbledCircuit.
         * @implements IGarbledCircuit
         * @constructor
         * @param {garble.IGarbledCircuit=} [properties] Properties to set
         */
        function GarbledCircuit(properties) {
            this.inputLabels = [];
            this.encryptedGates = [];
            this.encoding = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GarbledCircuit id.
         * @member {string} id
         * @memberof garble.GarbledCircuit
         * @instance
         */
        GarbledCircuit.prototype.id = "";

        /**
         * GarbledCircuit inputLabels.
         * @member {Array.<garble.IInputLabels>} inputLabels
         * @memberof garble.GarbledCircuit
         * @instance
         */
        GarbledCircuit.prototype.inputLabels = $util.emptyArray;

        /**
         * GarbledCircuit encryptedGates.
         * @member {Array.<core.IBlock>} encryptedGates
         * @memberof garble.GarbledCircuit
         * @instance
         */
        GarbledCircuit.prototype.encryptedGates = $util.emptyArray;

        /**
         * GarbledCircuit encoding.
         * @member {Array.<garble.IOutputEncoding>} encoding
         * @memberof garble.GarbledCircuit
         * @instance
         */
        GarbledCircuit.prototype.encoding = $util.emptyArray;

        /**
         * Creates a new GarbledCircuit instance using the specified properties.
         * @function create
         * @memberof garble.GarbledCircuit
         * @static
         * @param {garble.IGarbledCircuit=} [properties] Properties to set
         * @returns {garble.GarbledCircuit} GarbledCircuit instance
         */
        GarbledCircuit.create = function create(properties) {
            return new GarbledCircuit(properties);
        };

        /**
         * Encodes the specified GarbledCircuit message. Does not implicitly {@link garble.GarbledCircuit.verify|verify} messages.
         * @function encode
         * @memberof garble.GarbledCircuit
         * @static
         * @param {garble.IGarbledCircuit} message GarbledCircuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GarbledCircuit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.inputLabels != null && message.inputLabels.length)
                for (var i = 0; i < message.inputLabels.length; ++i)
                    $root.garble.InputLabels.encode(message.inputLabels[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.encryptedGates != null && message.encryptedGates.length)
                for (var i = 0; i < message.encryptedGates.length; ++i)
                    $root.core.Block.encode(message.encryptedGates[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.encoding != null && message.encoding.length)
                for (var i = 0; i < message.encoding.length; ++i)
                    $root.garble.OutputEncoding.encode(message.encoding[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GarbledCircuit message, length delimited. Does not implicitly {@link garble.GarbledCircuit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof garble.GarbledCircuit
         * @static
         * @param {garble.IGarbledCircuit} message GarbledCircuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GarbledCircuit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GarbledCircuit message from the specified reader or buffer.
         * @function decode
         * @memberof garble.GarbledCircuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {garble.GarbledCircuit} GarbledCircuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GarbledCircuit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.garble.GarbledCircuit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.inputLabels && message.inputLabels.length))
                            message.inputLabels = [];
                        message.inputLabels.push($root.garble.InputLabels.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.encryptedGates && message.encryptedGates.length))
                            message.encryptedGates = [];
                        message.encryptedGates.push($root.core.Block.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.encoding && message.encoding.length))
                            message.encoding = [];
                        message.encoding.push($root.garble.OutputEncoding.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a GarbledCircuit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof garble.GarbledCircuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {garble.GarbledCircuit} GarbledCircuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GarbledCircuit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GarbledCircuit message.
         * @function verify
         * @memberof garble.GarbledCircuit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GarbledCircuit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (message.inputLabels != null && message.hasOwnProperty("inputLabels")) {
                if (!Array.isArray(message.inputLabels))
                    return "inputLabels: array expected";
                for (var i = 0; i < message.inputLabels.length; ++i) {
                    var error = $root.garble.InputLabels.verify(message.inputLabels[i]);
                    if (error)
                        return "inputLabels." + error;
                }
            }
            if (message.encryptedGates != null && message.hasOwnProperty("encryptedGates")) {
                if (!Array.isArray(message.encryptedGates))
                    return "encryptedGates: array expected";
                for (var i = 0; i < message.encryptedGates.length; ++i) {
                    var error = $root.core.Block.verify(message.encryptedGates[i]);
                    if (error)
                        return "encryptedGates." + error;
                }
            }
            if (message.encoding != null && message.hasOwnProperty("encoding")) {
                if (!Array.isArray(message.encoding))
                    return "encoding: array expected";
                for (var i = 0; i < message.encoding.length; ++i) {
                    var error = $root.garble.OutputEncoding.verify(message.encoding[i]);
                    if (error)
                        return "encoding." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GarbledCircuit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof garble.GarbledCircuit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {garble.GarbledCircuit} GarbledCircuit
         */
        GarbledCircuit.fromObject = function fromObject(object) {
            if (object instanceof $root.garble.GarbledCircuit)
                return object;
            var message = new $root.garble.GarbledCircuit();
            if (object.id != null)
                message.id = String(object.id);
            if (object.inputLabels) {
                if (!Array.isArray(object.inputLabels))
                    throw TypeError(".garble.GarbledCircuit.inputLabels: array expected");
                message.inputLabels = [];
                for (var i = 0; i < object.inputLabels.length; ++i) {
                    if (typeof object.inputLabels[i] !== "object")
                        throw TypeError(".garble.GarbledCircuit.inputLabels: object expected");
                    message.inputLabels[i] = $root.garble.InputLabels.fromObject(object.inputLabels[i]);
                }
            }
            if (object.encryptedGates) {
                if (!Array.isArray(object.encryptedGates))
                    throw TypeError(".garble.GarbledCircuit.encryptedGates: array expected");
                message.encryptedGates = [];
                for (var i = 0; i < object.encryptedGates.length; ++i) {
                    if (typeof object.encryptedGates[i] !== "object")
                        throw TypeError(".garble.GarbledCircuit.encryptedGates: object expected");
                    message.encryptedGates[i] = $root.core.Block.fromObject(object.encryptedGates[i]);
                }
            }
            if (object.encoding) {
                if (!Array.isArray(object.encoding))
                    throw TypeError(".garble.GarbledCircuit.encoding: array expected");
                message.encoding = [];
                for (var i = 0; i < object.encoding.length; ++i) {
                    if (typeof object.encoding[i] !== "object")
                        throw TypeError(".garble.GarbledCircuit.encoding: object expected");
                    message.encoding[i] = $root.garble.OutputEncoding.fromObject(object.encoding[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GarbledCircuit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof garble.GarbledCircuit
         * @static
         * @param {garble.GarbledCircuit} message GarbledCircuit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GarbledCircuit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.inputLabels = [];
                object.encryptedGates = [];
                object.encoding = [];
            }
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.inputLabels && message.inputLabels.length) {
                object.inputLabels = [];
                for (var j = 0; j < message.inputLabels.length; ++j)
                    object.inputLabels[j] = $root.garble.InputLabels.toObject(message.inputLabels[j], options);
            }
            if (message.encryptedGates && message.encryptedGates.length) {
                object.encryptedGates = [];
                for (var j = 0; j < message.encryptedGates.length; ++j)
                    object.encryptedGates[j] = $root.core.Block.toObject(message.encryptedGates[j], options);
            }
            if (message.encoding && message.encoding.length) {
                object.encoding = [];
                for (var j = 0; j < message.encoding.length; ++j)
                    object.encoding[j] = $root.garble.OutputEncoding.toObject(message.encoding[j], options);
            }
            return object;
        };

        /**
         * Converts this GarbledCircuit to JSON.
         * @function toJSON
         * @memberof garble.GarbledCircuit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GarbledCircuit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GarbledCircuit
         * @function getTypeUrl
         * @memberof garble.GarbledCircuit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GarbledCircuit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/garble.GarbledCircuit";
        };

        return GarbledCircuit;
    })();

    garble.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof garble
         * @interface IMessage
         * @property {garble.IGarbledCircuit|null} [garbledCircuit] Message garbledCircuit
         */

        /**
         * Constructs a new Message.
         * @memberof garble
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {garble.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message garbledCircuit.
         * @member {garble.IGarbledCircuit|null|undefined} garbledCircuit
         * @memberof garble.Message
         * @instance
         */
        Message.prototype.garbledCircuit = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Message msg.
         * @member {"garbledCircuit"|undefined} msg
         * @memberof garble.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "msg", {
            get: $util.oneOfGetter($oneOfFields = ["garbledCircuit"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof garble.Message
         * @static
         * @param {garble.IMessage=} [properties] Properties to set
         * @returns {garble.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link garble.Message.verify|verify} messages.
         * @function encode
         * @memberof garble.Message
         * @static
         * @param {garble.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.garbledCircuit != null && Object.hasOwnProperty.call(message, "garbledCircuit"))
                $root.garble.GarbledCircuit.encode(message.garbledCircuit, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link garble.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof garble.Message
         * @static
         * @param {garble.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof garble.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {garble.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.garble.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.garbledCircuit = $root.garble.GarbledCircuit.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof garble.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {garble.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof garble.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.garbledCircuit != null && message.hasOwnProperty("garbledCircuit")) {
                properties.msg = 1;
                {
                    var error = $root.garble.GarbledCircuit.verify(message.garbledCircuit);
                    if (error)
                        return "garbledCircuit." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof garble.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {garble.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.garble.Message)
                return object;
            var message = new $root.garble.Message();
            if (object.garbledCircuit != null) {
                if (typeof object.garbledCircuit !== "object")
                    throw TypeError(".garble.Message.garbledCircuit: object expected");
                message.garbledCircuit = $root.garble.GarbledCircuit.fromObject(object.garbledCircuit);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof garble.Message
         * @static
         * @param {garble.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.garbledCircuit != null && message.hasOwnProperty("garbledCircuit")) {
                object.garbledCircuit = $root.garble.GarbledCircuit.toObject(message.garbledCircuit, options);
                if (options.oneofs)
                    object.msg = "garbledCircuit";
            }
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof garble.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Message
         * @function getTypeUrl
         * @memberof garble.Message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/garble.Message";
        };

        return Message;
    })();

    garble.OutputLabels = (function() {

        /**
         * Properties of an OutputLabels.
         * @memberof garble
         * @interface IOutputLabels
         * @property {number} id OutputLabels id
         * @property {Array.<core.IBlock>|null} [labels] OutputLabels labels
         */

        /**
         * Constructs a new OutputLabels.
         * @memberof garble
         * @classdesc Represents an OutputLabels.
         * @implements IOutputLabels
         * @constructor
         * @param {garble.IOutputLabels=} [properties] Properties to set
         */
        function OutputLabels(properties) {
            this.labels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutputLabels id.
         * @member {number} id
         * @memberof garble.OutputLabels
         * @instance
         */
        OutputLabels.prototype.id = 0;

        /**
         * OutputLabels labels.
         * @member {Array.<core.IBlock>} labels
         * @memberof garble.OutputLabels
         * @instance
         */
        OutputLabels.prototype.labels = $util.emptyArray;

        /**
         * Creates a new OutputLabels instance using the specified properties.
         * @function create
         * @memberof garble.OutputLabels
         * @static
         * @param {garble.IOutputLabels=} [properties] Properties to set
         * @returns {garble.OutputLabels} OutputLabels instance
         */
        OutputLabels.create = function create(properties) {
            return new OutputLabels(properties);
        };

        /**
         * Encodes the specified OutputLabels message. Does not implicitly {@link garble.OutputLabels.verify|verify} messages.
         * @function encode
         * @memberof garble.OutputLabels
         * @static
         * @param {garble.IOutputLabels} message OutputLabels message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputLabels.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    $root.core.Block.encode(message.labels[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OutputLabels message, length delimited. Does not implicitly {@link garble.OutputLabels.verify|verify} messages.
         * @function encodeDelimited
         * @memberof garble.OutputLabels
         * @static
         * @param {garble.IOutputLabels} message OutputLabels message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputLabels.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutputLabels message from the specified reader or buffer.
         * @function decode
         * @memberof garble.OutputLabels
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {garble.OutputLabels} OutputLabels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputLabels.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.garble.OutputLabels();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.labels && message.labels.length))
                            message.labels = [];
                        message.labels.push($root.core.Block.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes an OutputLabels message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof garble.OutputLabels
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {garble.OutputLabels} OutputLabels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputLabels.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutputLabels message.
         * @function verify
         * @memberof garble.OutputLabels
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutputLabels.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (var i = 0; i < message.labels.length; ++i) {
                    var error = $root.core.Block.verify(message.labels[i]);
                    if (error)
                        return "labels." + error;
                }
            }
            return null;
        };

        /**
         * Creates an OutputLabels message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof garble.OutputLabels
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {garble.OutputLabels} OutputLabels
         */
        OutputLabels.fromObject = function fromObject(object) {
            if (object instanceof $root.garble.OutputLabels)
                return object;
            var message = new $root.garble.OutputLabels();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".garble.OutputLabels.labels: array expected");
                message.labels = [];
                for (var i = 0; i < object.labels.length; ++i) {
                    if (typeof object.labels[i] !== "object")
                        throw TypeError(".garble.OutputLabels.labels: object expected");
                    message.labels[i] = $root.core.Block.fromObject(object.labels[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an OutputLabels message. Also converts values to other types if specified.
         * @function toObject
         * @memberof garble.OutputLabels
         * @static
         * @param {garble.OutputLabels} message OutputLabels
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutputLabels.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.labels = [];
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (var j = 0; j < message.labels.length; ++j)
                    object.labels[j] = $root.core.Block.toObject(message.labels[j], options);
            }
            return object;
        };

        /**
         * Converts this OutputLabels to JSON.
         * @function toJSON
         * @memberof garble.OutputLabels
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutputLabels.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OutputLabels
         * @function getTypeUrl
         * @memberof garble.OutputLabels
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OutputLabels.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/garble.OutputLabels";
        };

        return OutputLabels;
    })();

    garble.Output = (function() {

        /**
         * Properties of an Output.
         * @memberof garble
         * @interface IOutput
         * @property {Array.<garble.IOutputLabels>|null} [outputLabels] Output outputLabels
         * @property {Array.<garble.IOutputEncoding>|null} [encoding] Output encoding
         */

        /**
         * Constructs a new Output.
         * @memberof garble
         * @classdesc Represents an Output.
         * @implements IOutput
         * @constructor
         * @param {garble.IOutput=} [properties] Properties to set
         */
        function Output(properties) {
            this.outputLabels = [];
            this.encoding = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Output outputLabels.
         * @member {Array.<garble.IOutputLabels>} outputLabels
         * @memberof garble.Output
         * @instance
         */
        Output.prototype.outputLabels = $util.emptyArray;

        /**
         * Output encoding.
         * @member {Array.<garble.IOutputEncoding>} encoding
         * @memberof garble.Output
         * @instance
         */
        Output.prototype.encoding = $util.emptyArray;

        /**
         * Creates a new Output instance using the specified properties.
         * @function create
         * @memberof garble.Output
         * @static
         * @param {garble.IOutput=} [properties] Properties to set
         * @returns {garble.Output} Output instance
         */
        Output.create = function create(properties) {
            return new Output(properties);
        };

        /**
         * Encodes the specified Output message. Does not implicitly {@link garble.Output.verify|verify} messages.
         * @function encode
         * @memberof garble.Output
         * @static
         * @param {garble.IOutput} message Output message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Output.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.outputLabels != null && message.outputLabels.length)
                for (var i = 0; i < message.outputLabels.length; ++i)
                    $root.garble.OutputLabels.encode(message.outputLabels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.encoding != null && message.encoding.length)
                for (var i = 0; i < message.encoding.length; ++i)
                    $root.garble.OutputEncoding.encode(message.encoding[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Output message, length delimited. Does not implicitly {@link garble.Output.verify|verify} messages.
         * @function encodeDelimited
         * @memberof garble.Output
         * @static
         * @param {garble.IOutput} message Output message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Output.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @function decode
         * @memberof garble.Output
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {garble.Output} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Output.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.garble.Output();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.outputLabels && message.outputLabels.length))
                            message.outputLabels = [];
                        message.outputLabels.push($root.garble.OutputLabels.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.encoding && message.encoding.length))
                            message.encoding = [];
                        message.encoding.push($root.garble.OutputEncoding.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Output message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof garble.Output
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {garble.Output} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Output.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Output message.
         * @function verify
         * @memberof garble.Output
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Output.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.outputLabels != null && message.hasOwnProperty("outputLabels")) {
                if (!Array.isArray(message.outputLabels))
                    return "outputLabels: array expected";
                for (var i = 0; i < message.outputLabels.length; ++i) {
                    var error = $root.garble.OutputLabels.verify(message.outputLabels[i]);
                    if (error)
                        return "outputLabels." + error;
                }
            }
            if (message.encoding != null && message.hasOwnProperty("encoding")) {
                if (!Array.isArray(message.encoding))
                    return "encoding: array expected";
                for (var i = 0; i < message.encoding.length; ++i) {
                    var error = $root.garble.OutputEncoding.verify(message.encoding[i]);
                    if (error)
                        return "encoding." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof garble.Output
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {garble.Output} Output
         */
        Output.fromObject = function fromObject(object) {
            if (object instanceof $root.garble.Output)
                return object;
            var message = new $root.garble.Output();
            if (object.outputLabels) {
                if (!Array.isArray(object.outputLabels))
                    throw TypeError(".garble.Output.outputLabels: array expected");
                message.outputLabels = [];
                for (var i = 0; i < object.outputLabels.length; ++i) {
                    if (typeof object.outputLabels[i] !== "object")
                        throw TypeError(".garble.Output.outputLabels: object expected");
                    message.outputLabels[i] = $root.garble.OutputLabels.fromObject(object.outputLabels[i]);
                }
            }
            if (object.encoding) {
                if (!Array.isArray(object.encoding))
                    throw TypeError(".garble.Output.encoding: array expected");
                message.encoding = [];
                for (var i = 0; i < object.encoding.length; ++i) {
                    if (typeof object.encoding[i] !== "object")
                        throw TypeError(".garble.Output.encoding: object expected");
                    message.encoding[i] = $root.garble.OutputEncoding.fromObject(object.encoding[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @function toObject
         * @memberof garble.Output
         * @static
         * @param {garble.Output} message Output
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Output.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.outputLabels = [];
                object.encoding = [];
            }
            if (message.outputLabels && message.outputLabels.length) {
                object.outputLabels = [];
                for (var j = 0; j < message.outputLabels.length; ++j)
                    object.outputLabels[j] = $root.garble.OutputLabels.toObject(message.outputLabels[j], options);
            }
            if (message.encoding && message.encoding.length) {
                object.encoding = [];
                for (var j = 0; j < message.encoding.length; ++j)
                    object.encoding[j] = $root.garble.OutputEncoding.toObject(message.encoding[j], options);
            }
            return object;
        };

        /**
         * Converts this Output to JSON.
         * @function toJSON
         * @memberof garble.Output
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Output.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Output
         * @function getTypeUrl
         * @memberof garble.Output
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Output.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/garble.Output";
        };

        return Output;
    })();

    garble.EncryptedGates = (function() {

        /**
         * Properties of an EncryptedGates.
         * @memberof garble
         * @interface IEncryptedGates
         * @property {Array.<core.IBlock>|null} [encryptedGates] EncryptedGates encryptedGates
         */

        /**
         * Constructs a new EncryptedGates.
         * @memberof garble
         * @classdesc Represents an EncryptedGates.
         * @implements IEncryptedGates
         * @constructor
         * @param {garble.IEncryptedGates=} [properties] Properties to set
         */
        function EncryptedGates(properties) {
            this.encryptedGates = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EncryptedGates encryptedGates.
         * @member {Array.<core.IBlock>} encryptedGates
         * @memberof garble.EncryptedGates
         * @instance
         */
        EncryptedGates.prototype.encryptedGates = $util.emptyArray;

        /**
         * Creates a new EncryptedGates instance using the specified properties.
         * @function create
         * @memberof garble.EncryptedGates
         * @static
         * @param {garble.IEncryptedGates=} [properties] Properties to set
         * @returns {garble.EncryptedGates} EncryptedGates instance
         */
        EncryptedGates.create = function create(properties) {
            return new EncryptedGates(properties);
        };

        /**
         * Encodes the specified EncryptedGates message. Does not implicitly {@link garble.EncryptedGates.verify|verify} messages.
         * @function encode
         * @memberof garble.EncryptedGates
         * @static
         * @param {garble.IEncryptedGates} message EncryptedGates message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EncryptedGates.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encryptedGates != null && message.encryptedGates.length)
                for (var i = 0; i < message.encryptedGates.length; ++i)
                    $root.core.Block.encode(message.encryptedGates[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EncryptedGates message, length delimited. Does not implicitly {@link garble.EncryptedGates.verify|verify} messages.
         * @function encodeDelimited
         * @memberof garble.EncryptedGates
         * @static
         * @param {garble.IEncryptedGates} message EncryptedGates message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EncryptedGates.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EncryptedGates message from the specified reader or buffer.
         * @function decode
         * @memberof garble.EncryptedGates
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {garble.EncryptedGates} EncryptedGates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EncryptedGates.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.garble.EncryptedGates();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.encryptedGates && message.encryptedGates.length))
                            message.encryptedGates = [];
                        message.encryptedGates.push($root.core.Block.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EncryptedGates message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof garble.EncryptedGates
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {garble.EncryptedGates} EncryptedGates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EncryptedGates.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EncryptedGates message.
         * @function verify
         * @memberof garble.EncryptedGates
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EncryptedGates.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.encryptedGates != null && message.hasOwnProperty("encryptedGates")) {
                if (!Array.isArray(message.encryptedGates))
                    return "encryptedGates: array expected";
                for (var i = 0; i < message.encryptedGates.length; ++i) {
                    var error = $root.core.Block.verify(message.encryptedGates[i]);
                    if (error)
                        return "encryptedGates." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EncryptedGates message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof garble.EncryptedGates
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {garble.EncryptedGates} EncryptedGates
         */
        EncryptedGates.fromObject = function fromObject(object) {
            if (object instanceof $root.garble.EncryptedGates)
                return object;
            var message = new $root.garble.EncryptedGates();
            if (object.encryptedGates) {
                if (!Array.isArray(object.encryptedGates))
                    throw TypeError(".garble.EncryptedGates.encryptedGates: array expected");
                message.encryptedGates = [];
                for (var i = 0; i < object.encryptedGates.length; ++i) {
                    if (typeof object.encryptedGates[i] !== "object")
                        throw TypeError(".garble.EncryptedGates.encryptedGates: object expected");
                    message.encryptedGates[i] = $root.core.Block.fromObject(object.encryptedGates[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EncryptedGates message. Also converts values to other types if specified.
         * @function toObject
         * @memberof garble.EncryptedGates
         * @static
         * @param {garble.EncryptedGates} message EncryptedGates
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EncryptedGates.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.encryptedGates = [];
            if (message.encryptedGates && message.encryptedGates.length) {
                object.encryptedGates = [];
                for (var j = 0; j < message.encryptedGates.length; ++j)
                    object.encryptedGates[j] = $root.core.Block.toObject(message.encryptedGates[j], options);
            }
            return object;
        };

        /**
         * Converts this EncryptedGates to JSON.
         * @function toJSON
         * @memberof garble.EncryptedGates
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EncryptedGates.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EncryptedGates
         * @function getTypeUrl
         * @memberof garble.EncryptedGates
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EncryptedGates.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/garble.EncryptedGates";
        };

        return EncryptedGates;
    })();

    return garble;
})();

$root.core = (function() {

    /**
     * Namespace core.
     * @exports core
     * @namespace
     */
    var core = {};

    core.Block = (function() {

        /**
         * Properties of a Block.
         * @memberof core
         * @interface IBlock
         * @property {number|Long} low Block low
         * @property {number|Long} high Block high
         */

        /**
         * Constructs a new Block.
         * @memberof core
         * @classdesc Represents a Block.
         * @implements IBlock
         * @constructor
         * @param {core.IBlock=} [properties] Properties to set
         */
        function Block(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Block low.
         * @member {number|Long} low
         * @memberof core.Block
         * @instance
         */
        Block.prototype.low = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Block high.
         * @member {number|Long} high
         * @memberof core.Block
         * @instance
         */
        Block.prototype.high = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Block instance using the specified properties.
         * @function create
         * @memberof core.Block
         * @static
         * @param {core.IBlock=} [properties] Properties to set
         * @returns {core.Block} Block instance
         */
        Block.create = function create(properties) {
            return new Block(properties);
        };

        /**
         * Encodes the specified Block message. Does not implicitly {@link core.Block.verify|verify} messages.
         * @function encode
         * @memberof core.Block
         * @static
         * @param {core.IBlock} message Block message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Block.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.low);
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.high);
            return writer;
        };

        /**
         * Encodes the specified Block message, length delimited. Does not implicitly {@link core.Block.verify|verify} messages.
         * @function encodeDelimited
         * @memberof core.Block
         * @static
         * @param {core.IBlock} message Block message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Block.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Block message from the specified reader or buffer.
         * @function decode
         * @memberof core.Block
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {core.Block} Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Block.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.core.Block();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.low = reader.uint64();
                        break;
                    }
                case 2: {
                        message.high = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("low"))
                throw $util.ProtocolError("missing required 'low'", { instance: message });
            if (!message.hasOwnProperty("high"))
                throw $util.ProtocolError("missing required 'high'", { instance: message });
            return message;
        };

        /**
         * Decodes a Block message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof core.Block
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {core.Block} Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Block.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Block message.
         * @function verify
         * @memberof core.Block
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Block.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.low) && !(message.low && $util.isInteger(message.low.low) && $util.isInteger(message.low.high)))
                return "low: integer|Long expected";
            if (!$util.isInteger(message.high) && !(message.high && $util.isInteger(message.high.low) && $util.isInteger(message.high.high)))
                return "high: integer|Long expected";
            return null;
        };

        /**
         * Creates a Block message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof core.Block
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {core.Block} Block
         */
        Block.fromObject = function fromObject(object) {
            if (object instanceof $root.core.Block)
                return object;
            var message = new $root.core.Block();
            if (object.low != null)
                if ($util.Long)
                    (message.low = $util.Long.fromValue(object.low)).unsigned = true;
                else if (typeof object.low === "string")
                    message.low = parseInt(object.low, 10);
                else if (typeof object.low === "number")
                    message.low = object.low;
                else if (typeof object.low === "object")
                    message.low = new $util.LongBits(object.low.low >>> 0, object.low.high >>> 0).toNumber(true);
            if (object.high != null)
                if ($util.Long)
                    (message.high = $util.Long.fromValue(object.high)).unsigned = true;
                else if (typeof object.high === "string")
                    message.high = parseInt(object.high, 10);
                else if (typeof object.high === "number")
                    message.high = object.high;
                else if (typeof object.high === "object")
                    message.high = new $util.LongBits(object.high.low >>> 0, object.high.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Block message. Also converts values to other types if specified.
         * @function toObject
         * @memberof core.Block
         * @static
         * @param {core.Block} message Block
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Block.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.low = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.low = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.high = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.high = options.longs === String ? "0" : 0;
            }
            if (message.low != null && message.hasOwnProperty("low"))
                if (typeof message.low === "number")
                    object.low = options.longs === String ? String(message.low) : message.low;
                else
                    object.low = options.longs === String ? $util.Long.prototype.toString.call(message.low) : options.longs === Number ? new $util.LongBits(message.low.low >>> 0, message.low.high >>> 0).toNumber(true) : message.low;
            if (message.high != null && message.hasOwnProperty("high"))
                if (typeof message.high === "number")
                    object.high = options.longs === String ? String(message.high) : message.high;
                else
                    object.high = options.longs === String ? $util.Long.prototype.toString.call(message.high) : options.longs === Number ? new $util.LongBits(message.high.low >>> 0, message.high.high >>> 0).toNumber(true) : message.high;
            return object;
        };

        /**
         * Converts this Block to JSON.
         * @function toJSON
         * @memberof core.Block
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Block.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Block
         * @function getTypeUrl
         * @memberof core.Block
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Block.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/core.Block";
        };

        return Block;
    })();

    core.BlockPair = (function() {

        /**
         * Properties of a BlockPair.
         * @memberof core
         * @interface IBlockPair
         * @property {core.IBlock} low BlockPair low
         * @property {core.IBlock} high BlockPair high
         */

        /**
         * Constructs a new BlockPair.
         * @memberof core
         * @classdesc Represents a BlockPair.
         * @implements IBlockPair
         * @constructor
         * @param {core.IBlockPair=} [properties] Properties to set
         */
        function BlockPair(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BlockPair low.
         * @member {core.IBlock} low
         * @memberof core.BlockPair
         * @instance
         */
        BlockPair.prototype.low = null;

        /**
         * BlockPair high.
         * @member {core.IBlock} high
         * @memberof core.BlockPair
         * @instance
         */
        BlockPair.prototype.high = null;

        /**
         * Creates a new BlockPair instance using the specified properties.
         * @function create
         * @memberof core.BlockPair
         * @static
         * @param {core.IBlockPair=} [properties] Properties to set
         * @returns {core.BlockPair} BlockPair instance
         */
        BlockPair.create = function create(properties) {
            return new BlockPair(properties);
        };

        /**
         * Encodes the specified BlockPair message. Does not implicitly {@link core.BlockPair.verify|verify} messages.
         * @function encode
         * @memberof core.BlockPair
         * @static
         * @param {core.IBlockPair} message BlockPair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockPair.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.core.Block.encode(message.low, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $root.core.Block.encode(message.high, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BlockPair message, length delimited. Does not implicitly {@link core.BlockPair.verify|verify} messages.
         * @function encodeDelimited
         * @memberof core.BlockPair
         * @static
         * @param {core.IBlockPair} message BlockPair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockPair.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BlockPair message from the specified reader or buffer.
         * @function decode
         * @memberof core.BlockPair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {core.BlockPair} BlockPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockPair.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.core.BlockPair();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.low = $root.core.Block.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.high = $root.core.Block.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("low"))
                throw $util.ProtocolError("missing required 'low'", { instance: message });
            if (!message.hasOwnProperty("high"))
                throw $util.ProtocolError("missing required 'high'", { instance: message });
            return message;
        };

        /**
         * Decodes a BlockPair message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof core.BlockPair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {core.BlockPair} BlockPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockPair.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BlockPair message.
         * @function verify
         * @memberof core.BlockPair
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BlockPair.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.core.Block.verify(message.low);
                if (error)
                    return "low." + error;
            }
            {
                var error = $root.core.Block.verify(message.high);
                if (error)
                    return "high." + error;
            }
            return null;
        };

        /**
         * Creates a BlockPair message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof core.BlockPair
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {core.BlockPair} BlockPair
         */
        BlockPair.fromObject = function fromObject(object) {
            if (object instanceof $root.core.BlockPair)
                return object;
            var message = new $root.core.BlockPair();
            if (object.low != null) {
                if (typeof object.low !== "object")
                    throw TypeError(".core.BlockPair.low: object expected");
                message.low = $root.core.Block.fromObject(object.low);
            }
            if (object.high != null) {
                if (typeof object.high !== "object")
                    throw TypeError(".core.BlockPair.high: object expected");
                message.high = $root.core.Block.fromObject(object.high);
            }
            return message;
        };

        /**
         * Creates a plain object from a BlockPair message. Also converts values to other types if specified.
         * @function toObject
         * @memberof core.BlockPair
         * @static
         * @param {core.BlockPair} message BlockPair
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BlockPair.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.low = null;
                object.high = null;
            }
            if (message.low != null && message.hasOwnProperty("low"))
                object.low = $root.core.Block.toObject(message.low, options);
            if (message.high != null && message.hasOwnProperty("high"))
                object.high = $root.core.Block.toObject(message.high, options);
            return object;
        };

        /**
         * Converts this BlockPair to JSON.
         * @function toJSON
         * @memberof core.BlockPair
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BlockPair.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BlockPair
         * @function getTypeUrl
         * @memberof core.BlockPair
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BlockPair.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/core.BlockPair";
        };

        return BlockPair;
    })();

    core.RistrettoPoint = (function() {

        /**
         * Properties of a RistrettoPoint.
         * @memberof core
         * @interface IRistrettoPoint
         * @property {Uint8Array} point RistrettoPoint point
         */

        /**
         * Constructs a new RistrettoPoint.
         * @memberof core
         * @classdesc Represents a RistrettoPoint.
         * @implements IRistrettoPoint
         * @constructor
         * @param {core.IRistrettoPoint=} [properties] Properties to set
         */
        function RistrettoPoint(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RistrettoPoint point.
         * @member {Uint8Array} point
         * @memberof core.RistrettoPoint
         * @instance
         */
        RistrettoPoint.prototype.point = $util.newBuffer([]);

        /**
         * Creates a new RistrettoPoint instance using the specified properties.
         * @function create
         * @memberof core.RistrettoPoint
         * @static
         * @param {core.IRistrettoPoint=} [properties] Properties to set
         * @returns {core.RistrettoPoint} RistrettoPoint instance
         */
        RistrettoPoint.create = function create(properties) {
            return new RistrettoPoint(properties);
        };

        /**
         * Encodes the specified RistrettoPoint message. Does not implicitly {@link core.RistrettoPoint.verify|verify} messages.
         * @function encode
         * @memberof core.RistrettoPoint
         * @static
         * @param {core.IRistrettoPoint} message RistrettoPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RistrettoPoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.point);
            return writer;
        };

        /**
         * Encodes the specified RistrettoPoint message, length delimited. Does not implicitly {@link core.RistrettoPoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof core.RistrettoPoint
         * @static
         * @param {core.IRistrettoPoint} message RistrettoPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RistrettoPoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RistrettoPoint message from the specified reader or buffer.
         * @function decode
         * @memberof core.RistrettoPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {core.RistrettoPoint} RistrettoPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RistrettoPoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.core.RistrettoPoint();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.point = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("point"))
                throw $util.ProtocolError("missing required 'point'", { instance: message });
            return message;
        };

        /**
         * Decodes a RistrettoPoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof core.RistrettoPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {core.RistrettoPoint} RistrettoPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RistrettoPoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RistrettoPoint message.
         * @function verify
         * @memberof core.RistrettoPoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RistrettoPoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.point && typeof message.point.length === "number" || $util.isString(message.point)))
                return "point: buffer expected";
            return null;
        };

        /**
         * Creates a RistrettoPoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof core.RistrettoPoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {core.RistrettoPoint} RistrettoPoint
         */
        RistrettoPoint.fromObject = function fromObject(object) {
            if (object instanceof $root.core.RistrettoPoint)
                return object;
            var message = new $root.core.RistrettoPoint();
            if (object.point != null)
                if (typeof object.point === "string")
                    $util.base64.decode(object.point, message.point = $util.newBuffer($util.base64.length(object.point)), 0);
                else if (object.point.length >= 0)
                    message.point = object.point;
            return message;
        };

        /**
         * Creates a plain object from a RistrettoPoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof core.RistrettoPoint
         * @static
         * @param {core.RistrettoPoint} message RistrettoPoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RistrettoPoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.point = "";
                else {
                    object.point = [];
                    if (options.bytes !== Array)
                        object.point = $util.newBuffer(object.point);
                }
            if (message.point != null && message.hasOwnProperty("point"))
                object.point = options.bytes === String ? $util.base64.encode(message.point, 0, message.point.length) : options.bytes === Array ? Array.prototype.slice.call(message.point) : message.point;
            return object;
        };

        /**
         * Converts this RistrettoPoint to JSON.
         * @function toJSON
         * @memberof core.RistrettoPoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RistrettoPoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RistrettoPoint
         * @function getTypeUrl
         * @memberof core.RistrettoPoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RistrettoPoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/core.RistrettoPoint";
        };

        return RistrettoPoint;
    })();

    return core;
})();

$root.circuits = (function() {

    /**
     * Namespace circuits.
     * @exports circuits
     * @namespace
     */
    var circuits = {};

    circuits.Gate = (function() {

        /**
         * Properties of a Gate.
         * @memberof circuits
         * @interface IGate
         * @property {number} id Gate id
         * @property {number} xref Gate xref
         * @property {number} yref Gate yref
         * @property {number} zref Gate zref
         * @property {circuits.Gate.GateType} gateType Gate gateType
         */

        /**
         * Constructs a new Gate.
         * @memberof circuits
         * @classdesc Represents a Gate.
         * @implements IGate
         * @constructor
         * @param {circuits.IGate=} [properties] Properties to set
         */
        function Gate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Gate id.
         * @member {number} id
         * @memberof circuits.Gate
         * @instance
         */
        Gate.prototype.id = 0;

        /**
         * Gate xref.
         * @member {number} xref
         * @memberof circuits.Gate
         * @instance
         */
        Gate.prototype.xref = 0;

        /**
         * Gate yref.
         * @member {number} yref
         * @memberof circuits.Gate
         * @instance
         */
        Gate.prototype.yref = 0;

        /**
         * Gate zref.
         * @member {number} zref
         * @memberof circuits.Gate
         * @instance
         */
        Gate.prototype.zref = 0;

        /**
         * Gate gateType.
         * @member {circuits.Gate.GateType} gateType
         * @memberof circuits.Gate
         * @instance
         */
        Gate.prototype.gateType = 0;

        /**
         * Creates a new Gate instance using the specified properties.
         * @function create
         * @memberof circuits.Gate
         * @static
         * @param {circuits.IGate=} [properties] Properties to set
         * @returns {circuits.Gate} Gate instance
         */
        Gate.create = function create(properties) {
            return new Gate(properties);
        };

        /**
         * Encodes the specified Gate message. Does not implicitly {@link circuits.Gate.verify|verify} messages.
         * @function encode
         * @memberof circuits.Gate
         * @static
         * @param {circuits.IGate} message Gate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.xref);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.yref);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.zref);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gateType);
            return writer;
        };

        /**
         * Encodes the specified Gate message, length delimited. Does not implicitly {@link circuits.Gate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof circuits.Gate
         * @static
         * @param {circuits.IGate} message Gate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Gate message from the specified reader or buffer.
         * @function decode
         * @memberof circuits.Gate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {circuits.Gate} Gate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.circuits.Gate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.xref = reader.uint32();
                        break;
                    }
                case 3: {
                        message.yref = reader.uint32();
                        break;
                    }
                case 4: {
                        message.zref = reader.uint32();
                        break;
                    }
                case 5: {
                        message.gateType = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("xref"))
                throw $util.ProtocolError("missing required 'xref'", { instance: message });
            if (!message.hasOwnProperty("yref"))
                throw $util.ProtocolError("missing required 'yref'", { instance: message });
            if (!message.hasOwnProperty("zref"))
                throw $util.ProtocolError("missing required 'zref'", { instance: message });
            if (!message.hasOwnProperty("gateType"))
                throw $util.ProtocolError("missing required 'gateType'", { instance: message });
            return message;
        };

        /**
         * Decodes a Gate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof circuits.Gate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {circuits.Gate} Gate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Gate message.
         * @function verify
         * @memberof circuits.Gate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Gate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.xref))
                return "xref: integer expected";
            if (!$util.isInteger(message.yref))
                return "yref: integer expected";
            if (!$util.isInteger(message.zref))
                return "zref: integer expected";
            switch (message.gateType) {
            default:
                return "gateType: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            return null;
        };

        /**
         * Creates a Gate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof circuits.Gate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {circuits.Gate} Gate
         */
        Gate.fromObject = function fromObject(object) {
            if (object instanceof $root.circuits.Gate)
                return object;
            var message = new $root.circuits.Gate();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.xref != null)
                message.xref = object.xref >>> 0;
            if (object.yref != null)
                message.yref = object.yref >>> 0;
            if (object.zref != null)
                message.zref = object.zref >>> 0;
            switch (object.gateType) {
            default:
                if (typeof object.gateType === "number") {
                    message.gateType = object.gateType;
                    break;
                }
                break;
            case "XOR":
            case 0:
                message.gateType = 0;
                break;
            case "AND":
            case 1:
                message.gateType = 1;
                break;
            case "INV":
            case 2:
                message.gateType = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Gate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof circuits.Gate
         * @static
         * @param {circuits.Gate} message Gate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Gate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.xref = 0;
                object.yref = 0;
                object.zref = 0;
                object.gateType = options.enums === String ? "XOR" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.xref != null && message.hasOwnProperty("xref"))
                object.xref = message.xref;
            if (message.yref != null && message.hasOwnProperty("yref"))
                object.yref = message.yref;
            if (message.zref != null && message.hasOwnProperty("zref"))
                object.zref = message.zref;
            if (message.gateType != null && message.hasOwnProperty("gateType"))
                object.gateType = options.enums === String ? $root.circuits.Gate.GateType[message.gateType] === undefined ? message.gateType : $root.circuits.Gate.GateType[message.gateType] : message.gateType;
            return object;
        };

        /**
         * Converts this Gate to JSON.
         * @function toJSON
         * @memberof circuits.Gate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Gate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Gate
         * @function getTypeUrl
         * @memberof circuits.Gate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Gate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/circuits.Gate";
        };

        /**
         * GateType enum.
         * @name circuits.Gate.GateType
         * @enum {number}
         * @property {number} XOR=0 XOR value
         * @property {number} AND=1 AND value
         * @property {number} INV=2 INV value
         */
        Gate.GateType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "XOR"] = 0;
            values[valuesById[1] = "AND"] = 1;
            values[valuesById[2] = "INV"] = 2;
            return values;
        })();

        return Gate;
    })();

    circuits.Group = (function() {

        /**
         * Properties of a Group.
         * @memberof circuits
         * @interface IGroup
         * @property {string} name Group name
         * @property {string} desc Group desc
         * @property {circuits.Group.ValueType} valueType Group valueType
         * @property {Array.<number>|null} [wires] Group wires
         */

        /**
         * Constructs a new Group.
         * @memberof circuits
         * @classdesc Represents a Group.
         * @implements IGroup
         * @constructor
         * @param {circuits.IGroup=} [properties] Properties to set
         */
        function Group(properties) {
            this.wires = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Group name.
         * @member {string} name
         * @memberof circuits.Group
         * @instance
         */
        Group.prototype.name = "";

        /**
         * Group desc.
         * @member {string} desc
         * @memberof circuits.Group
         * @instance
         */
        Group.prototype.desc = "";

        /**
         * Group valueType.
         * @member {circuits.Group.ValueType} valueType
         * @memberof circuits.Group
         * @instance
         */
        Group.prototype.valueType = 0;

        /**
         * Group wires.
         * @member {Array.<number>} wires
         * @memberof circuits.Group
         * @instance
         */
        Group.prototype.wires = $util.emptyArray;

        /**
         * Creates a new Group instance using the specified properties.
         * @function create
         * @memberof circuits.Group
         * @static
         * @param {circuits.IGroup=} [properties] Properties to set
         * @returns {circuits.Group} Group instance
         */
        Group.create = function create(properties) {
            return new Group(properties);
        };

        /**
         * Encodes the specified Group message. Does not implicitly {@link circuits.Group.verify|verify} messages.
         * @function encode
         * @memberof circuits.Group
         * @static
         * @param {circuits.IGroup} message Group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Group.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.desc);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.valueType);
            if (message.wires != null && message.wires.length)
                for (var i = 0; i < message.wires.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.wires[i]);
            return writer;
        };

        /**
         * Encodes the specified Group message, length delimited. Does not implicitly {@link circuits.Group.verify|verify} messages.
         * @function encodeDelimited
         * @memberof circuits.Group
         * @static
         * @param {circuits.IGroup} message Group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Group.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Group message from the specified reader or buffer.
         * @function decode
         * @memberof circuits.Group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {circuits.Group} Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Group.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.circuits.Group();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.desc = reader.string();
                        break;
                    }
                case 3: {
                        message.valueType = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.wires && message.wires.length))
                            message.wires = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.wires.push(reader.uint32());
                        } else
                            message.wires.push(reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("desc"))
                throw $util.ProtocolError("missing required 'desc'", { instance: message });
            if (!message.hasOwnProperty("valueType"))
                throw $util.ProtocolError("missing required 'valueType'", { instance: message });
            return message;
        };

        /**
         * Decodes a Group message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof circuits.Group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {circuits.Group} Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Group.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Group message.
         * @function verify
         * @memberof circuits.Group
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Group.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.desc))
                return "desc: string expected";
            switch (message.valueType) {
            default:
                return "valueType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                break;
            }
            if (message.wires != null && message.hasOwnProperty("wires")) {
                if (!Array.isArray(message.wires))
                    return "wires: array expected";
                for (var i = 0; i < message.wires.length; ++i)
                    if (!$util.isInteger(message.wires[i]))
                        return "wires: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a Group message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof circuits.Group
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {circuits.Group} Group
         */
        Group.fromObject = function fromObject(object) {
            if (object instanceof $root.circuits.Group)
                return object;
            var message = new $root.circuits.Group();
            if (object.name != null)
                message.name = String(object.name);
            if (object.desc != null)
                message.desc = String(object.desc);
            switch (object.valueType) {
            default:
                if (typeof object.valueType === "number") {
                    message.valueType = object.valueType;
                    break;
                }
                break;
            case "ConstZero":
            case 0:
                message.valueType = 0;
                break;
            case "ConstOne":
            case 1:
                message.valueType = 1;
                break;
            case "Bool":
            case 2:
                message.valueType = 2;
                break;
            case "Bits":
            case 3:
                message.valueType = 3;
                break;
            case "Bytes":
            case 4:
                message.valueType = 4;
                break;
            case "U8":
            case 5:
                message.valueType = 5;
                break;
            case "U16":
            case 6:
                message.valueType = 6;
                break;
            case "U32":
            case 7:
                message.valueType = 7;
                break;
            case "U64":
            case 8:
                message.valueType = 8;
                break;
            case "U128":
            case 9:
                message.valueType = 9;
                break;
            }
            if (object.wires) {
                if (!Array.isArray(object.wires))
                    throw TypeError(".circuits.Group.wires: array expected");
                message.wires = [];
                for (var i = 0; i < object.wires.length; ++i)
                    message.wires[i] = object.wires[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a Group message. Also converts values to other types if specified.
         * @function toObject
         * @memberof circuits.Group
         * @static
         * @param {circuits.Group} message Group
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Group.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.wires = [];
            if (options.defaults) {
                object.name = "";
                object.desc = "";
                object.valueType = options.enums === String ? "ConstZero" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            if (message.valueType != null && message.hasOwnProperty("valueType"))
                object.valueType = options.enums === String ? $root.circuits.Group.ValueType[message.valueType] === undefined ? message.valueType : $root.circuits.Group.ValueType[message.valueType] : message.valueType;
            if (message.wires && message.wires.length) {
                object.wires = [];
                for (var j = 0; j < message.wires.length; ++j)
                    object.wires[j] = message.wires[j];
            }
            return object;
        };

        /**
         * Converts this Group to JSON.
         * @function toJSON
         * @memberof circuits.Group
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Group.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Group
         * @function getTypeUrl
         * @memberof circuits.Group
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Group.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/circuits.Group";
        };

        /**
         * ValueType enum.
         * @name circuits.Group.ValueType
         * @enum {number}
         * @property {number} ConstZero=0 ConstZero value
         * @property {number} ConstOne=1 ConstOne value
         * @property {number} Bool=2 Bool value
         * @property {number} Bits=3 Bits value
         * @property {number} Bytes=4 Bytes value
         * @property {number} U8=5 U8 value
         * @property {number} U16=6 U16 value
         * @property {number} U32=7 U32 value
         * @property {number} U64=8 U64 value
         * @property {number} U128=9 U128 value
         */
        Group.ValueType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ConstZero"] = 0;
            values[valuesById[1] = "ConstOne"] = 1;
            values[valuesById[2] = "Bool"] = 2;
            values[valuesById[3] = "Bits"] = 3;
            values[valuesById[4] = "Bytes"] = 4;
            values[valuesById[5] = "U8"] = 5;
            values[valuesById[6] = "U16"] = 6;
            values[valuesById[7] = "U32"] = 7;
            values[valuesById[8] = "U64"] = 8;
            values[valuesById[9] = "U128"] = 9;
            return values;
        })();

        return Group;
    })();

    circuits.Circuit = (function() {

        /**
         * Properties of a Circuit.
         * @memberof circuits
         * @interface ICircuit
         * @property {string} id Circuit id
         * @property {string} name Circuit name
         * @property {string} version Circuit version
         * @property {number} wireCount Circuit wireCount
         * @property {number} andCount Circuit andCount
         * @property {number} xorCount Circuit xorCount
         * @property {Array.<circuits.IGroup>|null} [inputs] Circuit inputs
         * @property {Array.<circuits.IGroup>|null} [outputs] Circuit outputs
         * @property {Array.<circuits.IGate>|null} [gates] Circuit gates
         */

        /**
         * Constructs a new Circuit.
         * @memberof circuits
         * @classdesc Represents a Circuit.
         * @implements ICircuit
         * @constructor
         * @param {circuits.ICircuit=} [properties] Properties to set
         */
        function Circuit(properties) {
            this.inputs = [];
            this.outputs = [];
            this.gates = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Circuit id.
         * @member {string} id
         * @memberof circuits.Circuit
         * @instance
         */
        Circuit.prototype.id = "";

        /**
         * Circuit name.
         * @member {string} name
         * @memberof circuits.Circuit
         * @instance
         */
        Circuit.prototype.name = "";

        /**
         * Circuit version.
         * @member {string} version
         * @memberof circuits.Circuit
         * @instance
         */
        Circuit.prototype.version = "";

        /**
         * Circuit wireCount.
         * @member {number} wireCount
         * @memberof circuits.Circuit
         * @instance
         */
        Circuit.prototype.wireCount = 0;

        /**
         * Circuit andCount.
         * @member {number} andCount
         * @memberof circuits.Circuit
         * @instance
         */
        Circuit.prototype.andCount = 0;

        /**
         * Circuit xorCount.
         * @member {number} xorCount
         * @memberof circuits.Circuit
         * @instance
         */
        Circuit.prototype.xorCount = 0;

        /**
         * Circuit inputs.
         * @member {Array.<circuits.IGroup>} inputs
         * @memberof circuits.Circuit
         * @instance
         */
        Circuit.prototype.inputs = $util.emptyArray;

        /**
         * Circuit outputs.
         * @member {Array.<circuits.IGroup>} outputs
         * @memberof circuits.Circuit
         * @instance
         */
        Circuit.prototype.outputs = $util.emptyArray;

        /**
         * Circuit gates.
         * @member {Array.<circuits.IGate>} gates
         * @memberof circuits.Circuit
         * @instance
         */
        Circuit.prototype.gates = $util.emptyArray;

        /**
         * Creates a new Circuit instance using the specified properties.
         * @function create
         * @memberof circuits.Circuit
         * @static
         * @param {circuits.ICircuit=} [properties] Properties to set
         * @returns {circuits.Circuit} Circuit instance
         */
        Circuit.create = function create(properties) {
            return new Circuit(properties);
        };

        /**
         * Encodes the specified Circuit message. Does not implicitly {@link circuits.Circuit.verify|verify} messages.
         * @function encode
         * @memberof circuits.Circuit
         * @static
         * @param {circuits.ICircuit} message Circuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Circuit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.version);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.wireCount);
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.andCount);
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.xorCount);
            if (message.inputs != null && message.inputs.length)
                for (var i = 0; i < message.inputs.length; ++i)
                    $root.circuits.Group.encode(message.inputs[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.outputs != null && message.outputs.length)
                for (var i = 0; i < message.outputs.length; ++i)
                    $root.circuits.Group.encode(message.outputs[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.gates != null && message.gates.length)
                for (var i = 0; i < message.gates.length; ++i)
                    $root.circuits.Gate.encode(message.gates[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Circuit message, length delimited. Does not implicitly {@link circuits.Circuit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof circuits.Circuit
         * @static
         * @param {circuits.ICircuit} message Circuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Circuit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Circuit message from the specified reader or buffer.
         * @function decode
         * @memberof circuits.Circuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {circuits.Circuit} Circuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Circuit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.circuits.Circuit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.version = reader.string();
                        break;
                    }
                case 4: {
                        message.wireCount = reader.uint32();
                        break;
                    }
                case 5: {
                        message.andCount = reader.uint32();
                        break;
                    }
                case 6: {
                        message.xorCount = reader.uint32();
                        break;
                    }
                case 7: {
                        if (!(message.inputs && message.inputs.length))
                            message.inputs = [];
                        message.inputs.push($root.circuits.Group.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        if (!(message.outputs && message.outputs.length))
                            message.outputs = [];
                        message.outputs.push($root.circuits.Group.decode(reader, reader.uint32()));
                        break;
                    }
                case 9: {
                        if (!(message.gates && message.gates.length))
                            message.gates = [];
                        message.gates.push($root.circuits.Gate.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("version"))
                throw $util.ProtocolError("missing required 'version'", { instance: message });
            if (!message.hasOwnProperty("wireCount"))
                throw $util.ProtocolError("missing required 'wireCount'", { instance: message });
            if (!message.hasOwnProperty("andCount"))
                throw $util.ProtocolError("missing required 'andCount'", { instance: message });
            if (!message.hasOwnProperty("xorCount"))
                throw $util.ProtocolError("missing required 'xorCount'", { instance: message });
            return message;
        };

        /**
         * Decodes a Circuit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof circuits.Circuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {circuits.Circuit} Circuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Circuit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Circuit message.
         * @function verify
         * @memberof circuits.Circuit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Circuit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.version))
                return "version: string expected";
            if (!$util.isInteger(message.wireCount))
                return "wireCount: integer expected";
            if (!$util.isInteger(message.andCount))
                return "andCount: integer expected";
            if (!$util.isInteger(message.xorCount))
                return "xorCount: integer expected";
            if (message.inputs != null && message.hasOwnProperty("inputs")) {
                if (!Array.isArray(message.inputs))
                    return "inputs: array expected";
                for (var i = 0; i < message.inputs.length; ++i) {
                    var error = $root.circuits.Group.verify(message.inputs[i]);
                    if (error)
                        return "inputs." + error;
                }
            }
            if (message.outputs != null && message.hasOwnProperty("outputs")) {
                if (!Array.isArray(message.outputs))
                    return "outputs: array expected";
                for (var i = 0; i < message.outputs.length; ++i) {
                    var error = $root.circuits.Group.verify(message.outputs[i]);
                    if (error)
                        return "outputs." + error;
                }
            }
            if (message.gates != null && message.hasOwnProperty("gates")) {
                if (!Array.isArray(message.gates))
                    return "gates: array expected";
                for (var i = 0; i < message.gates.length; ++i) {
                    var error = $root.circuits.Gate.verify(message.gates[i]);
                    if (error)
                        return "gates." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Circuit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof circuits.Circuit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {circuits.Circuit} Circuit
         */
        Circuit.fromObject = function fromObject(object) {
            if (object instanceof $root.circuits.Circuit)
                return object;
            var message = new $root.circuits.Circuit();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.version != null)
                message.version = String(object.version);
            if (object.wireCount != null)
                message.wireCount = object.wireCount >>> 0;
            if (object.andCount != null)
                message.andCount = object.andCount >>> 0;
            if (object.xorCount != null)
                message.xorCount = object.xorCount >>> 0;
            if (object.inputs) {
                if (!Array.isArray(object.inputs))
                    throw TypeError(".circuits.Circuit.inputs: array expected");
                message.inputs = [];
                for (var i = 0; i < object.inputs.length; ++i) {
                    if (typeof object.inputs[i] !== "object")
                        throw TypeError(".circuits.Circuit.inputs: object expected");
                    message.inputs[i] = $root.circuits.Group.fromObject(object.inputs[i]);
                }
            }
            if (object.outputs) {
                if (!Array.isArray(object.outputs))
                    throw TypeError(".circuits.Circuit.outputs: array expected");
                message.outputs = [];
                for (var i = 0; i < object.outputs.length; ++i) {
                    if (typeof object.outputs[i] !== "object")
                        throw TypeError(".circuits.Circuit.outputs: object expected");
                    message.outputs[i] = $root.circuits.Group.fromObject(object.outputs[i]);
                }
            }
            if (object.gates) {
                if (!Array.isArray(object.gates))
                    throw TypeError(".circuits.Circuit.gates: array expected");
                message.gates = [];
                for (var i = 0; i < object.gates.length; ++i) {
                    if (typeof object.gates[i] !== "object")
                        throw TypeError(".circuits.Circuit.gates: object expected");
                    message.gates[i] = $root.circuits.Gate.fromObject(object.gates[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Circuit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof circuits.Circuit
         * @static
         * @param {circuits.Circuit} message Circuit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Circuit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.inputs = [];
                object.outputs = [];
                object.gates = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.version = "";
                object.wireCount = 0;
                object.andCount = 0;
                object.xorCount = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.wireCount != null && message.hasOwnProperty("wireCount"))
                object.wireCount = message.wireCount;
            if (message.andCount != null && message.hasOwnProperty("andCount"))
                object.andCount = message.andCount;
            if (message.xorCount != null && message.hasOwnProperty("xorCount"))
                object.xorCount = message.xorCount;
            if (message.inputs && message.inputs.length) {
                object.inputs = [];
                for (var j = 0; j < message.inputs.length; ++j)
                    object.inputs[j] = $root.circuits.Group.toObject(message.inputs[j], options);
            }
            if (message.outputs && message.outputs.length) {
                object.outputs = [];
                for (var j = 0; j < message.outputs.length; ++j)
                    object.outputs[j] = $root.circuits.Group.toObject(message.outputs[j], options);
            }
            if (message.gates && message.gates.length) {
                object.gates = [];
                for (var j = 0; j < message.gates.length; ++j)
                    object.gates[j] = $root.circuits.Gate.toObject(message.gates[j], options);
            }
            return object;
        };

        /**
         * Converts this Circuit to JSON.
         * @function toJSON
         * @memberof circuits.Circuit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Circuit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Circuit
         * @function getTypeUrl
         * @memberof circuits.Circuit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Circuit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/circuits.Circuit";
        };

        return Circuit;
    })();

    return circuits;
})();

$root.zk = (function() {

    /**
     * Namespace zk.
     * @exports zk
     * @namespace
     */
    var zk = {};

    zk.SparseCoo = (function() {

        /**
         * Properties of a SparseCoo.
         * @memberof zk
         * @interface ISparseCoo
         * @property {Array.<number>|null} [rows] SparseCoo rows
         * @property {Array.<number>|null} [cols] SparseCoo cols
         * @property {Array.<boolean>|null} [values] SparseCoo values
         */

        /**
         * Constructs a new SparseCoo.
         * @memberof zk
         * @classdesc Represents a SparseCoo.
         * @implements ISparseCoo
         * @constructor
         * @param {zk.ISparseCoo=} [properties] Properties to set
         */
        function SparseCoo(properties) {
            this.rows = [];
            this.cols = [];
            this.values = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SparseCoo rows.
         * @member {Array.<number>} rows
         * @memberof zk.SparseCoo
         * @instance
         */
        SparseCoo.prototype.rows = $util.emptyArray;

        /**
         * SparseCoo cols.
         * @member {Array.<number>} cols
         * @memberof zk.SparseCoo
         * @instance
         */
        SparseCoo.prototype.cols = $util.emptyArray;

        /**
         * SparseCoo values.
         * @member {Array.<boolean>} values
         * @memberof zk.SparseCoo
         * @instance
         */
        SparseCoo.prototype.values = $util.emptyArray;

        /**
         * Creates a new SparseCoo instance using the specified properties.
         * @function create
         * @memberof zk.SparseCoo
         * @static
         * @param {zk.ISparseCoo=} [properties] Properties to set
         * @returns {zk.SparseCoo} SparseCoo instance
         */
        SparseCoo.create = function create(properties) {
            return new SparseCoo(properties);
        };

        /**
         * Encodes the specified SparseCoo message. Does not implicitly {@link zk.SparseCoo.verify|verify} messages.
         * @function encode
         * @memberof zk.SparseCoo
         * @static
         * @param {zk.ISparseCoo} message SparseCoo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SparseCoo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rows != null && message.rows.length)
                for (var i = 0; i < message.rows.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.rows[i]);
            if (message.cols != null && message.cols.length)
                for (var i = 0; i < message.cols.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.cols[i]);
            if (message.values != null && message.values.length)
                for (var i = 0; i < message.values.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.values[i]);
            return writer;
        };

        /**
         * Encodes the specified SparseCoo message, length delimited. Does not implicitly {@link zk.SparseCoo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof zk.SparseCoo
         * @static
         * @param {zk.ISparseCoo} message SparseCoo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SparseCoo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SparseCoo message from the specified reader or buffer.
         * @function decode
         * @memberof zk.SparseCoo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {zk.SparseCoo} SparseCoo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SparseCoo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zk.SparseCoo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.rows && message.rows.length))
                            message.rows = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.rows.push(reader.uint32());
                        } else
                            message.rows.push(reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.cols && message.cols.length))
                            message.cols = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cols.push(reader.uint32());
                        } else
                            message.cols.push(reader.uint32());
                        break;
                    }
                case 3: {
                        if (!(message.values && message.values.length))
                            message.values = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.values.push(reader.bool());
                        } else
                            message.values.push(reader.bool());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SparseCoo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof zk.SparseCoo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {zk.SparseCoo} SparseCoo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SparseCoo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SparseCoo message.
         * @function verify
         * @memberof zk.SparseCoo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SparseCoo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rows != null && message.hasOwnProperty("rows")) {
                if (!Array.isArray(message.rows))
                    return "rows: array expected";
                for (var i = 0; i < message.rows.length; ++i)
                    if (!$util.isInteger(message.rows[i]))
                        return "rows: integer[] expected";
            }
            if (message.cols != null && message.hasOwnProperty("cols")) {
                if (!Array.isArray(message.cols))
                    return "cols: array expected";
                for (var i = 0; i < message.cols.length; ++i)
                    if (!$util.isInteger(message.cols[i]))
                        return "cols: integer[] expected";
            }
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                    return "values: array expected";
                for (var i = 0; i < message.values.length; ++i)
                    if (typeof message.values[i] !== "boolean")
                        return "values: boolean[] expected";
            }
            return null;
        };

        /**
         * Creates a SparseCoo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof zk.SparseCoo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {zk.SparseCoo} SparseCoo
         */
        SparseCoo.fromObject = function fromObject(object) {
            if (object instanceof $root.zk.SparseCoo)
                return object;
            var message = new $root.zk.SparseCoo();
            if (object.rows) {
                if (!Array.isArray(object.rows))
                    throw TypeError(".zk.SparseCoo.rows: array expected");
                message.rows = [];
                for (var i = 0; i < object.rows.length; ++i)
                    message.rows[i] = object.rows[i] >>> 0;
            }
            if (object.cols) {
                if (!Array.isArray(object.cols))
                    throw TypeError(".zk.SparseCoo.cols: array expected");
                message.cols = [];
                for (var i = 0; i < object.cols.length; ++i)
                    message.cols[i] = object.cols[i] >>> 0;
            }
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".zk.SparseCoo.values: array expected");
                message.values = [];
                for (var i = 0; i < object.values.length; ++i)
                    message.values[i] = Boolean(object.values[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a SparseCoo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof zk.SparseCoo
         * @static
         * @param {zk.SparseCoo} message SparseCoo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SparseCoo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.rows = [];
                object.cols = [];
                object.values = [];
            }
            if (message.rows && message.rows.length) {
                object.rows = [];
                for (var j = 0; j < message.rows.length; ++j)
                    object.rows[j] = message.rows[j];
            }
            if (message.cols && message.cols.length) {
                object.cols = [];
                for (var j = 0; j < message.cols.length; ++j)
                    object.cols[j] = message.cols[j];
            }
            if (message.values && message.values.length) {
                object.values = [];
                for (var j = 0; j < message.values.length; ++j)
                    object.values[j] = message.values[j];
            }
            return object;
        };

        /**
         * Converts this SparseCoo to JSON.
         * @function toJSON
         * @memberof zk.SparseCoo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SparseCoo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SparseCoo
         * @function getTypeUrl
         * @memberof zk.SparseCoo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SparseCoo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/zk.SparseCoo";
        };

        return SparseCoo;
    })();

    zk.IO = (function() {

        /**
         * Properties of a IO.
         * @memberof zk
         * @interface IIO
         * @property {Array.<Uint8Array>|null} [data] IO data
         */

        /**
         * Constructs a new IO.
         * @memberof zk
         * @classdesc Represents a IO.
         * @implements IIO
         * @constructor
         * @param {zk.IIO=} [properties] Properties to set
         */
        function IO(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IO data.
         * @member {Array.<Uint8Array>} data
         * @memberof zk.IO
         * @instance
         */
        IO.prototype.data = $util.emptyArray;

        /**
         * Creates a new IO instance using the specified properties.
         * @function create
         * @memberof zk.IO
         * @static
         * @param {zk.IIO=} [properties] Properties to set
         * @returns {zk.IO} IO instance
         */
        IO.create = function create(properties) {
            return new IO(properties);
        };

        /**
         * Encodes the specified IO message. Does not implicitly {@link zk.IO.verify|verify} messages.
         * @function encode
         * @memberof zk.IO
         * @static
         * @param {zk.IIO} message IO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data[i]);
            return writer;
        };

        /**
         * Encodes the specified IO message, length delimited. Does not implicitly {@link zk.IO.verify|verify} messages.
         * @function encodeDelimited
         * @memberof zk.IO
         * @static
         * @param {zk.IIO} message IO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IO.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a IO message from the specified reader or buffer.
         * @function decode
         * @memberof zk.IO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {zk.IO} IO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zk.IO();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.data && message.data.length))
                            message.data = [];
                        message.data.push(reader.bytes());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a IO message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof zk.IO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {zk.IO} IO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IO.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a IO message.
         * @function verify
         * @memberof zk.IO
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IO.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i)
                    if (!(message.data[i] && typeof message.data[i].length === "number" || $util.isString(message.data[i])))
                        return "data: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a IO message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof zk.IO
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {zk.IO} IO
         */
        IO.fromObject = function fromObject(object) {
            if (object instanceof $root.zk.IO)
                return object;
            var message = new $root.zk.IO();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".zk.IO.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i)
                    if (typeof object.data[i] === "string")
                        $util.base64.decode(object.data[i], message.data[i] = $util.newBuffer($util.base64.length(object.data[i])), 0);
                    else if (object.data[i].length >= 0)
                        message.data[i] = object.data[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a IO message. Also converts values to other types if specified.
         * @function toObject
         * @memberof zk.IO
         * @static
         * @param {zk.IO} message IO
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IO.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = options.bytes === String ? $util.base64.encode(message.data[j], 0, message.data[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.data[j]) : message.data[j];
            }
            return object;
        };

        /**
         * Converts this IO to JSON.
         * @function toJSON
         * @memberof zk.IO
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IO
         * @function getTypeUrl
         * @memberof zk.IO
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/zk.IO";
        };

        return IO;
    })();

    zk.Data = (function() {

        /**
         * Properties of a Data.
         * @memberof zk
         * @interface IData
         * @property {Uint8Array} bits Data bits
         * @property {number} len Data len
         */

        /**
         * Constructs a new Data.
         * @memberof zk
         * @classdesc Represents a Data.
         * @implements IData
         * @constructor
         * @param {zk.IData=} [properties] Properties to set
         */
        function Data(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Data bits.
         * @member {Uint8Array} bits
         * @memberof zk.Data
         * @instance
         */
        Data.prototype.bits = $util.newBuffer([]);

        /**
         * Data len.
         * @member {number} len
         * @memberof zk.Data
         * @instance
         */
        Data.prototype.len = 0;

        /**
         * Creates a new Data instance using the specified properties.
         * @function create
         * @memberof zk.Data
         * @static
         * @param {zk.IData=} [properties] Properties to set
         * @returns {zk.Data} Data instance
         */
        Data.create = function create(properties) {
            return new Data(properties);
        };

        /**
         * Encodes the specified Data message. Does not implicitly {@link zk.Data.verify|verify} messages.
         * @function encode
         * @memberof zk.Data
         * @static
         * @param {zk.IData} message Data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Data.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.bits);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.len);
            return writer;
        };

        /**
         * Encodes the specified Data message, length delimited. Does not implicitly {@link zk.Data.verify|verify} messages.
         * @function encodeDelimited
         * @memberof zk.Data
         * @static
         * @param {zk.IData} message Data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Data.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Data message from the specified reader or buffer.
         * @function decode
         * @memberof zk.Data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {zk.Data} Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Data.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zk.Data();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bits = reader.bytes();
                        break;
                    }
                case 2: {
                        message.len = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("bits"))
                throw $util.ProtocolError("missing required 'bits'", { instance: message });
            if (!message.hasOwnProperty("len"))
                throw $util.ProtocolError("missing required 'len'", { instance: message });
            return message;
        };

        /**
         * Decodes a Data message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof zk.Data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {zk.Data} Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Data.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Data message.
         * @function verify
         * @memberof zk.Data
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Data.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.bits && typeof message.bits.length === "number" || $util.isString(message.bits)))
                return "bits: buffer expected";
            if (!$util.isInteger(message.len))
                return "len: integer expected";
            return null;
        };

        /**
         * Creates a Data message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof zk.Data
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {zk.Data} Data
         */
        Data.fromObject = function fromObject(object) {
            if (object instanceof $root.zk.Data)
                return object;
            var message = new $root.zk.Data();
            if (object.bits != null)
                if (typeof object.bits === "string")
                    $util.base64.decode(object.bits, message.bits = $util.newBuffer($util.base64.length(object.bits)), 0);
                else if (object.bits.length >= 0)
                    message.bits = object.bits;
            if (object.len != null)
                message.len = object.len >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Data message. Also converts values to other types if specified.
         * @function toObject
         * @memberof zk.Data
         * @static
         * @param {zk.Data} message Data
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Data.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.bits = "";
                else {
                    object.bits = [];
                    if (options.bytes !== Array)
                        object.bits = $util.newBuffer(object.bits);
                }
                object.len = 0;
            }
            if (message.bits != null && message.hasOwnProperty("bits"))
                object.bits = options.bytes === String ? $util.base64.encode(message.bits, 0, message.bits.length) : options.bytes === Array ? Array.prototype.slice.call(message.bits) : message.bits;
            if (message.len != null && message.hasOwnProperty("len"))
                object.len = message.len;
            return object;
        };

        /**
         * Converts this Data to JSON.
         * @function toJSON
         * @memberof zk.Data
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Data.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Data
         * @function getTypeUrl
         * @memberof zk.Data
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Data.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/zk.Data";
        };

        return Data;
    })();

    zk.BoolIo = (function() {

        /**
         * Properties of a BoolIo.
         * @memberof zk
         * @interface IBoolIo
         * @property {Array.<zk.IData>|null} [data] BoolIo data
         */

        /**
         * Constructs a new BoolIo.
         * @memberof zk
         * @classdesc Represents a BoolIo.
         * @implements IBoolIo
         * @constructor
         * @param {zk.IBoolIo=} [properties] Properties to set
         */
        function BoolIo(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BoolIo data.
         * @member {Array.<zk.IData>} data
         * @memberof zk.BoolIo
         * @instance
         */
        BoolIo.prototype.data = $util.emptyArray;

        /**
         * Creates a new BoolIo instance using the specified properties.
         * @function create
         * @memberof zk.BoolIo
         * @static
         * @param {zk.IBoolIo=} [properties] Properties to set
         * @returns {zk.BoolIo} BoolIo instance
         */
        BoolIo.create = function create(properties) {
            return new BoolIo(properties);
        };

        /**
         * Encodes the specified BoolIo message. Does not implicitly {@link zk.BoolIo.verify|verify} messages.
         * @function encode
         * @memberof zk.BoolIo
         * @static
         * @param {zk.IBoolIo} message BoolIo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BoolIo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.zk.Data.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BoolIo message, length delimited. Does not implicitly {@link zk.BoolIo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof zk.BoolIo
         * @static
         * @param {zk.IBoolIo} message BoolIo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BoolIo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BoolIo message from the specified reader or buffer.
         * @function decode
         * @memberof zk.BoolIo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {zk.BoolIo} BoolIo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BoolIo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zk.BoolIo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.data && message.data.length))
                            message.data = [];
                        message.data.push($root.zk.Data.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BoolIo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof zk.BoolIo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {zk.BoolIo} BoolIo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BoolIo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BoolIo message.
         * @function verify
         * @memberof zk.BoolIo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BoolIo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.zk.Data.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BoolIo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof zk.BoolIo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {zk.BoolIo} BoolIo
         */
        BoolIo.fromObject = function fromObject(object) {
            if (object instanceof $root.zk.BoolIo)
                return object;
            var message = new $root.zk.BoolIo();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".zk.BoolIo.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".zk.BoolIo.data: object expected");
                    message.data[i] = $root.zk.Data.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BoolIo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof zk.BoolIo
         * @static
         * @param {zk.BoolIo} message BoolIo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BoolIo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.zk.Data.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this BoolIo to JSON.
         * @function toJSON
         * @memberof zk.BoolIo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BoolIo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BoolIo
         * @function getTypeUrl
         * @memberof zk.BoolIo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BoolIo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/zk.BoolIo";
        };

        return BoolIo;
    })();

    zk.ProverCommit = (function() {

        /**
         * Properties of a ProverCommit.
         * @memberof zk
         * @interface IProverCommit
         * @property {boolean} w ProverCommit w
         * @property {Uint8Array} m ProverCommit m
         */

        /**
         * Constructs a new ProverCommit.
         * @memberof zk
         * @classdesc Represents a ProverCommit.
         * @implements IProverCommit
         * @constructor
         * @param {zk.IProverCommit=} [properties] Properties to set
         */
        function ProverCommit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProverCommit w.
         * @member {boolean} w
         * @memberof zk.ProverCommit
         * @instance
         */
        ProverCommit.prototype.w = false;

        /**
         * ProverCommit m.
         * @member {Uint8Array} m
         * @memberof zk.ProverCommit
         * @instance
         */
        ProverCommit.prototype.m = $util.newBuffer([]);

        /**
         * Creates a new ProverCommit instance using the specified properties.
         * @function create
         * @memberof zk.ProverCommit
         * @static
         * @param {zk.IProverCommit=} [properties] Properties to set
         * @returns {zk.ProverCommit} ProverCommit instance
         */
        ProverCommit.create = function create(properties) {
            return new ProverCommit(properties);
        };

        /**
         * Encodes the specified ProverCommit message. Does not implicitly {@link zk.ProverCommit.verify|verify} messages.
         * @function encode
         * @memberof zk.ProverCommit
         * @static
         * @param {zk.IProverCommit} message ProverCommit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProverCommit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.w);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.m);
            return writer;
        };

        /**
         * Encodes the specified ProverCommit message, length delimited. Does not implicitly {@link zk.ProverCommit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof zk.ProverCommit
         * @static
         * @param {zk.IProverCommit} message ProverCommit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProverCommit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProverCommit message from the specified reader or buffer.
         * @function decode
         * @memberof zk.ProverCommit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {zk.ProverCommit} ProverCommit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProverCommit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zk.ProverCommit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.w = reader.bool();
                        break;
                    }
                case 2: {
                        message.m = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("w"))
                throw $util.ProtocolError("missing required 'w'", { instance: message });
            if (!message.hasOwnProperty("m"))
                throw $util.ProtocolError("missing required 'm'", { instance: message });
            return message;
        };

        /**
         * Decodes a ProverCommit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof zk.ProverCommit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {zk.ProverCommit} ProverCommit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProverCommit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProverCommit message.
         * @function verify
         * @memberof zk.ProverCommit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProverCommit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.w !== "boolean")
                return "w: boolean expected";
            if (!(message.m && typeof message.m.length === "number" || $util.isString(message.m)))
                return "m: buffer expected";
            return null;
        };

        /**
         * Creates a ProverCommit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof zk.ProverCommit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {zk.ProverCommit} ProverCommit
         */
        ProverCommit.fromObject = function fromObject(object) {
            if (object instanceof $root.zk.ProverCommit)
                return object;
            var message = new $root.zk.ProverCommit();
            if (object.w != null)
                message.w = Boolean(object.w);
            if (object.m != null)
                if (typeof object.m === "string")
                    $util.base64.decode(object.m, message.m = $util.newBuffer($util.base64.length(object.m)), 0);
                else if (object.m.length >= 0)
                    message.m = object.m;
            return message;
        };

        /**
         * Creates a plain object from a ProverCommit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof zk.ProverCommit
         * @static
         * @param {zk.ProverCommit} message ProverCommit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProverCommit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.w = false;
                if (options.bytes === String)
                    object.m = "";
                else {
                    object.m = [];
                    if (options.bytes !== Array)
                        object.m = $util.newBuffer(object.m);
                }
            }
            if (message.w != null && message.hasOwnProperty("w"))
                object.w = message.w;
            if (message.m != null && message.hasOwnProperty("m"))
                object.m = options.bytes === String ? $util.base64.encode(message.m, 0, message.m.length) : options.bytes === Array ? Array.prototype.slice.call(message.m) : message.m;
            return object;
        };

        /**
         * Converts this ProverCommit to JSON.
         * @function toJSON
         * @memberof zk.ProverCommit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProverCommit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProverCommit
         * @function getTypeUrl
         * @memberof zk.ProverCommit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProverCommit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/zk.ProverCommit";
        };

        return ProverCommit;
    })();

    zk.Commit = (function() {

        /**
         * Properties of a Commit.
         * @memberof zk
         * @interface ICommit
         * @property {Array.<zk.IProverCommit>|null} [commit] Commit commit
         */

        /**
         * Constructs a new Commit.
         * @memberof zk
         * @classdesc Represents a Commit.
         * @implements ICommit
         * @constructor
         * @param {zk.ICommit=} [properties] Properties to set
         */
        function Commit(properties) {
            this.commit = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Commit commit.
         * @member {Array.<zk.IProverCommit>} commit
         * @memberof zk.Commit
         * @instance
         */
        Commit.prototype.commit = $util.emptyArray;

        /**
         * Creates a new Commit instance using the specified properties.
         * @function create
         * @memberof zk.Commit
         * @static
         * @param {zk.ICommit=} [properties] Properties to set
         * @returns {zk.Commit} Commit instance
         */
        Commit.create = function create(properties) {
            return new Commit(properties);
        };

        /**
         * Encodes the specified Commit message. Does not implicitly {@link zk.Commit.verify|verify} messages.
         * @function encode
         * @memberof zk.Commit
         * @static
         * @param {zk.ICommit} message Commit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Commit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.commit != null && message.commit.length)
                for (var i = 0; i < message.commit.length; ++i)
                    $root.zk.ProverCommit.encode(message.commit[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Commit message, length delimited. Does not implicitly {@link zk.Commit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof zk.Commit
         * @static
         * @param {zk.ICommit} message Commit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Commit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Commit message from the specified reader or buffer.
         * @function decode
         * @memberof zk.Commit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {zk.Commit} Commit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Commit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zk.Commit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.commit && message.commit.length))
                            message.commit = [];
                        message.commit.push($root.zk.ProverCommit.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Commit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof zk.Commit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {zk.Commit} Commit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Commit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Commit message.
         * @function verify
         * @memberof zk.Commit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Commit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.commit != null && message.hasOwnProperty("commit")) {
                if (!Array.isArray(message.commit))
                    return "commit: array expected";
                for (var i = 0; i < message.commit.length; ++i) {
                    var error = $root.zk.ProverCommit.verify(message.commit[i]);
                    if (error)
                        return "commit." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Commit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof zk.Commit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {zk.Commit} Commit
         */
        Commit.fromObject = function fromObject(object) {
            if (object instanceof $root.zk.Commit)
                return object;
            var message = new $root.zk.Commit();
            if (object.commit) {
                if (!Array.isArray(object.commit))
                    throw TypeError(".zk.Commit.commit: array expected");
                message.commit = [];
                for (var i = 0; i < object.commit.length; ++i) {
                    if (typeof object.commit[i] !== "object")
                        throw TypeError(".zk.Commit.commit: object expected");
                    message.commit[i] = $root.zk.ProverCommit.fromObject(object.commit[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Commit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof zk.Commit
         * @static
         * @param {zk.Commit} message Commit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Commit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.commit = [];
            if (message.commit && message.commit.length) {
                object.commit = [];
                for (var j = 0; j < message.commit.length; ++j)
                    object.commit[j] = $root.zk.ProverCommit.toObject(message.commit[j], options);
            }
            return object;
        };

        /**
         * Converts this Commit to JSON.
         * @function toJSON
         * @memberof zk.Commit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Commit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Commit
         * @function getTypeUrl
         * @memberof zk.Commit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Commit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/zk.Commit";
        };

        return Commit;
    })();

    zk.EvaluateOutput = (function() {

        /**
         * Properties of an EvaluateOutput.
         * @memberof zk
         * @interface IEvaluateOutput
         * @property {zk.IData} d EvaluateOutput d
         * @property {Uint8Array} u EvaluateOutput u
         * @property {Uint8Array} v EvaluateOutput v
         * @property {Array.<zk.ICommit>|null} [commits] EvaluateOutput commits
         */

        /**
         * Constructs a new EvaluateOutput.
         * @memberof zk
         * @classdesc Represents an EvaluateOutput.
         * @implements IEvaluateOutput
         * @constructor
         * @param {zk.IEvaluateOutput=} [properties] Properties to set
         */
        function EvaluateOutput(properties) {
            this.commits = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EvaluateOutput d.
         * @member {zk.IData} d
         * @memberof zk.EvaluateOutput
         * @instance
         */
        EvaluateOutput.prototype.d = null;

        /**
         * EvaluateOutput u.
         * @member {Uint8Array} u
         * @memberof zk.EvaluateOutput
         * @instance
         */
        EvaluateOutput.prototype.u = $util.newBuffer([]);

        /**
         * EvaluateOutput v.
         * @member {Uint8Array} v
         * @memberof zk.EvaluateOutput
         * @instance
         */
        EvaluateOutput.prototype.v = $util.newBuffer([]);

        /**
         * EvaluateOutput commits.
         * @member {Array.<zk.ICommit>} commits
         * @memberof zk.EvaluateOutput
         * @instance
         */
        EvaluateOutput.prototype.commits = $util.emptyArray;

        /**
         * Creates a new EvaluateOutput instance using the specified properties.
         * @function create
         * @memberof zk.EvaluateOutput
         * @static
         * @param {zk.IEvaluateOutput=} [properties] Properties to set
         * @returns {zk.EvaluateOutput} EvaluateOutput instance
         */
        EvaluateOutput.create = function create(properties) {
            return new EvaluateOutput(properties);
        };

        /**
         * Encodes the specified EvaluateOutput message. Does not implicitly {@link zk.EvaluateOutput.verify|verify} messages.
         * @function encode
         * @memberof zk.EvaluateOutput
         * @static
         * @param {zk.IEvaluateOutput} message EvaluateOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EvaluateOutput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.zk.Data.encode(message.d, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.u);
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.v);
            if (message.commits != null && message.commits.length)
                for (var i = 0; i < message.commits.length; ++i)
                    $root.zk.Commit.encode(message.commits[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EvaluateOutput message, length delimited. Does not implicitly {@link zk.EvaluateOutput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof zk.EvaluateOutput
         * @static
         * @param {zk.IEvaluateOutput} message EvaluateOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EvaluateOutput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EvaluateOutput message from the specified reader or buffer.
         * @function decode
         * @memberof zk.EvaluateOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {zk.EvaluateOutput} EvaluateOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EvaluateOutput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zk.EvaluateOutput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.d = $root.zk.Data.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.u = reader.bytes();
                        break;
                    }
                case 3: {
                        message.v = reader.bytes();
                        break;
                    }
                case 4: {
                        if (!(message.commits && message.commits.length))
                            message.commits = [];
                        message.commits.push($root.zk.Commit.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("d"))
                throw $util.ProtocolError("missing required 'd'", { instance: message });
            if (!message.hasOwnProperty("u"))
                throw $util.ProtocolError("missing required 'u'", { instance: message });
            if (!message.hasOwnProperty("v"))
                throw $util.ProtocolError("missing required 'v'", { instance: message });
            return message;
        };

        /**
         * Decodes an EvaluateOutput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof zk.EvaluateOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {zk.EvaluateOutput} EvaluateOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EvaluateOutput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EvaluateOutput message.
         * @function verify
         * @memberof zk.EvaluateOutput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EvaluateOutput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.zk.Data.verify(message.d);
                if (error)
                    return "d." + error;
            }
            if (!(message.u && typeof message.u.length === "number" || $util.isString(message.u)))
                return "u: buffer expected";
            if (!(message.v && typeof message.v.length === "number" || $util.isString(message.v)))
                return "v: buffer expected";
            if (message.commits != null && message.hasOwnProperty("commits")) {
                if (!Array.isArray(message.commits))
                    return "commits: array expected";
                for (var i = 0; i < message.commits.length; ++i) {
                    var error = $root.zk.Commit.verify(message.commits[i]);
                    if (error)
                        return "commits." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EvaluateOutput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof zk.EvaluateOutput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {zk.EvaluateOutput} EvaluateOutput
         */
        EvaluateOutput.fromObject = function fromObject(object) {
            if (object instanceof $root.zk.EvaluateOutput)
                return object;
            var message = new $root.zk.EvaluateOutput();
            if (object.d != null) {
                if (typeof object.d !== "object")
                    throw TypeError(".zk.EvaluateOutput.d: object expected");
                message.d = $root.zk.Data.fromObject(object.d);
            }
            if (object.u != null)
                if (typeof object.u === "string")
                    $util.base64.decode(object.u, message.u = $util.newBuffer($util.base64.length(object.u)), 0);
                else if (object.u.length >= 0)
                    message.u = object.u;
            if (object.v != null)
                if (typeof object.v === "string")
                    $util.base64.decode(object.v, message.v = $util.newBuffer($util.base64.length(object.v)), 0);
                else if (object.v.length >= 0)
                    message.v = object.v;
            if (object.commits) {
                if (!Array.isArray(object.commits))
                    throw TypeError(".zk.EvaluateOutput.commits: array expected");
                message.commits = [];
                for (var i = 0; i < object.commits.length; ++i) {
                    if (typeof object.commits[i] !== "object")
                        throw TypeError(".zk.EvaluateOutput.commits: object expected");
                    message.commits[i] = $root.zk.Commit.fromObject(object.commits[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EvaluateOutput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof zk.EvaluateOutput
         * @static
         * @param {zk.EvaluateOutput} message EvaluateOutput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EvaluateOutput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.commits = [];
            if (options.defaults) {
                object.d = null;
                if (options.bytes === String)
                    object.u = "";
                else {
                    object.u = [];
                    if (options.bytes !== Array)
                        object.u = $util.newBuffer(object.u);
                }
                if (options.bytes === String)
                    object.v = "";
                else {
                    object.v = [];
                    if (options.bytes !== Array)
                        object.v = $util.newBuffer(object.v);
                }
            }
            if (message.d != null && message.hasOwnProperty("d"))
                object.d = $root.zk.Data.toObject(message.d, options);
            if (message.u != null && message.hasOwnProperty("u"))
                object.u = options.bytes === String ? $util.base64.encode(message.u, 0, message.u.length) : options.bytes === Array ? Array.prototype.slice.call(message.u) : message.u;
            if (message.v != null && message.hasOwnProperty("v"))
                object.v = options.bytes === String ? $util.base64.encode(message.v, 0, message.v.length) : options.bytes === Array ? Array.prototype.slice.call(message.v) : message.v;
            if (message.commits && message.commits.length) {
                object.commits = [];
                for (var j = 0; j < message.commits.length; ++j)
                    object.commits[j] = $root.zk.Commit.toObject(message.commits[j], options);
            }
            return object;
        };

        /**
         * Converts this EvaluateOutput to JSON.
         * @function toJSON
         * @memberof zk.EvaluateOutput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EvaluateOutput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EvaluateOutput
         * @function getTypeUrl
         * @memberof zk.EvaluateOutput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EvaluateOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/zk.EvaluateOutput";
        };

        return EvaluateOutput;
    })();

    zk.BaseCircuit = (function() {

        /**
         * Properties of a BaseCircuit.
         * @memberof zk
         * @interface IBaseCircuit
         * @property {string} name BaseCircuit name
         * @property {string} data BaseCircuit data
         */

        /**
         * Constructs a new BaseCircuit.
         * @memberof zk
         * @classdesc Represents a BaseCircuit.
         * @implements IBaseCircuit
         * @constructor
         * @param {zk.IBaseCircuit=} [properties] Properties to set
         */
        function BaseCircuit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseCircuit name.
         * @member {string} name
         * @memberof zk.BaseCircuit
         * @instance
         */
        BaseCircuit.prototype.name = "";

        /**
         * BaseCircuit data.
         * @member {string} data
         * @memberof zk.BaseCircuit
         * @instance
         */
        BaseCircuit.prototype.data = "";

        /**
         * Creates a new BaseCircuit instance using the specified properties.
         * @function create
         * @memberof zk.BaseCircuit
         * @static
         * @param {zk.IBaseCircuit=} [properties] Properties to set
         * @returns {zk.BaseCircuit} BaseCircuit instance
         */
        BaseCircuit.create = function create(properties) {
            return new BaseCircuit(properties);
        };

        /**
         * Encodes the specified BaseCircuit message. Does not implicitly {@link zk.BaseCircuit.verify|verify} messages.
         * @function encode
         * @memberof zk.BaseCircuit
         * @static
         * @param {zk.IBaseCircuit} message BaseCircuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseCircuit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
            return writer;
        };

        /**
         * Encodes the specified BaseCircuit message, length delimited. Does not implicitly {@link zk.BaseCircuit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof zk.BaseCircuit
         * @static
         * @param {zk.IBaseCircuit} message BaseCircuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseCircuit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseCircuit message from the specified reader or buffer.
         * @function decode
         * @memberof zk.BaseCircuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {zk.BaseCircuit} BaseCircuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseCircuit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zk.BaseCircuit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.data = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("data"))
                throw $util.ProtocolError("missing required 'data'", { instance: message });
            return message;
        };

        /**
         * Decodes a BaseCircuit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof zk.BaseCircuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {zk.BaseCircuit} BaseCircuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseCircuit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseCircuit message.
         * @function verify
         * @memberof zk.BaseCircuit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseCircuit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.data))
                return "data: string expected";
            return null;
        };

        /**
         * Creates a BaseCircuit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof zk.BaseCircuit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {zk.BaseCircuit} BaseCircuit
         */
        BaseCircuit.fromObject = function fromObject(object) {
            if (object instanceof $root.zk.BaseCircuit)
                return object;
            var message = new $root.zk.BaseCircuit();
            if (object.name != null)
                message.name = String(object.name);
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };

        /**
         * Creates a plain object from a BaseCircuit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof zk.BaseCircuit
         * @static
         * @param {zk.BaseCircuit} message BaseCircuit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseCircuit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.data = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };

        /**
         * Converts this BaseCircuit to JSON.
         * @function toJSON
         * @memberof zk.BaseCircuit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseCircuit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BaseCircuit
         * @function getTypeUrl
         * @memberof zk.BaseCircuit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BaseCircuit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/zk.BaseCircuit";
        };

        return BaseCircuit;
    })();

    zk.Dependency = (function() {

        /**
         * Properties of a Dependency.
         * @memberof zk
         * @interface IDependency
         * @property {number|Long} id Dependency id
         * @property {number} kStart Dependency kStart
         * @property {number} vStart Dependency vStart
         * @property {number} size Dependency size
         */

        /**
         * Constructs a new Dependency.
         * @memberof zk
         * @classdesc Represents a Dependency.
         * @implements IDependency
         * @constructor
         * @param {zk.IDependency=} [properties] Properties to set
         */
        function Dependency(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Dependency id.
         * @member {number|Long} id
         * @memberof zk.Dependency
         * @instance
         */
        Dependency.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Dependency kStart.
         * @member {number} kStart
         * @memberof zk.Dependency
         * @instance
         */
        Dependency.prototype.kStart = 0;

        /**
         * Dependency vStart.
         * @member {number} vStart
         * @memberof zk.Dependency
         * @instance
         */
        Dependency.prototype.vStart = 0;

        /**
         * Dependency size.
         * @member {number} size
         * @memberof zk.Dependency
         * @instance
         */
        Dependency.prototype.size = 0;

        /**
         * Creates a new Dependency instance using the specified properties.
         * @function create
         * @memberof zk.Dependency
         * @static
         * @param {zk.IDependency=} [properties] Properties to set
         * @returns {zk.Dependency} Dependency instance
         */
        Dependency.create = function create(properties) {
            return new Dependency(properties);
        };

        /**
         * Encodes the specified Dependency message. Does not implicitly {@link zk.Dependency.verify|verify} messages.
         * @function encode
         * @memberof zk.Dependency
         * @static
         * @param {zk.IDependency} message Dependency message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dependency.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.kStart);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.vStart);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.size);
            return writer;
        };

        /**
         * Encodes the specified Dependency message, length delimited. Does not implicitly {@link zk.Dependency.verify|verify} messages.
         * @function encodeDelimited
         * @memberof zk.Dependency
         * @static
         * @param {zk.IDependency} message Dependency message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dependency.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Dependency message from the specified reader or buffer.
         * @function decode
         * @memberof zk.Dependency
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {zk.Dependency} Dependency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dependency.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zk.Dependency();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.kStart = reader.uint32();
                        break;
                    }
                case 3: {
                        message.vStart = reader.uint32();
                        break;
                    }
                case 4: {
                        message.size = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("kStart"))
                throw $util.ProtocolError("missing required 'kStart'", { instance: message });
            if (!message.hasOwnProperty("vStart"))
                throw $util.ProtocolError("missing required 'vStart'", { instance: message });
            if (!message.hasOwnProperty("size"))
                throw $util.ProtocolError("missing required 'size'", { instance: message });
            return message;
        };

        /**
         * Decodes a Dependency message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof zk.Dependency
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {zk.Dependency} Dependency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dependency.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Dependency message.
         * @function verify
         * @memberof zk.Dependency
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Dependency.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
            if (!$util.isInteger(message.kStart))
                return "kStart: integer expected";
            if (!$util.isInteger(message.vStart))
                return "vStart: integer expected";
            if (!$util.isInteger(message.size))
                return "size: integer expected";
            return null;
        };

        /**
         * Creates a Dependency message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof zk.Dependency
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {zk.Dependency} Dependency
         */
        Dependency.fromObject = function fromObject(object) {
            if (object instanceof $root.zk.Dependency)
                return object;
            var message = new $root.zk.Dependency();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.kStart != null)
                message.kStart = object.kStart >>> 0;
            if (object.vStart != null)
                message.vStart = object.vStart >>> 0;
            if (object.size != null)
                message.size = object.size >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Dependency message. Also converts values to other types if specified.
         * @function toObject
         * @memberof zk.Dependency
         * @static
         * @param {zk.Dependency} message Dependency
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Dependency.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.kStart = 0;
                object.vStart = 0;
                object.size = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.kStart != null && message.hasOwnProperty("kStart"))
                object.kStart = message.kStart;
            if (message.vStart != null && message.hasOwnProperty("vStart"))
                object.vStart = message.vStart;
            if (message.size != null && message.hasOwnProperty("size"))
                object.size = message.size;
            return object;
        };

        /**
         * Converts this Dependency to JSON.
         * @function toJSON
         * @memberof zk.Dependency
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Dependency.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Dependency
         * @function getTypeUrl
         * @memberof zk.Dependency
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Dependency.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/zk.Dependency";
        };

        return Dependency;
    })();

    zk.Dag = (function() {

        /**
         * Properties of a Dag.
         * @memberof zk
         * @interface IDag
         * @property {number} id Dag id
         * @property {string} name Dag name
         * @property {boolean} out Dag out
         * @property {Array.<zk.IDependency>|null} [deps] Dag deps
         */

        /**
         * Constructs a new Dag.
         * @memberof zk
         * @classdesc Represents a Dag.
         * @implements IDag
         * @constructor
         * @param {zk.IDag=} [properties] Properties to set
         */
        function Dag(properties) {
            this.deps = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Dag id.
         * @member {number} id
         * @memberof zk.Dag
         * @instance
         */
        Dag.prototype.id = 0;

        /**
         * Dag name.
         * @member {string} name
         * @memberof zk.Dag
         * @instance
         */
        Dag.prototype.name = "";

        /**
         * Dag out.
         * @member {boolean} out
         * @memberof zk.Dag
         * @instance
         */
        Dag.prototype.out = false;

        /**
         * Dag deps.
         * @member {Array.<zk.IDependency>} deps
         * @memberof zk.Dag
         * @instance
         */
        Dag.prototype.deps = $util.emptyArray;

        /**
         * Creates a new Dag instance using the specified properties.
         * @function create
         * @memberof zk.Dag
         * @static
         * @param {zk.IDag=} [properties] Properties to set
         * @returns {zk.Dag} Dag instance
         */
        Dag.create = function create(properties) {
            return new Dag(properties);
        };

        /**
         * Encodes the specified Dag message. Does not implicitly {@link zk.Dag.verify|verify} messages.
         * @function encode
         * @memberof zk.Dag
         * @static
         * @param {zk.IDag} message Dag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dag.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.out);
            if (message.deps != null && message.deps.length)
                for (var i = 0; i < message.deps.length; ++i)
                    $root.zk.Dependency.encode(message.deps[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Dag message, length delimited. Does not implicitly {@link zk.Dag.verify|verify} messages.
         * @function encodeDelimited
         * @memberof zk.Dag
         * @static
         * @param {zk.IDag} message Dag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dag.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Dag message from the specified reader or buffer.
         * @function decode
         * @memberof zk.Dag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {zk.Dag} Dag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dag.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zk.Dag();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.out = reader.bool();
                        break;
                    }
                case 4: {
                        if (!(message.deps && message.deps.length))
                            message.deps = [];
                        message.deps.push($root.zk.Dependency.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("out"))
                throw $util.ProtocolError("missing required 'out'", { instance: message });
            return message;
        };

        /**
         * Decodes a Dag message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof zk.Dag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {zk.Dag} Dag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dag.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Dag message.
         * @function verify
         * @memberof zk.Dag
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Dag.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (typeof message.out !== "boolean")
                return "out: boolean expected";
            if (message.deps != null && message.hasOwnProperty("deps")) {
                if (!Array.isArray(message.deps))
                    return "deps: array expected";
                for (var i = 0; i < message.deps.length; ++i) {
                    var error = $root.zk.Dependency.verify(message.deps[i]);
                    if (error)
                        return "deps." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Dag message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof zk.Dag
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {zk.Dag} Dag
         */
        Dag.fromObject = function fromObject(object) {
            if (object instanceof $root.zk.Dag)
                return object;
            var message = new $root.zk.Dag();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.out != null)
                message.out = Boolean(object.out);
            if (object.deps) {
                if (!Array.isArray(object.deps))
                    throw TypeError(".zk.Dag.deps: array expected");
                message.deps = [];
                for (var i = 0; i < object.deps.length; ++i) {
                    if (typeof object.deps[i] !== "object")
                        throw TypeError(".zk.Dag.deps: object expected");
                    message.deps[i] = $root.zk.Dependency.fromObject(object.deps[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Dag message. Also converts values to other types if specified.
         * @function toObject
         * @memberof zk.Dag
         * @static
         * @param {zk.Dag} message Dag
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Dag.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.deps = [];
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.out = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.out != null && message.hasOwnProperty("out"))
                object.out = message.out;
            if (message.deps && message.deps.length) {
                object.deps = [];
                for (var j = 0; j < message.deps.length; ++j)
                    object.deps[j] = $root.zk.Dependency.toObject(message.deps[j], options);
            }
            return object;
        };

        /**
         * Converts this Dag to JSON.
         * @function toJSON
         * @memberof zk.Dag
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Dag.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Dag
         * @function getTypeUrl
         * @memberof zk.Dag
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Dag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/zk.Dag";
        };

        return Dag;
    })();

    zk.Waterfall = (function() {

        /**
         * Properties of a Waterfall.
         * @memberof zk
         * @interface IWaterfall
         * @property {Uint8Array} seed Waterfall seed
         * @property {zk.IData} input Waterfall input
         * @property {Array.<zk.IBaseCircuit>|null} [circuits] Waterfall circuits
         * @property {Array.<zk.IDag>|null} [dags] Waterfall dags
         */

        /**
         * Constructs a new Waterfall.
         * @memberof zk
         * @classdesc Represents a Waterfall.
         * @implements IWaterfall
         * @constructor
         * @param {zk.IWaterfall=} [properties] Properties to set
         */
        function Waterfall(properties) {
            this.circuits = [];
            this.dags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Waterfall seed.
         * @member {Uint8Array} seed
         * @memberof zk.Waterfall
         * @instance
         */
        Waterfall.prototype.seed = $util.newBuffer([]);

        /**
         * Waterfall input.
         * @member {zk.IData} input
         * @memberof zk.Waterfall
         * @instance
         */
        Waterfall.prototype.input = null;

        /**
         * Waterfall circuits.
         * @member {Array.<zk.IBaseCircuit>} circuits
         * @memberof zk.Waterfall
         * @instance
         */
        Waterfall.prototype.circuits = $util.emptyArray;

        /**
         * Waterfall dags.
         * @member {Array.<zk.IDag>} dags
         * @memberof zk.Waterfall
         * @instance
         */
        Waterfall.prototype.dags = $util.emptyArray;

        /**
         * Creates a new Waterfall instance using the specified properties.
         * @function create
         * @memberof zk.Waterfall
         * @static
         * @param {zk.IWaterfall=} [properties] Properties to set
         * @returns {zk.Waterfall} Waterfall instance
         */
        Waterfall.create = function create(properties) {
            return new Waterfall(properties);
        };

        /**
         * Encodes the specified Waterfall message. Does not implicitly {@link zk.Waterfall.verify|verify} messages.
         * @function encode
         * @memberof zk.Waterfall
         * @static
         * @param {zk.IWaterfall} message Waterfall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Waterfall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.seed);
            $root.zk.Data.encode(message.input, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.circuits != null && message.circuits.length)
                for (var i = 0; i < message.circuits.length; ++i)
                    $root.zk.BaseCircuit.encode(message.circuits[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.dags != null && message.dags.length)
                for (var i = 0; i < message.dags.length; ++i)
                    $root.zk.Dag.encode(message.dags[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Waterfall message, length delimited. Does not implicitly {@link zk.Waterfall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof zk.Waterfall
         * @static
         * @param {zk.IWaterfall} message Waterfall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Waterfall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Waterfall message from the specified reader or buffer.
         * @function decode
         * @memberof zk.Waterfall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {zk.Waterfall} Waterfall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Waterfall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zk.Waterfall();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.seed = reader.bytes();
                        break;
                    }
                case 2: {
                        message.input = $root.zk.Data.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        if (!(message.circuits && message.circuits.length))
                            message.circuits = [];
                        message.circuits.push($root.zk.BaseCircuit.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.dags && message.dags.length))
                            message.dags = [];
                        message.dags.push($root.zk.Dag.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seed"))
                throw $util.ProtocolError("missing required 'seed'", { instance: message });
            if (!message.hasOwnProperty("input"))
                throw $util.ProtocolError("missing required 'input'", { instance: message });
            return message;
        };

        /**
         * Decodes a Waterfall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof zk.Waterfall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {zk.Waterfall} Waterfall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Waterfall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Waterfall message.
         * @function verify
         * @memberof zk.Waterfall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Waterfall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                return "seed: buffer expected";
            {
                var error = $root.zk.Data.verify(message.input);
                if (error)
                    return "input." + error;
            }
            if (message.circuits != null && message.hasOwnProperty("circuits")) {
                if (!Array.isArray(message.circuits))
                    return "circuits: array expected";
                for (var i = 0; i < message.circuits.length; ++i) {
                    var error = $root.zk.BaseCircuit.verify(message.circuits[i]);
                    if (error)
                        return "circuits." + error;
                }
            }
            if (message.dags != null && message.hasOwnProperty("dags")) {
                if (!Array.isArray(message.dags))
                    return "dags: array expected";
                for (var i = 0; i < message.dags.length; ++i) {
                    var error = $root.zk.Dag.verify(message.dags[i]);
                    if (error)
                        return "dags." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Waterfall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof zk.Waterfall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {zk.Waterfall} Waterfall
         */
        Waterfall.fromObject = function fromObject(object) {
            if (object instanceof $root.zk.Waterfall)
                return object;
            var message = new $root.zk.Waterfall();
            if (object.seed != null)
                if (typeof object.seed === "string")
                    $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                else if (object.seed.length >= 0)
                    message.seed = object.seed;
            if (object.input != null) {
                if (typeof object.input !== "object")
                    throw TypeError(".zk.Waterfall.input: object expected");
                message.input = $root.zk.Data.fromObject(object.input);
            }
            if (object.circuits) {
                if (!Array.isArray(object.circuits))
                    throw TypeError(".zk.Waterfall.circuits: array expected");
                message.circuits = [];
                for (var i = 0; i < object.circuits.length; ++i) {
                    if (typeof object.circuits[i] !== "object")
                        throw TypeError(".zk.Waterfall.circuits: object expected");
                    message.circuits[i] = $root.zk.BaseCircuit.fromObject(object.circuits[i]);
                }
            }
            if (object.dags) {
                if (!Array.isArray(object.dags))
                    throw TypeError(".zk.Waterfall.dags: array expected");
                message.dags = [];
                for (var i = 0; i < object.dags.length; ++i) {
                    if (typeof object.dags[i] !== "object")
                        throw TypeError(".zk.Waterfall.dags: object expected");
                    message.dags[i] = $root.zk.Dag.fromObject(object.dags[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Waterfall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof zk.Waterfall
         * @static
         * @param {zk.Waterfall} message Waterfall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Waterfall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.circuits = [];
                object.dags = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.seed = "";
                else {
                    object.seed = [];
                    if (options.bytes !== Array)
                        object.seed = $util.newBuffer(object.seed);
                }
                object.input = null;
            }
            if (message.seed != null && message.hasOwnProperty("seed"))
                object.seed = options.bytes === String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === Array ? Array.prototype.slice.call(message.seed) : message.seed;
            if (message.input != null && message.hasOwnProperty("input"))
                object.input = $root.zk.Data.toObject(message.input, options);
            if (message.circuits && message.circuits.length) {
                object.circuits = [];
                for (var j = 0; j < message.circuits.length; ++j)
                    object.circuits[j] = $root.zk.BaseCircuit.toObject(message.circuits[j], options);
            }
            if (message.dags && message.dags.length) {
                object.dags = [];
                for (var j = 0; j < message.dags.length; ++j)
                    object.dags[j] = $root.zk.Dag.toObject(message.dags[j], options);
            }
            return object;
        };

        /**
         * Converts this Waterfall to JSON.
         * @function toJSON
         * @memberof zk.Waterfall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Waterfall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Waterfall
         * @function getTypeUrl
         * @memberof zk.Waterfall
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Waterfall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/zk.Waterfall";
        };

        return Waterfall;
    })();

    zk.WaterfallProverOut = (function() {

        /**
         * Properties of a WaterfallProverOut.
         * @memberof zk
         * @interface IWaterfallProverOut
         * @property {number} id WaterfallProverOut id
         * @property {Array.<zk.ICommit>|null} [commits] WaterfallProverOut commits
         */

        /**
         * Constructs a new WaterfallProverOut.
         * @memberof zk
         * @classdesc Represents a WaterfallProverOut.
         * @implements IWaterfallProverOut
         * @constructor
         * @param {zk.IWaterfallProverOut=} [properties] Properties to set
         */
        function WaterfallProverOut(properties) {
            this.commits = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WaterfallProverOut id.
         * @member {number} id
         * @memberof zk.WaterfallProverOut
         * @instance
         */
        WaterfallProverOut.prototype.id = 0;

        /**
         * WaterfallProverOut commits.
         * @member {Array.<zk.ICommit>} commits
         * @memberof zk.WaterfallProverOut
         * @instance
         */
        WaterfallProverOut.prototype.commits = $util.emptyArray;

        /**
         * Creates a new WaterfallProverOut instance using the specified properties.
         * @function create
         * @memberof zk.WaterfallProverOut
         * @static
         * @param {zk.IWaterfallProverOut=} [properties] Properties to set
         * @returns {zk.WaterfallProverOut} WaterfallProverOut instance
         */
        WaterfallProverOut.create = function create(properties) {
            return new WaterfallProverOut(properties);
        };

        /**
         * Encodes the specified WaterfallProverOut message. Does not implicitly {@link zk.WaterfallProverOut.verify|verify} messages.
         * @function encode
         * @memberof zk.WaterfallProverOut
         * @static
         * @param {zk.IWaterfallProverOut} message WaterfallProverOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WaterfallProverOut.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.commits != null && message.commits.length)
                for (var i = 0; i < message.commits.length; ++i)
                    $root.zk.Commit.encode(message.commits[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WaterfallProverOut message, length delimited. Does not implicitly {@link zk.WaterfallProverOut.verify|verify} messages.
         * @function encodeDelimited
         * @memberof zk.WaterfallProverOut
         * @static
         * @param {zk.IWaterfallProverOut} message WaterfallProverOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WaterfallProverOut.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WaterfallProverOut message from the specified reader or buffer.
         * @function decode
         * @memberof zk.WaterfallProverOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {zk.WaterfallProverOut} WaterfallProverOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WaterfallProverOut.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zk.WaterfallProverOut();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.commits && message.commits.length))
                            message.commits = [];
                        message.commits.push($root.zk.Commit.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a WaterfallProverOut message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof zk.WaterfallProverOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {zk.WaterfallProverOut} WaterfallProverOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WaterfallProverOut.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WaterfallProverOut message.
         * @function verify
         * @memberof zk.WaterfallProverOut
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WaterfallProverOut.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (message.commits != null && message.hasOwnProperty("commits")) {
                if (!Array.isArray(message.commits))
                    return "commits: array expected";
                for (var i = 0; i < message.commits.length; ++i) {
                    var error = $root.zk.Commit.verify(message.commits[i]);
                    if (error)
                        return "commits." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WaterfallProverOut message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof zk.WaterfallProverOut
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {zk.WaterfallProverOut} WaterfallProverOut
         */
        WaterfallProverOut.fromObject = function fromObject(object) {
            if (object instanceof $root.zk.WaterfallProverOut)
                return object;
            var message = new $root.zk.WaterfallProverOut();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.commits) {
                if (!Array.isArray(object.commits))
                    throw TypeError(".zk.WaterfallProverOut.commits: array expected");
                message.commits = [];
                for (var i = 0; i < object.commits.length; ++i) {
                    if (typeof object.commits[i] !== "object")
                        throw TypeError(".zk.WaterfallProverOut.commits: object expected");
                    message.commits[i] = $root.zk.Commit.fromObject(object.commits[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WaterfallProverOut message. Also converts values to other types if specified.
         * @function toObject
         * @memberof zk.WaterfallProverOut
         * @static
         * @param {zk.WaterfallProverOut} message WaterfallProverOut
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WaterfallProverOut.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.commits = [];
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.commits && message.commits.length) {
                object.commits = [];
                for (var j = 0; j < message.commits.length; ++j)
                    object.commits[j] = $root.zk.Commit.toObject(message.commits[j], options);
            }
            return object;
        };

        /**
         * Converts this WaterfallProverOut to JSON.
         * @function toJSON
         * @memberof zk.WaterfallProverOut
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WaterfallProverOut.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WaterfallProverOut
         * @function getTypeUrl
         * @memberof zk.WaterfallProverOut
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WaterfallProverOut.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/zk.WaterfallProverOut";
        };

        return WaterfallProverOut;
    })();

    zk.WaterfallOutput = (function() {

        /**
         * Properties of a WaterfallOutput.
         * @memberof zk
         * @interface IWaterfallOutput
         * @property {Array.<zk.IData>|null} [d] WaterfallOutput d
         * @property {Array.<Uint8Array>|null} [u] WaterfallOutput u
         * @property {Array.<Uint8Array>|null} [v] WaterfallOutput v
         * @property {Uint8Array} sum WaterfallOutput sum
         * @property {Array.<zk.IWaterfallProverOut>|null} [outCommits] WaterfallOutput outCommits
         */

        /**
         * Constructs a new WaterfallOutput.
         * @memberof zk
         * @classdesc Represents a WaterfallOutput.
         * @implements IWaterfallOutput
         * @constructor
         * @param {zk.IWaterfallOutput=} [properties] Properties to set
         */
        function WaterfallOutput(properties) {
            this.d = [];
            this.u = [];
            this.v = [];
            this.outCommits = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WaterfallOutput d.
         * @member {Array.<zk.IData>} d
         * @memberof zk.WaterfallOutput
         * @instance
         */
        WaterfallOutput.prototype.d = $util.emptyArray;

        /**
         * WaterfallOutput u.
         * @member {Array.<Uint8Array>} u
         * @memberof zk.WaterfallOutput
         * @instance
         */
        WaterfallOutput.prototype.u = $util.emptyArray;

        /**
         * WaterfallOutput v.
         * @member {Array.<Uint8Array>} v
         * @memberof zk.WaterfallOutput
         * @instance
         */
        WaterfallOutput.prototype.v = $util.emptyArray;

        /**
         * WaterfallOutput sum.
         * @member {Uint8Array} sum
         * @memberof zk.WaterfallOutput
         * @instance
         */
        WaterfallOutput.prototype.sum = $util.newBuffer([]);

        /**
         * WaterfallOutput outCommits.
         * @member {Array.<zk.IWaterfallProverOut>} outCommits
         * @memberof zk.WaterfallOutput
         * @instance
         */
        WaterfallOutput.prototype.outCommits = $util.emptyArray;

        /**
         * Creates a new WaterfallOutput instance using the specified properties.
         * @function create
         * @memberof zk.WaterfallOutput
         * @static
         * @param {zk.IWaterfallOutput=} [properties] Properties to set
         * @returns {zk.WaterfallOutput} WaterfallOutput instance
         */
        WaterfallOutput.create = function create(properties) {
            return new WaterfallOutput(properties);
        };

        /**
         * Encodes the specified WaterfallOutput message. Does not implicitly {@link zk.WaterfallOutput.verify|verify} messages.
         * @function encode
         * @memberof zk.WaterfallOutput
         * @static
         * @param {zk.IWaterfallOutput} message WaterfallOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WaterfallOutput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.d != null && message.d.length)
                for (var i = 0; i < message.d.length; ++i)
                    $root.zk.Data.encode(message.d[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.u != null && message.u.length)
                for (var i = 0; i < message.u.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.u[i]);
            if (message.v != null && message.v.length)
                for (var i = 0; i < message.v.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.v[i]);
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.sum);
            if (message.outCommits != null && message.outCommits.length)
                for (var i = 0; i < message.outCommits.length; ++i)
                    $root.zk.WaterfallProverOut.encode(message.outCommits[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WaterfallOutput message, length delimited. Does not implicitly {@link zk.WaterfallOutput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof zk.WaterfallOutput
         * @static
         * @param {zk.IWaterfallOutput} message WaterfallOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WaterfallOutput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WaterfallOutput message from the specified reader or buffer.
         * @function decode
         * @memberof zk.WaterfallOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {zk.WaterfallOutput} WaterfallOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WaterfallOutput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zk.WaterfallOutput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.d && message.d.length))
                            message.d = [];
                        message.d.push($root.zk.Data.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.u && message.u.length))
                            message.u = [];
                        message.u.push(reader.bytes());
                        break;
                    }
                case 3: {
                        if (!(message.v && message.v.length))
                            message.v = [];
                        message.v.push(reader.bytes());
                        break;
                    }
                case 4: {
                        message.sum = reader.bytes();
                        break;
                    }
                case 5: {
                        if (!(message.outCommits && message.outCommits.length))
                            message.outCommits = [];
                        message.outCommits.push($root.zk.WaterfallProverOut.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sum"))
                throw $util.ProtocolError("missing required 'sum'", { instance: message });
            return message;
        };

        /**
         * Decodes a WaterfallOutput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof zk.WaterfallOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {zk.WaterfallOutput} WaterfallOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WaterfallOutput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WaterfallOutput message.
         * @function verify
         * @memberof zk.WaterfallOutput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WaterfallOutput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.d != null && message.hasOwnProperty("d")) {
                if (!Array.isArray(message.d))
                    return "d: array expected";
                for (var i = 0; i < message.d.length; ++i) {
                    var error = $root.zk.Data.verify(message.d[i]);
                    if (error)
                        return "d." + error;
                }
            }
            if (message.u != null && message.hasOwnProperty("u")) {
                if (!Array.isArray(message.u))
                    return "u: array expected";
                for (var i = 0; i < message.u.length; ++i)
                    if (!(message.u[i] && typeof message.u[i].length === "number" || $util.isString(message.u[i])))
                        return "u: buffer[] expected";
            }
            if (message.v != null && message.hasOwnProperty("v")) {
                if (!Array.isArray(message.v))
                    return "v: array expected";
                for (var i = 0; i < message.v.length; ++i)
                    if (!(message.v[i] && typeof message.v[i].length === "number" || $util.isString(message.v[i])))
                        return "v: buffer[] expected";
            }
            if (!(message.sum && typeof message.sum.length === "number" || $util.isString(message.sum)))
                return "sum: buffer expected";
            if (message.outCommits != null && message.hasOwnProperty("outCommits")) {
                if (!Array.isArray(message.outCommits))
                    return "outCommits: array expected";
                for (var i = 0; i < message.outCommits.length; ++i) {
                    var error = $root.zk.WaterfallProverOut.verify(message.outCommits[i]);
                    if (error)
                        return "outCommits." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WaterfallOutput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof zk.WaterfallOutput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {zk.WaterfallOutput} WaterfallOutput
         */
        WaterfallOutput.fromObject = function fromObject(object) {
            if (object instanceof $root.zk.WaterfallOutput)
                return object;
            var message = new $root.zk.WaterfallOutput();
            if (object.d) {
                if (!Array.isArray(object.d))
                    throw TypeError(".zk.WaterfallOutput.d: array expected");
                message.d = [];
                for (var i = 0; i < object.d.length; ++i) {
                    if (typeof object.d[i] !== "object")
                        throw TypeError(".zk.WaterfallOutput.d: object expected");
                    message.d[i] = $root.zk.Data.fromObject(object.d[i]);
                }
            }
            if (object.u) {
                if (!Array.isArray(object.u))
                    throw TypeError(".zk.WaterfallOutput.u: array expected");
                message.u = [];
                for (var i = 0; i < object.u.length; ++i)
                    if (typeof object.u[i] === "string")
                        $util.base64.decode(object.u[i], message.u[i] = $util.newBuffer($util.base64.length(object.u[i])), 0);
                    else if (object.u[i].length >= 0)
                        message.u[i] = object.u[i];
            }
            if (object.v) {
                if (!Array.isArray(object.v))
                    throw TypeError(".zk.WaterfallOutput.v: array expected");
                message.v = [];
                for (var i = 0; i < object.v.length; ++i)
                    if (typeof object.v[i] === "string")
                        $util.base64.decode(object.v[i], message.v[i] = $util.newBuffer($util.base64.length(object.v[i])), 0);
                    else if (object.v[i].length >= 0)
                        message.v[i] = object.v[i];
            }
            if (object.sum != null)
                if (typeof object.sum === "string")
                    $util.base64.decode(object.sum, message.sum = $util.newBuffer($util.base64.length(object.sum)), 0);
                else if (object.sum.length >= 0)
                    message.sum = object.sum;
            if (object.outCommits) {
                if (!Array.isArray(object.outCommits))
                    throw TypeError(".zk.WaterfallOutput.outCommits: array expected");
                message.outCommits = [];
                for (var i = 0; i < object.outCommits.length; ++i) {
                    if (typeof object.outCommits[i] !== "object")
                        throw TypeError(".zk.WaterfallOutput.outCommits: object expected");
                    message.outCommits[i] = $root.zk.WaterfallProverOut.fromObject(object.outCommits[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WaterfallOutput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof zk.WaterfallOutput
         * @static
         * @param {zk.WaterfallOutput} message WaterfallOutput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WaterfallOutput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.d = [];
                object.u = [];
                object.v = [];
                object.outCommits = [];
            }
            if (options.defaults)
                if (options.bytes === String)
                    object.sum = "";
                else {
                    object.sum = [];
                    if (options.bytes !== Array)
                        object.sum = $util.newBuffer(object.sum);
                }
            if (message.d && message.d.length) {
                object.d = [];
                for (var j = 0; j < message.d.length; ++j)
                    object.d[j] = $root.zk.Data.toObject(message.d[j], options);
            }
            if (message.u && message.u.length) {
                object.u = [];
                for (var j = 0; j < message.u.length; ++j)
                    object.u[j] = options.bytes === String ? $util.base64.encode(message.u[j], 0, message.u[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.u[j]) : message.u[j];
            }
            if (message.v && message.v.length) {
                object.v = [];
                for (var j = 0; j < message.v.length; ++j)
                    object.v[j] = options.bytes === String ? $util.base64.encode(message.v[j], 0, message.v[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.v[j]) : message.v[j];
            }
            if (message.sum != null && message.hasOwnProperty("sum"))
                object.sum = options.bytes === String ? $util.base64.encode(message.sum, 0, message.sum.length) : options.bytes === Array ? Array.prototype.slice.call(message.sum) : message.sum;
            if (message.outCommits && message.outCommits.length) {
                object.outCommits = [];
                for (var j = 0; j < message.outCommits.length; ++j)
                    object.outCommits[j] = $root.zk.WaterfallProverOut.toObject(message.outCommits[j], options);
            }
            return object;
        };

        /**
         * Converts this WaterfallOutput to JSON.
         * @function toJSON
         * @memberof zk.WaterfallOutput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WaterfallOutput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WaterfallOutput
         * @function getTypeUrl
         * @memberof zk.WaterfallOutput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WaterfallOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/zk.WaterfallOutput";
        };

        return WaterfallOutput;
    })();

    return zk;
})();

module.exports = $root;
