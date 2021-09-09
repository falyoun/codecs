import { AvlDataCollection } from '@app/codecs';

export class UdpPacketHeader {
  preamble: number;
  packetId: number;
  packetType: number;
  avlPacketId: number;
  imeiLength: number;
  imei: any;
  codecId: number;
}
export class UdpTeltonikaPacket {
  header: UdpPacketHeader;
  avlDataCollection: AvlDataCollection;
}
