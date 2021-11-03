import { Command, TcpCFCOGMPacketBody } from '@app/codecs';
export abstract class CogmBaseClass {
  public abstract decode(data: Buffer): TcpCFCOGMPacketBody;
  public abstract encode(command: Command): Buffer;
}
