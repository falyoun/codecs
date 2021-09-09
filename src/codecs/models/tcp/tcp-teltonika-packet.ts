// Codec For Communication Over Gprs Messages
import { AvlData } from '@app/codecs';

export class TcpCFCOGMPacketBody {
  commandType: number;
  commandSize: number;
  command: string;
}


export class TcpPacketHeader {
  preamble: number;
  length: number;
}
export class TcpPacketFooter {
  crc: any;
}
