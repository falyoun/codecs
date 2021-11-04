/**
 * Codec13 is original Teltonika protocol for device-server communication over GPRS messages and it is based on Codec12 protocol.
 * Main differences of Codec13 are that timestamp is using in messages and communication is one way only (Codec13 is used for Device -> Server sending).
 */
import { convertBytesToInt, convertHexToAscii } from '@app/utils';
import { Command, TcpCFCOGMPacketBody } from '@app/codecs';
import { CogmBaseClass } from '../cogm-base-class';
import { BinaryReader, BinaryWriter } from 'buffer-sdk';

export class Codec13 extends CogmBaseClass {
  decode(packet: Buffer): TcpCFCOGMPacketBody {
    const reader = new BinaryReader(packet);
    const numberOfRecords1 = convertBytesToInt(reader.readBytes(1));
    let body = {} as TcpCFCOGMPacketBody;
    for (let i = 0; i < numberOfRecords1; i++) {
      const commandType = convertBytesToInt(reader.readBytes(1));
      if (commandType === 5) {
        // Command message structure
        const commandSize = convertBytesToInt(reader.readBytes(4));
        const timestamp = new Date(convertBytesToInt(reader.readBytes(4)));
        console.log('timestamp: ', timestamp);
        let command = '';
        for (let i = 0; i < commandSize; i++) {
          command += convertHexToAscii(reader.readBytes(1) as any);
        }
        console.log('command: ', command);
        body = {
          command,
          commandType,
          commandSize,
        };
      }
    }

    return body;
  }

  public encode(command: Command): Buffer {
    const writer = new BinaryWriter();
    writer.writeInt32(13);
    writer.writeInt32(1); // Command count
    writer.writeInt32(command.id);
    writer.writeInt32(command.data.length);
    writer.writeBytes(command.data);
    writer.writeInt32(1); // Command count
    return writer.byteBuffer;
  }
}
