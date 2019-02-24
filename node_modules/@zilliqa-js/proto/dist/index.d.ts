import * as $protobuf from "protobufjs";
export = zproto;

declare namespace zproto {


    /** Namespace ZilliqaMessage. */
    namespace ZilliqaMessage {

        /** Properties of a ByteArray. */
        interface IByteArray {

            /** ByteArray data */
            data: Uint8Array;
        }

        /** Represents a ByteArray. */
        class ByteArray implements IByteArray {

            /**
             * Constructs a new ByteArray.
             * @param [properties] Properties to set
             */
            constructor(properties?: ZilliqaMessage.IByteArray);

            /** ByteArray data. */
            public data: Uint8Array;

            /**
             * Creates a new ByteArray instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ByteArray instance
             */
            public static create(properties?: ZilliqaMessage.IByteArray): ZilliqaMessage.ByteArray;

            /**
             * Encodes the specified ByteArray message. Does not implicitly {@link ZilliqaMessage.ByteArray.verify|verify} messages.
             * @param message ByteArray message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ZilliqaMessage.IByteArray, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ByteArray message, length delimited. Does not implicitly {@link ZilliqaMessage.ByteArray.verify|verify} messages.
             * @param message ByteArray message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ZilliqaMessage.IByteArray, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ByteArray message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ByteArray
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZilliqaMessage.ByteArray;

            /**
             * Decodes a ByteArray message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ByteArray
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ZilliqaMessage.ByteArray;

            /**
             * Verifies a ByteArray message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ByteArray message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ByteArray
             */
            public static fromObject(object: { [k: string]: any }): ZilliqaMessage.ByteArray;

            /**
             * Creates a plain object from a ByteArray message. Also converts values to other types if specified.
             * @param message ByteArray
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ZilliqaMessage.ByteArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ByteArray to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoTransactionCoreInfo. */
        interface IProtoTransactionCoreInfo {

            /** ProtoTransactionCoreInfo version */
            version?: (number|null);

            /** ProtoTransactionCoreInfo nonce */
            nonce?: (number|Long|null);

            /** ProtoTransactionCoreInfo toaddr */
            toaddr?: (Uint8Array|null);

            /** ProtoTransactionCoreInfo senderpubkey */
            senderpubkey?: (ZilliqaMessage.IByteArray|null);

            /** ProtoTransactionCoreInfo amount */
            amount?: (ZilliqaMessage.IByteArray|null);

            /** ProtoTransactionCoreInfo gasprice */
            gasprice?: (ZilliqaMessage.IByteArray|null);

            /** ProtoTransactionCoreInfo gaslimit */
            gaslimit?: (number|Long|null);

            /** ProtoTransactionCoreInfo code */
            code?: (Uint8Array|null);

            /** ProtoTransactionCoreInfo data */
            data?: (Uint8Array|null);
        }

        /** Represents a ProtoTransactionCoreInfo. */
        class ProtoTransactionCoreInfo implements IProtoTransactionCoreInfo {

            /**
             * Constructs a new ProtoTransactionCoreInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: ZilliqaMessage.IProtoTransactionCoreInfo);

            /** ProtoTransactionCoreInfo version. */
            public version: number;

            /** ProtoTransactionCoreInfo nonce. */
            public nonce: (number|Long);

            /** ProtoTransactionCoreInfo toaddr. */
            public toaddr: Uint8Array;

            /** ProtoTransactionCoreInfo senderpubkey. */
            public senderpubkey?: (ZilliqaMessage.IByteArray|null);

            /** ProtoTransactionCoreInfo amount. */
            public amount?: (ZilliqaMessage.IByteArray|null);

            /** ProtoTransactionCoreInfo gasprice. */
            public gasprice?: (ZilliqaMessage.IByteArray|null);

            /** ProtoTransactionCoreInfo gaslimit. */
            public gaslimit: (number|Long);

            /** ProtoTransactionCoreInfo code. */
            public code: Uint8Array;

            /** ProtoTransactionCoreInfo data. */
            public data: Uint8Array;

            /**
             * Creates a new ProtoTransactionCoreInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoTransactionCoreInfo instance
             */
            public static create(properties?: ZilliqaMessage.IProtoTransactionCoreInfo): ZilliqaMessage.ProtoTransactionCoreInfo;

            /**
             * Encodes the specified ProtoTransactionCoreInfo message. Does not implicitly {@link ZilliqaMessage.ProtoTransactionCoreInfo.verify|verify} messages.
             * @param message ProtoTransactionCoreInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ZilliqaMessage.IProtoTransactionCoreInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoTransactionCoreInfo message, length delimited. Does not implicitly {@link ZilliqaMessage.ProtoTransactionCoreInfo.verify|verify} messages.
             * @param message ProtoTransactionCoreInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ZilliqaMessage.IProtoTransactionCoreInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoTransactionCoreInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoTransactionCoreInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZilliqaMessage.ProtoTransactionCoreInfo;

            /**
             * Decodes a ProtoTransactionCoreInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoTransactionCoreInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ZilliqaMessage.ProtoTransactionCoreInfo;

            /**
             * Verifies a ProtoTransactionCoreInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoTransactionCoreInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoTransactionCoreInfo
             */
            public static fromObject(object: { [k: string]: any }): ZilliqaMessage.ProtoTransactionCoreInfo;

            /**
             * Creates a plain object from a ProtoTransactionCoreInfo message. Also converts values to other types if specified.
             * @param message ProtoTransactionCoreInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ZilliqaMessage.ProtoTransactionCoreInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoTransactionCoreInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoTransaction. */
        interface IProtoTransaction {

            /** ProtoTransaction tranid */
            tranid?: (Uint8Array|null);

            /** ProtoTransaction info */
            info?: (ZilliqaMessage.IProtoTransactionCoreInfo|null);

            /** ProtoTransaction signature */
            signature?: (ZilliqaMessage.IByteArray|null);
        }

        /** Represents a ProtoTransaction. */
        class ProtoTransaction implements IProtoTransaction {

            /**
             * Constructs a new ProtoTransaction.
             * @param [properties] Properties to set
             */
            constructor(properties?: ZilliqaMessage.IProtoTransaction);

            /** ProtoTransaction tranid. */
            public tranid: Uint8Array;

            /** ProtoTransaction info. */
            public info?: (ZilliqaMessage.IProtoTransactionCoreInfo|null);

            /** ProtoTransaction signature. */
            public signature?: (ZilliqaMessage.IByteArray|null);

            /**
             * Creates a new ProtoTransaction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoTransaction instance
             */
            public static create(properties?: ZilliqaMessage.IProtoTransaction): ZilliqaMessage.ProtoTransaction;

            /**
             * Encodes the specified ProtoTransaction message. Does not implicitly {@link ZilliqaMessage.ProtoTransaction.verify|verify} messages.
             * @param message ProtoTransaction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ZilliqaMessage.IProtoTransaction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoTransaction message, length delimited. Does not implicitly {@link ZilliqaMessage.ProtoTransaction.verify|verify} messages.
             * @param message ProtoTransaction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ZilliqaMessage.IProtoTransaction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoTransaction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoTransaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZilliqaMessage.ProtoTransaction;

            /**
             * Decodes a ProtoTransaction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoTransaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ZilliqaMessage.ProtoTransaction;

            /**
             * Verifies a ProtoTransaction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoTransaction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoTransaction
             */
            public static fromObject(object: { [k: string]: any }): ZilliqaMessage.ProtoTransaction;

            /**
             * Creates a plain object from a ProtoTransaction message. Also converts values to other types if specified.
             * @param message ProtoTransaction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ZilliqaMessage.ProtoTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoTransaction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoTransactionReceipt. */
        interface IProtoTransactionReceipt {

            /** ProtoTransactionReceipt receipt */
            receipt?: (Uint8Array|null);

            /** ProtoTransactionReceipt cumgas */
            cumgas?: (number|Long|null);
        }

        /** Represents a ProtoTransactionReceipt. */
        class ProtoTransactionReceipt implements IProtoTransactionReceipt {

            /**
             * Constructs a new ProtoTransactionReceipt.
             * @param [properties] Properties to set
             */
            constructor(properties?: ZilliqaMessage.IProtoTransactionReceipt);

            /** ProtoTransactionReceipt receipt. */
            public receipt: Uint8Array;

            /** ProtoTransactionReceipt cumgas. */
            public cumgas: (number|Long);

            /**
             * Creates a new ProtoTransactionReceipt instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoTransactionReceipt instance
             */
            public static create(properties?: ZilliqaMessage.IProtoTransactionReceipt): ZilliqaMessage.ProtoTransactionReceipt;

            /**
             * Encodes the specified ProtoTransactionReceipt message. Does not implicitly {@link ZilliqaMessage.ProtoTransactionReceipt.verify|verify} messages.
             * @param message ProtoTransactionReceipt message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ZilliqaMessage.IProtoTransactionReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoTransactionReceipt message, length delimited. Does not implicitly {@link ZilliqaMessage.ProtoTransactionReceipt.verify|verify} messages.
             * @param message ProtoTransactionReceipt message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ZilliqaMessage.IProtoTransactionReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoTransactionReceipt message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoTransactionReceipt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZilliqaMessage.ProtoTransactionReceipt;

            /**
             * Decodes a ProtoTransactionReceipt message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoTransactionReceipt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ZilliqaMessage.ProtoTransactionReceipt;

            /**
             * Verifies a ProtoTransactionReceipt message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoTransactionReceipt message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoTransactionReceipt
             */
            public static fromObject(object: { [k: string]: any }): ZilliqaMessage.ProtoTransactionReceipt;

            /**
             * Creates a plain object from a ProtoTransactionReceipt message. Also converts values to other types if specified.
             * @param message ProtoTransactionReceipt
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ZilliqaMessage.ProtoTransactionReceipt, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoTransactionReceipt to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProtoTransactionWithReceipt. */
        interface IProtoTransactionWithReceipt {

            /** ProtoTransactionWithReceipt transaction */
            transaction?: (ZilliqaMessage.IProtoTransaction|null);

            /** ProtoTransactionWithReceipt receipt */
            receipt?: (ZilliqaMessage.IProtoTransactionReceipt|null);
        }

        /** Represents a ProtoTransactionWithReceipt. */
        class ProtoTransactionWithReceipt implements IProtoTransactionWithReceipt {

            /**
             * Constructs a new ProtoTransactionWithReceipt.
             * @param [properties] Properties to set
             */
            constructor(properties?: ZilliqaMessage.IProtoTransactionWithReceipt);

            /** ProtoTransactionWithReceipt transaction. */
            public transaction?: (ZilliqaMessage.IProtoTransaction|null);

            /** ProtoTransactionWithReceipt receipt. */
            public receipt?: (ZilliqaMessage.IProtoTransactionReceipt|null);

            /**
             * Creates a new ProtoTransactionWithReceipt instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtoTransactionWithReceipt instance
             */
            public static create(properties?: ZilliqaMessage.IProtoTransactionWithReceipt): ZilliqaMessage.ProtoTransactionWithReceipt;

            /**
             * Encodes the specified ProtoTransactionWithReceipt message. Does not implicitly {@link ZilliqaMessage.ProtoTransactionWithReceipt.verify|verify} messages.
             * @param message ProtoTransactionWithReceipt message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ZilliqaMessage.IProtoTransactionWithReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtoTransactionWithReceipt message, length delimited. Does not implicitly {@link ZilliqaMessage.ProtoTransactionWithReceipt.verify|verify} messages.
             * @param message ProtoTransactionWithReceipt message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ZilliqaMessage.IProtoTransactionWithReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtoTransactionWithReceipt message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtoTransactionWithReceipt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZilliqaMessage.ProtoTransactionWithReceipt;

            /**
             * Decodes a ProtoTransactionWithReceipt message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtoTransactionWithReceipt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ZilliqaMessage.ProtoTransactionWithReceipt;

            /**
             * Verifies a ProtoTransactionWithReceipt message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtoTransactionWithReceipt message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtoTransactionWithReceipt
             */
            public static fromObject(object: { [k: string]: any }): ZilliqaMessage.ProtoTransactionWithReceipt;

            /**
             * Creates a plain object from a ProtoTransactionWithReceipt message. Also converts values to other types if specified.
             * @param message ProtoTransactionWithReceipt
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ZilliqaMessage.ProtoTransactionWithReceipt, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtoTransactionWithReceipt to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
