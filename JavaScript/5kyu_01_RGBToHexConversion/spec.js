const { expect } = require("chai");
const { rgb } = require(".");

describe("5kyu: RGB To Hex Conversion", () => {
  it("rgb(0, 0, 0)", () => {
    const result = rgb(0, 0, 0);
    expect(result).to.eql("000000");
  });
  it("rgb(0, 0, -20)", () => {
    const result = rgb(0, 0, -20);
    expect(result).to.eql("000000");
  });
  it("rgb(300, 255, 255)", () => {
    const result = rgb(300, 255, 255);
    expect(result).to.eql("FFFFFF");
  });
  it("rgb(173, 255, 47)", () => {
    const result = rgb(173, 255, 47);
    expect(result).to.eql("ADFF2F");
  });
  it("rgb(12, 239, 278)", () => {
    const result = rgb(12, 239, 278);
    expect(result).to.eql("0CEFFF");
  });
});
