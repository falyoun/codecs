
describe('Codec 14', () => {
  it('should parse codec14 packet', () => {
    const codec14packet =
      '00000000000000100E011100000008035209308145246801000032AC';
    const buff = Buffer.from(codec14packet, 'hex');
  });
});
