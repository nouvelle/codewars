const { expect } = require('chai');
const { replicate } = require('.');

describe('JavaScript_7kyu_03_RecursiveReplication tests', () => {
  it('sentence 1', () => {
    const result = replicate(3, 5);
    expect(result).to.eql([5, 5, 5]);
  });
  it('sentence 2', () => {
    const result = replicate(5, 1);
    expect(result).to.eql([1, 1, 1, 1, 1]);
  });
  it('sentence 3', () => {
    const result = replicate(0, 12);
    expect(result).to.eql([]);
  });
  it('sentence 4', () => {
    const result = replicate(-1, 12);
    expect(result).to.eql([]);
  });
  it('sentence 5', () => {
    const result = replicate(8, 0);
    expect(result).to.eql([0, 0, 0, 0, 0, 0, 0, 0]);
  });
});
