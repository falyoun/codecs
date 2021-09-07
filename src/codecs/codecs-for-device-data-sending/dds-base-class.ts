import { TcpCFDDSPacketBody } from '@app/codecs';
import { BinaryReader } from 'buffer-sdk';

export abstract class DdsBaseClass {
  protected constructor(protected reader: BinaryReader) {
    this.reader = reader;
  }
  protected abstract decodeAvlPacket(): Array<TcpCFDDSPacketBody>;

  public decode(): Array<TcpCFDDSPacketBody> {
    return this.decodeAvlPacket();
  }
}
