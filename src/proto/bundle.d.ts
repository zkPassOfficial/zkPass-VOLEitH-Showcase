import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace garble. */
export namespace garble {

    /** Properties of an InputLabels. */
    interface IInputLabels {

        /** InputLabels id */
        id: number;

        /** InputLabels labels */
        labels?: (core.IBlock[]|null);
    }

    /** Represents an InputLabels. */
    class InputLabels implements IInputLabels {

        /**
         * Constructs a new InputLabels.
         * @param [properties] Properties to set
         */
        constructor(properties?: garble.IInputLabels);

        /** InputLabels id. */
        public id: number;

        /** InputLabels labels. */
        public labels: core.IBlock[];

        /**
         * Creates a new InputLabels instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InputLabels instance
         */
        public static create(properties?: garble.IInputLabels): garble.InputLabels;

        /**
         * Encodes the specified InputLabels message. Does not implicitly {@link garble.InputLabels.verify|verify} messages.
         * @param message InputLabels message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: garble.IInputLabels, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InputLabels message, length delimited. Does not implicitly {@link garble.InputLabels.verify|verify} messages.
         * @param message InputLabels message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: garble.IInputLabels, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InputLabels message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InputLabels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): garble.InputLabels;

        /**
         * Decodes an InputLabels message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InputLabels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): garble.InputLabels;

        /**
         * Verifies an InputLabels message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InputLabels message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InputLabels
         */
        public static fromObject(object: { [k: string]: any }): garble.InputLabels;

        /**
         * Creates a plain object from an InputLabels message. Also converts values to other types if specified.
         * @param message InputLabels
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: garble.InputLabels, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InputLabels to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InputLabels
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Input. */
    interface IInput {

        /** Input inputLabels */
        inputLabels?: (garble.IInputLabels[]|null);
    }

    /** Represents an Input. */
    class Input implements IInput {

        /**
         * Constructs a new Input.
         * @param [properties] Properties to set
         */
        constructor(properties?: garble.IInput);

        /** Input inputLabels. */
        public inputLabels: garble.IInputLabels[];

        /**
         * Creates a new Input instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Input instance
         */
        public static create(properties?: garble.IInput): garble.Input;

        /**
         * Encodes the specified Input message. Does not implicitly {@link garble.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: garble.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link garble.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: garble.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): garble.Input;

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): garble.Input;

        /**
         * Verifies an Input message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Input
         */
        public static fromObject(object: { [k: string]: any }): garble.Input;

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @param message Input
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: garble.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Input to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Input
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OutputEncoding. */
    interface IOutputEncoding {

        /** OutputEncoding id */
        id: number;

        /** OutputEncoding encoding */
        encoding?: (boolean[]|null);
    }

    /** Represents an OutputEncoding. */
    class OutputEncoding implements IOutputEncoding {

        /**
         * Constructs a new OutputEncoding.
         * @param [properties] Properties to set
         */
        constructor(properties?: garble.IOutputEncoding);

        /** OutputEncoding id. */
        public id: number;

        /** OutputEncoding encoding. */
        public encoding: boolean[];

        /**
         * Creates a new OutputEncoding instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutputEncoding instance
         */
        public static create(properties?: garble.IOutputEncoding): garble.OutputEncoding;

        /**
         * Encodes the specified OutputEncoding message. Does not implicitly {@link garble.OutputEncoding.verify|verify} messages.
         * @param message OutputEncoding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: garble.IOutputEncoding, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutputEncoding message, length delimited. Does not implicitly {@link garble.OutputEncoding.verify|verify} messages.
         * @param message OutputEncoding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: garble.IOutputEncoding, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutputEncoding message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutputEncoding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): garble.OutputEncoding;

        /**
         * Decodes an OutputEncoding message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutputEncoding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): garble.OutputEncoding;

        /**
         * Verifies an OutputEncoding message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutputEncoding message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutputEncoding
         */
        public static fromObject(object: { [k: string]: any }): garble.OutputEncoding;

        /**
         * Creates a plain object from an OutputEncoding message. Also converts values to other types if specified.
         * @param message OutputEncoding
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: garble.OutputEncoding, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutputEncoding to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OutputEncoding
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GarbledCircuit. */
    interface IGarbledCircuit {

        /** GarbledCircuit id */
        id: string;

        /** GarbledCircuit inputLabels */
        inputLabels?: (garble.IInputLabels[]|null);

        /** GarbledCircuit encryptedGates */
        encryptedGates?: (core.IBlock[]|null);

        /** GarbledCircuit encoding */
        encoding?: (garble.IOutputEncoding[]|null);
    }

    /** Represents a GarbledCircuit. */
    class GarbledCircuit implements IGarbledCircuit {

        /**
         * Constructs a new GarbledCircuit.
         * @param [properties] Properties to set
         */
        constructor(properties?: garble.IGarbledCircuit);

        /** GarbledCircuit id. */
        public id: string;

        /** GarbledCircuit inputLabels. */
        public inputLabels: garble.IInputLabels[];

        /** GarbledCircuit encryptedGates. */
        public encryptedGates: core.IBlock[];

        /** GarbledCircuit encoding. */
        public encoding: garble.IOutputEncoding[];

        /**
         * Creates a new GarbledCircuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GarbledCircuit instance
         */
        public static create(properties?: garble.IGarbledCircuit): garble.GarbledCircuit;

        /**
         * Encodes the specified GarbledCircuit message. Does not implicitly {@link garble.GarbledCircuit.verify|verify} messages.
         * @param message GarbledCircuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: garble.IGarbledCircuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GarbledCircuit message, length delimited. Does not implicitly {@link garble.GarbledCircuit.verify|verify} messages.
         * @param message GarbledCircuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: garble.IGarbledCircuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GarbledCircuit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GarbledCircuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): garble.GarbledCircuit;

        /**
         * Decodes a GarbledCircuit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GarbledCircuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): garble.GarbledCircuit;

        /**
         * Verifies a GarbledCircuit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GarbledCircuit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GarbledCircuit
         */
        public static fromObject(object: { [k: string]: any }): garble.GarbledCircuit;

        /**
         * Creates a plain object from a GarbledCircuit message. Also converts values to other types if specified.
         * @param message GarbledCircuit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: garble.GarbledCircuit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GarbledCircuit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GarbledCircuit
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message garbledCircuit */
        garbledCircuit?: (garble.IGarbledCircuit|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: garble.IMessage);

        /** Message garbledCircuit. */
        public garbledCircuit?: (garble.IGarbledCircuit|null);

        /** Message msg. */
        public msg?: "garbledCircuit";

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: garble.IMessage): garble.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link garble.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: garble.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link garble.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: garble.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): garble.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): garble.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): garble.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: garble.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OutputLabels. */
    interface IOutputLabels {

        /** OutputLabels id */
        id: number;

        /** OutputLabels labels */
        labels?: (core.IBlock[]|null);
    }

    /** Represents an OutputLabels. */
    class OutputLabels implements IOutputLabels {

        /**
         * Constructs a new OutputLabels.
         * @param [properties] Properties to set
         */
        constructor(properties?: garble.IOutputLabels);

        /** OutputLabels id. */
        public id: number;

        /** OutputLabels labels. */
        public labels: core.IBlock[];

        /**
         * Creates a new OutputLabels instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutputLabels instance
         */
        public static create(properties?: garble.IOutputLabels): garble.OutputLabels;

        /**
         * Encodes the specified OutputLabels message. Does not implicitly {@link garble.OutputLabels.verify|verify} messages.
         * @param message OutputLabels message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: garble.IOutputLabels, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutputLabels message, length delimited. Does not implicitly {@link garble.OutputLabels.verify|verify} messages.
         * @param message OutputLabels message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: garble.IOutputLabels, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutputLabels message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutputLabels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): garble.OutputLabels;

        /**
         * Decodes an OutputLabels message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutputLabels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): garble.OutputLabels;

        /**
         * Verifies an OutputLabels message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutputLabels message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutputLabels
         */
        public static fromObject(object: { [k: string]: any }): garble.OutputLabels;

        /**
         * Creates a plain object from an OutputLabels message. Also converts values to other types if specified.
         * @param message OutputLabels
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: garble.OutputLabels, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutputLabels to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OutputLabels
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Output. */
    interface IOutput {

        /** Output outputLabels */
        outputLabels?: (garble.IOutputLabels[]|null);

        /** Output encoding */
        encoding?: (garble.IOutputEncoding[]|null);
    }

    /** Represents an Output. */
    class Output implements IOutput {

        /**
         * Constructs a new Output.
         * @param [properties] Properties to set
         */
        constructor(properties?: garble.IOutput);

        /** Output outputLabels. */
        public outputLabels: garble.IOutputLabels[];

        /** Output encoding. */
        public encoding: garble.IOutputEncoding[];

        /**
         * Creates a new Output instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Output instance
         */
        public static create(properties?: garble.IOutput): garble.Output;

        /**
         * Encodes the specified Output message. Does not implicitly {@link garble.Output.verify|verify} messages.
         * @param message Output message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: garble.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Output message, length delimited. Does not implicitly {@link garble.Output.verify|verify} messages.
         * @param message Output message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: garble.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): garble.Output;

        /**
         * Decodes an Output message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): garble.Output;

        /**
         * Verifies an Output message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Output
         */
        public static fromObject(object: { [k: string]: any }): garble.Output;

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @param message Output
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: garble.Output, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Output to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Output
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EncryptedGates. */
    interface IEncryptedGates {

        /** EncryptedGates encryptedGates */
        encryptedGates?: (core.IBlock[]|null);
    }

    /** Represents an EncryptedGates. */
    class EncryptedGates implements IEncryptedGates {

        /**
         * Constructs a new EncryptedGates.
         * @param [properties] Properties to set
         */
        constructor(properties?: garble.IEncryptedGates);

        /** EncryptedGates encryptedGates. */
        public encryptedGates: core.IBlock[];

        /**
         * Creates a new EncryptedGates instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncryptedGates instance
         */
        public static create(properties?: garble.IEncryptedGates): garble.EncryptedGates;

        /**
         * Encodes the specified EncryptedGates message. Does not implicitly {@link garble.EncryptedGates.verify|verify} messages.
         * @param message EncryptedGates message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: garble.IEncryptedGates, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncryptedGates message, length delimited. Does not implicitly {@link garble.EncryptedGates.verify|verify} messages.
         * @param message EncryptedGates message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: garble.IEncryptedGates, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncryptedGates message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncryptedGates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): garble.EncryptedGates;

        /**
         * Decodes an EncryptedGates message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncryptedGates
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): garble.EncryptedGates;

        /**
         * Verifies an EncryptedGates message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncryptedGates message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncryptedGates
         */
        public static fromObject(object: { [k: string]: any }): garble.EncryptedGates;

        /**
         * Creates a plain object from an EncryptedGates message. Also converts values to other types if specified.
         * @param message EncryptedGates
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: garble.EncryptedGates, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncryptedGates to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EncryptedGates
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace core. */
export namespace core {

    /** Properties of a Block. */
    interface IBlock {

        /** Block low */
        low: (number|Long);

        /** Block high */
        high: (number|Long);
    }

    /** Represents a Block. */
    class Block implements IBlock {

        /**
         * Constructs a new Block.
         * @param [properties] Properties to set
         */
        constructor(properties?: core.IBlock);

        /** Block low. */
        public low: (number|Long);

        /** Block high. */
        public high: (number|Long);

        /**
         * Creates a new Block instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Block instance
         */
        public static create(properties?: core.IBlock): core.Block;

        /**
         * Encodes the specified Block message. Does not implicitly {@link core.Block.verify|verify} messages.
         * @param message Block message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: core.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Block message, length delimited. Does not implicitly {@link core.Block.verify|verify} messages.
         * @param message Block message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: core.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Block message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): core.Block;

        /**
         * Decodes a Block message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): core.Block;

        /**
         * Verifies a Block message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Block message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Block
         */
        public static fromObject(object: { [k: string]: any }): core.Block;

        /**
         * Creates a plain object from a Block message. Also converts values to other types if specified.
         * @param message Block
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: core.Block, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Block to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Block
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BlockPair. */
    interface IBlockPair {

        /** BlockPair low */
        low: core.IBlock;

        /** BlockPair high */
        high: core.IBlock;
    }

    /** Represents a BlockPair. */
    class BlockPair implements IBlockPair {

        /**
         * Constructs a new BlockPair.
         * @param [properties] Properties to set
         */
        constructor(properties?: core.IBlockPair);

        /** BlockPair low. */
        public low: core.IBlock;

        /** BlockPair high. */
        public high: core.IBlock;

        /**
         * Creates a new BlockPair instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockPair instance
         */
        public static create(properties?: core.IBlockPair): core.BlockPair;

        /**
         * Encodes the specified BlockPair message. Does not implicitly {@link core.BlockPair.verify|verify} messages.
         * @param message BlockPair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: core.IBlockPair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockPair message, length delimited. Does not implicitly {@link core.BlockPair.verify|verify} messages.
         * @param message BlockPair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: core.IBlockPair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockPair message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): core.BlockPair;

        /**
         * Decodes a BlockPair message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): core.BlockPair;

        /**
         * Verifies a BlockPair message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockPair message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockPair
         */
        public static fromObject(object: { [k: string]: any }): core.BlockPair;

        /**
         * Creates a plain object from a BlockPair message. Also converts values to other types if specified.
         * @param message BlockPair
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: core.BlockPair, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockPair to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BlockPair
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RistrettoPoint. */
    interface IRistrettoPoint {

        /** RistrettoPoint point */
        point: Uint8Array;
    }

    /** Represents a RistrettoPoint. */
    class RistrettoPoint implements IRistrettoPoint {

        /**
         * Constructs a new RistrettoPoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: core.IRistrettoPoint);

        /** RistrettoPoint point. */
        public point: Uint8Array;

        /**
         * Creates a new RistrettoPoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RistrettoPoint instance
         */
        public static create(properties?: core.IRistrettoPoint): core.RistrettoPoint;

        /**
         * Encodes the specified RistrettoPoint message. Does not implicitly {@link core.RistrettoPoint.verify|verify} messages.
         * @param message RistrettoPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: core.IRistrettoPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RistrettoPoint message, length delimited. Does not implicitly {@link core.RistrettoPoint.verify|verify} messages.
         * @param message RistrettoPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: core.IRistrettoPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RistrettoPoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RistrettoPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): core.RistrettoPoint;

        /**
         * Decodes a RistrettoPoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RistrettoPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): core.RistrettoPoint;

        /**
         * Verifies a RistrettoPoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RistrettoPoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RistrettoPoint
         */
        public static fromObject(object: { [k: string]: any }): core.RistrettoPoint;

        /**
         * Creates a plain object from a RistrettoPoint message. Also converts values to other types if specified.
         * @param message RistrettoPoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: core.RistrettoPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RistrettoPoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RistrettoPoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace circuits. */
export namespace circuits {

    /** Properties of a Gate. */
    interface IGate {

        /** Gate id */
        id: number;

        /** Gate xref */
        xref: number;

        /** Gate yref */
        yref: number;

        /** Gate zref */
        zref: number;

        /** Gate gateType */
        gateType: circuits.Gate.GateType;
    }

    /** Represents a Gate. */
    class Gate implements IGate {

        /**
         * Constructs a new Gate.
         * @param [properties] Properties to set
         */
        constructor(properties?: circuits.IGate);

        /** Gate id. */
        public id: number;

        /** Gate xref. */
        public xref: number;

        /** Gate yref. */
        public yref: number;

        /** Gate zref. */
        public zref: number;

        /** Gate gateType. */
        public gateType: circuits.Gate.GateType;

        /**
         * Creates a new Gate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Gate instance
         */
        public static create(properties?: circuits.IGate): circuits.Gate;

        /**
         * Encodes the specified Gate message. Does not implicitly {@link circuits.Gate.verify|verify} messages.
         * @param message Gate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: circuits.IGate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Gate message, length delimited. Does not implicitly {@link circuits.Gate.verify|verify} messages.
         * @param message Gate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: circuits.IGate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Gate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Gate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): circuits.Gate;

        /**
         * Decodes a Gate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Gate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): circuits.Gate;

        /**
         * Verifies a Gate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Gate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Gate
         */
        public static fromObject(object: { [k: string]: any }): circuits.Gate;

        /**
         * Creates a plain object from a Gate message. Also converts values to other types if specified.
         * @param message Gate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: circuits.Gate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Gate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Gate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Gate {

        /** GateType enum. */
        enum GateType {
            XOR = 0,
            AND = 1,
            INV = 2
        }
    }

    /** Properties of a Group. */
    interface IGroup {

        /** Group name */
        name: string;

        /** Group desc */
        desc: string;

        /** Group valueType */
        valueType: circuits.Group.ValueType;

        /** Group wires */
        wires?: (number[]|null);
    }

    /** Represents a Group. */
    class Group implements IGroup {

        /**
         * Constructs a new Group.
         * @param [properties] Properties to set
         */
        constructor(properties?: circuits.IGroup);

        /** Group name. */
        public name: string;

        /** Group desc. */
        public desc: string;

        /** Group valueType. */
        public valueType: circuits.Group.ValueType;

        /** Group wires. */
        public wires: number[];

        /**
         * Creates a new Group instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Group instance
         */
        public static create(properties?: circuits.IGroup): circuits.Group;

        /**
         * Encodes the specified Group message. Does not implicitly {@link circuits.Group.verify|verify} messages.
         * @param message Group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: circuits.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Group message, length delimited. Does not implicitly {@link circuits.Group.verify|verify} messages.
         * @param message Group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: circuits.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Group message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): circuits.Group;

        /**
         * Decodes a Group message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): circuits.Group;

        /**
         * Verifies a Group message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Group message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Group
         */
        public static fromObject(object: { [k: string]: any }): circuits.Group;

        /**
         * Creates a plain object from a Group message. Also converts values to other types if specified.
         * @param message Group
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: circuits.Group, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Group to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Group
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Group {

        /** ValueType enum. */
        enum ValueType {
            ConstZero = 0,
            ConstOne = 1,
            Bool = 2,
            Bits = 3,
            Bytes = 4,
            U8 = 5,
            U16 = 6,
            U32 = 7,
            U64 = 8,
            U128 = 9
        }
    }

    /** Properties of a Circuit. */
    interface ICircuit {

        /** Circuit id */
        id: string;

        /** Circuit name */
        name: string;

        /** Circuit version */
        version: string;

        /** Circuit wireCount */
        wireCount: number;

        /** Circuit andCount */
        andCount: number;

        /** Circuit xorCount */
        xorCount: number;

        /** Circuit inputs */
        inputs?: (circuits.IGroup[]|null);

        /** Circuit outputs */
        outputs?: (circuits.IGroup[]|null);

        /** Circuit gates */
        gates?: (circuits.IGate[]|null);
    }

    /** Represents a Circuit. */
    class Circuit implements ICircuit {

        /**
         * Constructs a new Circuit.
         * @param [properties] Properties to set
         */
        constructor(properties?: circuits.ICircuit);

        /** Circuit id. */
        public id: string;

        /** Circuit name. */
        public name: string;

        /** Circuit version. */
        public version: string;

        /** Circuit wireCount. */
        public wireCount: number;

        /** Circuit andCount. */
        public andCount: number;

        /** Circuit xorCount. */
        public xorCount: number;

        /** Circuit inputs. */
        public inputs: circuits.IGroup[];

        /** Circuit outputs. */
        public outputs: circuits.IGroup[];

        /** Circuit gates. */
        public gates: circuits.IGate[];

        /**
         * Creates a new Circuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Circuit instance
         */
        public static create(properties?: circuits.ICircuit): circuits.Circuit;

        /**
         * Encodes the specified Circuit message. Does not implicitly {@link circuits.Circuit.verify|verify} messages.
         * @param message Circuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: circuits.ICircuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Circuit message, length delimited. Does not implicitly {@link circuits.Circuit.verify|verify} messages.
         * @param message Circuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: circuits.ICircuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Circuit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Circuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): circuits.Circuit;

        /**
         * Decodes a Circuit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Circuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): circuits.Circuit;

        /**
         * Verifies a Circuit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Circuit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Circuit
         */
        public static fromObject(object: { [k: string]: any }): circuits.Circuit;

        /**
         * Creates a plain object from a Circuit message. Also converts values to other types if specified.
         * @param message Circuit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: circuits.Circuit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Circuit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Circuit
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace zk. */
export namespace zk {

    /** Properties of a SparseCoo. */
    interface ISparseCoo {

        /** SparseCoo rows */
        rows?: (number[]|null);

        /** SparseCoo cols */
        cols?: (number[]|null);

        /** SparseCoo values */
        values?: (boolean[]|null);
    }

    /** Represents a SparseCoo. */
    class SparseCoo implements ISparseCoo {

        /**
         * Constructs a new SparseCoo.
         * @param [properties] Properties to set
         */
        constructor(properties?: zk.ISparseCoo);

        /** SparseCoo rows. */
        public rows: number[];

        /** SparseCoo cols. */
        public cols: number[];

        /** SparseCoo values. */
        public values: boolean[];

        /**
         * Creates a new SparseCoo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SparseCoo instance
         */
        public static create(properties?: zk.ISparseCoo): zk.SparseCoo;

        /**
         * Encodes the specified SparseCoo message. Does not implicitly {@link zk.SparseCoo.verify|verify} messages.
         * @param message SparseCoo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zk.ISparseCoo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SparseCoo message, length delimited. Does not implicitly {@link zk.SparseCoo.verify|verify} messages.
         * @param message SparseCoo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zk.ISparseCoo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SparseCoo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SparseCoo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zk.SparseCoo;

        /**
         * Decodes a SparseCoo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SparseCoo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zk.SparseCoo;

        /**
         * Verifies a SparseCoo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SparseCoo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SparseCoo
         */
        public static fromObject(object: { [k: string]: any }): zk.SparseCoo;

        /**
         * Creates a plain object from a SparseCoo message. Also converts values to other types if specified.
         * @param message SparseCoo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zk.SparseCoo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SparseCoo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SparseCoo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a IO. */
    interface IIO {

        /** IO data */
        data?: (Uint8Array[]|null);
    }

    /** Represents a IO. */
    class IO implements IIO {

        /**
         * Constructs a new IO.
         * @param [properties] Properties to set
         */
        constructor(properties?: zk.IIO);

        /** IO data. */
        public data: Uint8Array[];

        /**
         * Creates a new IO instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IO instance
         */
        public static create(properties?: zk.IIO): zk.IO;

        /**
         * Encodes the specified IO message. Does not implicitly {@link zk.IO.verify|verify} messages.
         * @param message IO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zk.IIO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IO message, length delimited. Does not implicitly {@link zk.IO.verify|verify} messages.
         * @param message IO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zk.IIO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a IO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zk.IO;

        /**
         * Decodes a IO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zk.IO;

        /**
         * Verifies a IO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a IO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IO
         */
        public static fromObject(object: { [k: string]: any }): zk.IO;

        /**
         * Creates a plain object from a IO message. Also converts values to other types if specified.
         * @param message IO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zk.IO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IO
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Data. */
    interface IData {

        /** Data bits */
        bits: Uint8Array;

        /** Data len */
        len: number;
    }

    /** Represents a Data. */
    class Data implements IData {

        /**
         * Constructs a new Data.
         * @param [properties] Properties to set
         */
        constructor(properties?: zk.IData);

        /** Data bits. */
        public bits: Uint8Array;

        /** Data len. */
        public len: number;

        /**
         * Creates a new Data instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Data instance
         */
        public static create(properties?: zk.IData): zk.Data;

        /**
         * Encodes the specified Data message. Does not implicitly {@link zk.Data.verify|verify} messages.
         * @param message Data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zk.IData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Data message, length delimited. Does not implicitly {@link zk.Data.verify|verify} messages.
         * @param message Data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zk.IData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Data message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zk.Data;

        /**
         * Decodes a Data message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zk.Data;

        /**
         * Verifies a Data message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Data message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Data
         */
        public static fromObject(object: { [k: string]: any }): zk.Data;

        /**
         * Creates a plain object from a Data message. Also converts values to other types if specified.
         * @param message Data
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zk.Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Data to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Data
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BoolIo. */
    interface IBoolIo {

        /** BoolIo data */
        data?: (zk.IData[]|null);
    }

    /** Represents a BoolIo. */
    class BoolIo implements IBoolIo {

        /**
         * Constructs a new BoolIo.
         * @param [properties] Properties to set
         */
        constructor(properties?: zk.IBoolIo);

        /** BoolIo data. */
        public data: zk.IData[];

        /**
         * Creates a new BoolIo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BoolIo instance
         */
        public static create(properties?: zk.IBoolIo): zk.BoolIo;

        /**
         * Encodes the specified BoolIo message. Does not implicitly {@link zk.BoolIo.verify|verify} messages.
         * @param message BoolIo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zk.IBoolIo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BoolIo message, length delimited. Does not implicitly {@link zk.BoolIo.verify|verify} messages.
         * @param message BoolIo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zk.IBoolIo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BoolIo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BoolIo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zk.BoolIo;

        /**
         * Decodes a BoolIo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BoolIo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zk.BoolIo;

        /**
         * Verifies a BoolIo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BoolIo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BoolIo
         */
        public static fromObject(object: { [k: string]: any }): zk.BoolIo;

        /**
         * Creates a plain object from a BoolIo message. Also converts values to other types if specified.
         * @param message BoolIo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zk.BoolIo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BoolIo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BoolIo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProverCommit. */
    interface IProverCommit {

        /** ProverCommit w */
        w: boolean;

        /** ProverCommit m */
        m: Uint8Array;
    }

    /** Represents a ProverCommit. */
    class ProverCommit implements IProverCommit {

        /**
         * Constructs a new ProverCommit.
         * @param [properties] Properties to set
         */
        constructor(properties?: zk.IProverCommit);

        /** ProverCommit w. */
        public w: boolean;

        /** ProverCommit m. */
        public m: Uint8Array;

        /**
         * Creates a new ProverCommit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProverCommit instance
         */
        public static create(properties?: zk.IProverCommit): zk.ProverCommit;

        /**
         * Encodes the specified ProverCommit message. Does not implicitly {@link zk.ProverCommit.verify|verify} messages.
         * @param message ProverCommit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zk.IProverCommit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProverCommit message, length delimited. Does not implicitly {@link zk.ProverCommit.verify|verify} messages.
         * @param message ProverCommit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zk.IProverCommit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProverCommit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProverCommit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zk.ProverCommit;

        /**
         * Decodes a ProverCommit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProverCommit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zk.ProverCommit;

        /**
         * Verifies a ProverCommit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProverCommit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProverCommit
         */
        public static fromObject(object: { [k: string]: any }): zk.ProverCommit;

        /**
         * Creates a plain object from a ProverCommit message. Also converts values to other types if specified.
         * @param message ProverCommit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zk.ProverCommit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProverCommit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProverCommit
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Commit. */
    interface ICommit {

        /** Commit commit */
        commit?: (zk.IProverCommit[]|null);
    }

    /** Represents a Commit. */
    class Commit implements ICommit {

        /**
         * Constructs a new Commit.
         * @param [properties] Properties to set
         */
        constructor(properties?: zk.ICommit);

        /** Commit commit. */
        public commit: zk.IProverCommit[];

        /**
         * Creates a new Commit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Commit instance
         */
        public static create(properties?: zk.ICommit): zk.Commit;

        /**
         * Encodes the specified Commit message. Does not implicitly {@link zk.Commit.verify|verify} messages.
         * @param message Commit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zk.ICommit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Commit message, length delimited. Does not implicitly {@link zk.Commit.verify|verify} messages.
         * @param message Commit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zk.ICommit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Commit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Commit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zk.Commit;

        /**
         * Decodes a Commit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Commit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zk.Commit;

        /**
         * Verifies a Commit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Commit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Commit
         */
        public static fromObject(object: { [k: string]: any }): zk.Commit;

        /**
         * Creates a plain object from a Commit message. Also converts values to other types if specified.
         * @param message Commit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zk.Commit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Commit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Commit
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EvaluateOutput. */
    interface IEvaluateOutput {

        /** EvaluateOutput d */
        d: zk.IData;

        /** EvaluateOutput u */
        u: Uint8Array;

        /** EvaluateOutput v */
        v: Uint8Array;

        /** EvaluateOutput commits */
        commits?: (zk.ICommit[]|null);
    }

    /** Represents an EvaluateOutput. */
    class EvaluateOutput implements IEvaluateOutput {

        /**
         * Constructs a new EvaluateOutput.
         * @param [properties] Properties to set
         */
        constructor(properties?: zk.IEvaluateOutput);

        /** EvaluateOutput d. */
        public d: zk.IData;

        /** EvaluateOutput u. */
        public u: Uint8Array;

        /** EvaluateOutput v. */
        public v: Uint8Array;

        /** EvaluateOutput commits. */
        public commits: zk.ICommit[];

        /**
         * Creates a new EvaluateOutput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EvaluateOutput instance
         */
        public static create(properties?: zk.IEvaluateOutput): zk.EvaluateOutput;

        /**
         * Encodes the specified EvaluateOutput message. Does not implicitly {@link zk.EvaluateOutput.verify|verify} messages.
         * @param message EvaluateOutput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zk.IEvaluateOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EvaluateOutput message, length delimited. Does not implicitly {@link zk.EvaluateOutput.verify|verify} messages.
         * @param message EvaluateOutput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zk.IEvaluateOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EvaluateOutput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EvaluateOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zk.EvaluateOutput;

        /**
         * Decodes an EvaluateOutput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EvaluateOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zk.EvaluateOutput;

        /**
         * Verifies an EvaluateOutput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EvaluateOutput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EvaluateOutput
         */
        public static fromObject(object: { [k: string]: any }): zk.EvaluateOutput;

        /**
         * Creates a plain object from an EvaluateOutput message. Also converts values to other types if specified.
         * @param message EvaluateOutput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zk.EvaluateOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EvaluateOutput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EvaluateOutput
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BaseCircuit. */
    interface IBaseCircuit {

        /** BaseCircuit name */
        name: string;

        /** BaseCircuit data */
        data: string;
    }

    /** Represents a BaseCircuit. */
    class BaseCircuit implements IBaseCircuit {

        /**
         * Constructs a new BaseCircuit.
         * @param [properties] Properties to set
         */
        constructor(properties?: zk.IBaseCircuit);

        /** BaseCircuit name. */
        public name: string;

        /** BaseCircuit data. */
        public data: string;

        /**
         * Creates a new BaseCircuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaseCircuit instance
         */
        public static create(properties?: zk.IBaseCircuit): zk.BaseCircuit;

        /**
         * Encodes the specified BaseCircuit message. Does not implicitly {@link zk.BaseCircuit.verify|verify} messages.
         * @param message BaseCircuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zk.IBaseCircuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaseCircuit message, length delimited. Does not implicitly {@link zk.BaseCircuit.verify|verify} messages.
         * @param message BaseCircuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zk.IBaseCircuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaseCircuit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaseCircuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zk.BaseCircuit;

        /**
         * Decodes a BaseCircuit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaseCircuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zk.BaseCircuit;

        /**
         * Verifies a BaseCircuit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaseCircuit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaseCircuit
         */
        public static fromObject(object: { [k: string]: any }): zk.BaseCircuit;

        /**
         * Creates a plain object from a BaseCircuit message. Also converts values to other types if specified.
         * @param message BaseCircuit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zk.BaseCircuit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaseCircuit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BaseCircuit
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Dependency. */
    interface IDependency {

        /** Dependency id */
        id: (number|Long);

        /** Dependency kStart */
        kStart: number;

        /** Dependency vStart */
        vStart: number;

        /** Dependency size */
        size: number;
    }

    /** Represents a Dependency. */
    class Dependency implements IDependency {

        /**
         * Constructs a new Dependency.
         * @param [properties] Properties to set
         */
        constructor(properties?: zk.IDependency);

        /** Dependency id. */
        public id: (number|Long);

        /** Dependency kStart. */
        public kStart: number;

        /** Dependency vStart. */
        public vStart: number;

        /** Dependency size. */
        public size: number;

        /**
         * Creates a new Dependency instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Dependency instance
         */
        public static create(properties?: zk.IDependency): zk.Dependency;

        /**
         * Encodes the specified Dependency message. Does not implicitly {@link zk.Dependency.verify|verify} messages.
         * @param message Dependency message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zk.IDependency, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Dependency message, length delimited. Does not implicitly {@link zk.Dependency.verify|verify} messages.
         * @param message Dependency message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zk.IDependency, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Dependency message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Dependency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zk.Dependency;

        /**
         * Decodes a Dependency message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Dependency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zk.Dependency;

        /**
         * Verifies a Dependency message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Dependency message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Dependency
         */
        public static fromObject(object: { [k: string]: any }): zk.Dependency;

        /**
         * Creates a plain object from a Dependency message. Also converts values to other types if specified.
         * @param message Dependency
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zk.Dependency, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Dependency to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Dependency
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Dag. */
    interface IDag {

        /** Dag id */
        id: number;

        /** Dag name */
        name: string;

        /** Dag out */
        out: boolean;

        /** Dag deps */
        deps?: (zk.IDependency[]|null);
    }

    /** Represents a Dag. */
    class Dag implements IDag {

        /**
         * Constructs a new Dag.
         * @param [properties] Properties to set
         */
        constructor(properties?: zk.IDag);

        /** Dag id. */
        public id: number;

        /** Dag name. */
        public name: string;

        /** Dag out. */
        public out: boolean;

        /** Dag deps. */
        public deps: zk.IDependency[];

        /**
         * Creates a new Dag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Dag instance
         */
        public static create(properties?: zk.IDag): zk.Dag;

        /**
         * Encodes the specified Dag message. Does not implicitly {@link zk.Dag.verify|verify} messages.
         * @param message Dag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zk.IDag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Dag message, length delimited. Does not implicitly {@link zk.Dag.verify|verify} messages.
         * @param message Dag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zk.IDag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Dag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Dag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zk.Dag;

        /**
         * Decodes a Dag message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Dag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zk.Dag;

        /**
         * Verifies a Dag message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Dag message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Dag
         */
        public static fromObject(object: { [k: string]: any }): zk.Dag;

        /**
         * Creates a plain object from a Dag message. Also converts values to other types if specified.
         * @param message Dag
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zk.Dag, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Dag to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Dag
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Waterfall. */
    interface IWaterfall {

        /** Waterfall seed */
        seed: Uint8Array;

        /** Waterfall input */
        input: zk.IData;

        /** Waterfall circuits */
        circuits?: (zk.IBaseCircuit[]|null);

        /** Waterfall dags */
        dags?: (zk.IDag[]|null);
    }

    /** Represents a Waterfall. */
    class Waterfall implements IWaterfall {

        /**
         * Constructs a new Waterfall.
         * @param [properties] Properties to set
         */
        constructor(properties?: zk.IWaterfall);

        /** Waterfall seed. */
        public seed: Uint8Array;

        /** Waterfall input. */
        public input: zk.IData;

        /** Waterfall circuits. */
        public circuits: zk.IBaseCircuit[];

        /** Waterfall dags. */
        public dags: zk.IDag[];

        /**
         * Creates a new Waterfall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Waterfall instance
         */
        public static create(properties?: zk.IWaterfall): zk.Waterfall;

        /**
         * Encodes the specified Waterfall message. Does not implicitly {@link zk.Waterfall.verify|verify} messages.
         * @param message Waterfall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zk.IWaterfall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Waterfall message, length delimited. Does not implicitly {@link zk.Waterfall.verify|verify} messages.
         * @param message Waterfall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zk.IWaterfall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Waterfall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Waterfall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zk.Waterfall;

        /**
         * Decodes a Waterfall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Waterfall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zk.Waterfall;

        /**
         * Verifies a Waterfall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Waterfall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Waterfall
         */
        public static fromObject(object: { [k: string]: any }): zk.Waterfall;

        /**
         * Creates a plain object from a Waterfall message. Also converts values to other types if specified.
         * @param message Waterfall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zk.Waterfall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Waterfall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Waterfall
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WaterfallProverOut. */
    interface IWaterfallProverOut {

        /** WaterfallProverOut id */
        id: number;

        /** WaterfallProverOut commits */
        commits?: (zk.ICommit[]|null);
    }

    /** Represents a WaterfallProverOut. */
    class WaterfallProverOut implements IWaterfallProverOut {

        /**
         * Constructs a new WaterfallProverOut.
         * @param [properties] Properties to set
         */
        constructor(properties?: zk.IWaterfallProverOut);

        /** WaterfallProverOut id. */
        public id: number;

        /** WaterfallProverOut commits. */
        public commits: zk.ICommit[];

        /**
         * Creates a new WaterfallProverOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WaterfallProverOut instance
         */
        public static create(properties?: zk.IWaterfallProverOut): zk.WaterfallProverOut;

        /**
         * Encodes the specified WaterfallProverOut message. Does not implicitly {@link zk.WaterfallProverOut.verify|verify} messages.
         * @param message WaterfallProverOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zk.IWaterfallProverOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WaterfallProverOut message, length delimited. Does not implicitly {@link zk.WaterfallProverOut.verify|verify} messages.
         * @param message WaterfallProverOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zk.IWaterfallProverOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WaterfallProverOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WaterfallProverOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zk.WaterfallProverOut;

        /**
         * Decodes a WaterfallProverOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WaterfallProverOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zk.WaterfallProverOut;

        /**
         * Verifies a WaterfallProverOut message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WaterfallProverOut message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WaterfallProverOut
         */
        public static fromObject(object: { [k: string]: any }): zk.WaterfallProverOut;

        /**
         * Creates a plain object from a WaterfallProverOut message. Also converts values to other types if specified.
         * @param message WaterfallProverOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zk.WaterfallProverOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WaterfallProverOut to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WaterfallProverOut
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WaterfallOutput. */
    interface IWaterfallOutput {

        /** WaterfallOutput d */
        d?: (zk.IData[]|null);

        /** WaterfallOutput u */
        u?: (Uint8Array[]|null);

        /** WaterfallOutput v */
        v?: (Uint8Array[]|null);

        /** WaterfallOutput sum */
        sum: Uint8Array;

        /** WaterfallOutput outCommits */
        outCommits?: (zk.IWaterfallProverOut[]|null);
    }

    /** Represents a WaterfallOutput. */
    class WaterfallOutput implements IWaterfallOutput {

        /**
         * Constructs a new WaterfallOutput.
         * @param [properties] Properties to set
         */
        constructor(properties?: zk.IWaterfallOutput);

        /** WaterfallOutput d. */
        public d: zk.IData[];

        /** WaterfallOutput u. */
        public u: Uint8Array[];

        /** WaterfallOutput v. */
        public v: Uint8Array[];

        /** WaterfallOutput sum. */
        public sum: Uint8Array;

        /** WaterfallOutput outCommits. */
        public outCommits: zk.IWaterfallProverOut[];

        /**
         * Creates a new WaterfallOutput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WaterfallOutput instance
         */
        public static create(properties?: zk.IWaterfallOutput): zk.WaterfallOutput;

        /**
         * Encodes the specified WaterfallOutput message. Does not implicitly {@link zk.WaterfallOutput.verify|verify} messages.
         * @param message WaterfallOutput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zk.IWaterfallOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WaterfallOutput message, length delimited. Does not implicitly {@link zk.WaterfallOutput.verify|verify} messages.
         * @param message WaterfallOutput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zk.IWaterfallOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WaterfallOutput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WaterfallOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zk.WaterfallOutput;

        /**
         * Decodes a WaterfallOutput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WaterfallOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zk.WaterfallOutput;

        /**
         * Verifies a WaterfallOutput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WaterfallOutput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WaterfallOutput
         */
        public static fromObject(object: { [k: string]: any }): zk.WaterfallOutput;

        /**
         * Creates a plain object from a WaterfallOutput message. Also converts values to other types if specified.
         * @param message WaterfallOutput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zk.WaterfallOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WaterfallOutput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WaterfallOutput
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
