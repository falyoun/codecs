import { TeltonikaPacketsParser } from '@app/codecs/teltonika-packets-parser';

describe('Codec13', () => {
  it('should parse codec 13 packet', () => {
    const codec13packet =
      '00000000000000170D0105000000070A81C320676574696E666F0100006855';
    const buff = Buffer.from(codec13packet, 'hex');
    const teltonikaPacketsParser = new TeltonikaPacketsParser(buff);
    expect(teltonikaPacketsParser.decodeTcpData()).toBeDefined();
  });
});
