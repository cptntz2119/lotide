//console.log(letterPositions("lighthouse in the house"));
// console.log(letterPositions("hello"));
// assertEqual(letterPositions("hello"), { h: [0], e: [1], l: [2, 3], o: [4] });
// assertEqual(letterPositions("hello").e, [1]);

const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should returns '{ h: [0], e: [1], l: [2, 3], o: [4] }' for letterPositions('hello')", () => {
    assert.deepEqual(letterPositions("hello"), {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4],
    });
  });
  it("should returns '[1]' for letterPositions('hello').e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});
