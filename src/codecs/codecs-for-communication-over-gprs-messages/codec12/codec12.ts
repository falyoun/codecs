/**
 * Codec12 is the original and main Teltonika protocol for device-server communication over GPRS messages.
 * Codec12 GPRS commands can be used for sending configuration, debug, digital outputs control commands or other (special purpose command on special firmware versions).
 * This protocol is also necessary for using FMB630/FM6300/FM5300/FM5500/FM4200 features like: Garmin, LCD communication, COM TCP Link Mode.
 */
import { convertBytesToInt, convertHexToAscii } from '@app/utils';
import { Command, TcpCFCOGMPacketBody } from '@app/codecs';
import { CogmBaseClass } from '../cogm-base-class';
import { BinaryReader, BinaryWriter } from 'buffer-sdk';

export class Codec12 extends CogmBaseClass {
  public override decode(data: Buffer): TcpCFCOGMPacketBody {
    const reader = new BinaryReader(data);
    const numberOfRecords1 = convertBytesToInt(reader.readBytes(1));
    let body = {} as TcpCFCOGMPacketBody;
    for (let i = 0; i < numberOfRecords1; i++) {
      const commandType = convertBytesToInt(reader.readBytes(1));
      if (commandType === 5) {
        // Command message structure
        const commandSize = convertBytesToInt(reader.readBytes(4));
        let command = '';
        for (let i = 0; i < commandSize; i++) {
          command += convertHexToAscii(reader.readBytes(1) as any);
        }
        console.log('command: ', command);
        body = {
          command,
          commandSize,
          commandType,
        };
      }

      if (commandType === 6) {
        // Response message structure
        const responseSize = convertBytesToInt(reader.readBytes(4));
        let response = '';
        for (let i = 0; i < responseSize; i++) {
          response += convertHexToAscii(reader.readBytes(1) as any);
        }
        console.log('response: ', response);
        body = {
          command: response,
          commandSize: responseSize,
          commandType,
        };
      }
    }
    return body;
  }

  public encode(command: Command): Buffer {
    const writer = new BinaryWriter();
    writer.writeInt32(12);
    writer.writeInt32(1); // Command count
    writer.writeInt32(command.id);
    writer.writeInt32(command.data.length);
    writer.writeBytes(command.data);
    writer.writeInt32(1); // Command count
    return writer.byteBuffer;
  }
}
