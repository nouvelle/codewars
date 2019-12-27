const { expect } = require("chai");
const { rgb } = require(".");

describe("5kyu: RGB To Hex Conversion", () => {
  it("test 1", () => {
    const result = rgb(0, 0, 0);
    expect(result).to.eql("000000");
  });
  it("test 2", () => {
    const result = rgb(0, 0, -20);
    expect(result).to.eql("000000");
  });
  it("test 3", () => {
    const result = rgb(300, 255, 255);
    expect(result).to.eql("FFFFFF");
  });
  it("test 4", () => {
    const result = rgb(173, 255, 47);
    expect(result).to.eql("ADFF2F");
  });
});
