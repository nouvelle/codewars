const { expect } = require("chai");
const { cleanString } = require(".");

describe("JavaScript_6kyu_01_BackspacesInString tests", () => {
  it("test 1", () => {
    const result = cleanString("abc#d##c");
    expect(result).to.eql("ac");
  });
  it("test 2", () => {
    const result = cleanString("abc####d##c#");
    expect(result).to.eql("");
  });
});
