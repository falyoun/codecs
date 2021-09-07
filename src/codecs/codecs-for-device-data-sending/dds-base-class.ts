import { BinaryReader } from 'buffer-sdk';
import { AvlDataCollection } from '@app/codecs';

export abstract class DdsBaseClass {
  protected constructor(protected reader: BinaryReader) {
    this.reader = reader;
  }
  protected abstract decodeAvlPacket(): AvlDataCollection;

  public decode(): AvlDataCollection {
    return this.decodeAvlPacket();
  }
}
