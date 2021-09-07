import { Codec16, DdsBaseClass } from '@app/codecs';
import { BinaryReader } from 'buffer-sdk';

describe('Codec 16 parsing packets', () => {
  it('should parse avl packet correctly', () => {
    const codec16Packet =
      '000000000000005F10020000016BDBC7833000000000000000000000000000000000000B05040200010000030002000B00270042563A00000000016BDBC7871800000000000000000000000000000000000B05040200010000030002000B00260042563A00000200005FB3';
    const buff = Buffer.from(codec16Packet, 'hex');
    const codec: DdsBaseClass = new Codec16(new BinaryReader(buff));
    expect(codec.decode()).toBeDefined();
  });
});
