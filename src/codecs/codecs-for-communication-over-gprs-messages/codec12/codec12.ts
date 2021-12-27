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
  public decode(packet: Buffer): TcpCFCOGMPacketBody[] {
    const reader = new BinaryReader(packet);
    const numberOfRecords1 = convertBytesToInt(reader.readBytes(1));
    const result = [] as TcpCFCOGMPacketBody[];
    for (let i = 0; i < numberOfRecords1; i++) {
      const commandType = convertBytesToInt(reader.readBytes(1));
      if (commandType === 6) {
        // Response message structure
        const responseSize = convertBytesToInt(reader.readBytes(4));
        const response = reader.readBytes(responseSize).toString('ascii');
        result.push({
          command: response,
          commandSize: responseSize,
        });
      }
    }
    return result;
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
