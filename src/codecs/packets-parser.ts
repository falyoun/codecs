import { TcpPacketFooter, TcpPacketHeader, UdpPacketHeader } from '@app/codecs';
import { BinaryReader } from 'buffer-sdk';
import { convertBytesToInt } from '@app/utils';

export const parseTCPPacketHeader = (reader: BinaryReader): TcpPacketHeader => {
  const preamble = reader.readInt32(); // convertBytesToInt(reader.readBytes(4));
  const length = reader.readInt32(); // convertBytesToInt(reader.readBytes(4));
  const codecId = convertBytesToInt(reader.readBytes(1));
  return {
    preamble,
    length,
  };
};
export const parseTCPPacketFooter = (reader: BinaryReader): TcpPacketFooter => {
  const crc = reader.readInt32();
  return { crc };
};
export const parseUDPPacketHeader = (reader: BinaryReader): UdpPacketHeader => {

  const preamble = convertBytesToInt(reader.readBytes(2));
  const packetId = convertBytesToInt(reader.readBytes(2));
  const packetType = convertBytesToInt(reader.readBytes(1));
  const avlPacketId = convertBytesToInt(reader.readBytes(1));
  const imeiLength = convertBytesToInt(reader.readBytes(2));
  const imei = convertBytesToInt(reader.readBytes(imeiLength));
  const codecId = convertBytesToInt(reader.readBytes(1));
  return {
    preamble,
    packetId,
    packetType,
    avlPacketId,
    imeiLength,
    imei,
    codecId,
  };
};
