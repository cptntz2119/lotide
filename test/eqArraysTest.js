// const eqArrays = require("../eqArrays");
// const assertEqual = require("../assertEqual");

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it(`return true for true`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
    //console.log(middle([1]));
  });
});
