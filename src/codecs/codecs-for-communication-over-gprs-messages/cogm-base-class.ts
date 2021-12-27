import { Command, TcpCFCOGMPacketBody } from '@app/codecs';
import { BinaryReader, BinaryWriter } from 'buffer-sdk';

export abstract class CogmBaseClass {
  public abstract decode(data: Buffer): TcpCFCOGMPacketBody[];
  public abstract encode(command: Command): Buffer;
}
