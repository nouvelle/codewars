const { expect } = require("chai");
const { findShort } = require(".");

describe("JavaScript_7kyu_01_ShortestWord tests", () => {
  it("test 1", () => {
    const result = findShort(
      "bitcoin take over the world maybe who knows perhaps"
    );
    expect(result).to.eql(3);
  });
  it("test 2", () => {
    const result = findShort(
      "turns out random test cases are easier than writing out basic ones"
    );
    expect(result).to.eql(3);
  });
});
