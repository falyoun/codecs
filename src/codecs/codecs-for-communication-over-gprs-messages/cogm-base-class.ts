import { Command, TcpCFCOGMPacketBody } from '@app/codecs';
import { BinaryReader, BinaryWriter } from 'buffer-sdk';

export abstract class CogmBaseClass {
  protected constructor(
    public reader: BinaryReader,
    public writer: BinaryWriter,
  ) {}

  public abstract decode(): TcpCFCOGMPacketBody;
  public abstract encode(command: Command): Buffer;
}
