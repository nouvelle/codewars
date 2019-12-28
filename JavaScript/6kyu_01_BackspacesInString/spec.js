const { expect } = require("chai");
const { cleanString } = require(".");

describe("JavaScript_6kyu_01_BackspacesInString tests", () => {
  it("abc#d##c", () => {
    const result = cleanString("abc#d##c");
    expect(result).to.eql("ac");
  });
  it("abc####d##c#", () => {
    const result = cleanString("abc####d##c#");
    expect(result).to.eql("");
  });
});
