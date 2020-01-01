const { expect, assert } = require("chai");
const { addLetters } = require(".");

describe.only("7kyu: Alphabetical Addition", () => {
  const tests = [
    [["a", "b", "c"], "f"],
    [["z"], "z"],
    [["a", "b"], "c"],
    [["c"], "c"],
    [["z", "a"], "a"],
    [["y", "c", "b"], "d"],
    [[], "z"]
  ];

  // it("test 1", () => {
  tests.forEach(test => {
    const str = test[0].map(x => `"${x}"`).join(", ");
    it(`addLetters(${str})`, () => {
      assert.strictEqual(addLetters(...test[0]), test[1]);
    });
  });
  // });
});
