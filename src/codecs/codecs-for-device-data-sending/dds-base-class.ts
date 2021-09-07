import { TcpCFDDSPacketBody } from '@app/codecs';
import { BinaryReader } from 'buffer-sdk';

export abstract class DdsBaseClass {
  protected constructor(protected reader: BinaryReader) {
    this.reader = reader;
  }
  protected abstract decodeAvlPacket(): TcpCFDDSPacketBody;

  public decode(): TcpCFDDSPacketBody {
    return this.decodeAvlPacket();
  }
}
