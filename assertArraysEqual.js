const eqArrays = require("./eqArrays");
//console.log(eqArrays([1, 2, 3], [1, 2, 3]));
//
const assertArraysEqual = function (arr1, arr2) {
  const emojiFail = String.fromCodePoint(0x1f6d1);
  const emojiPass = String.fromCodePoint(0x1f7e9);
  if (eqArrays(arr1, arr2)) {
    console.log(
      `${emojiPass}${emojiPass}${emojiPass} Assertion Passed: ${arr1} === ${arr2}`
    );
  } else {
    console.log(
      `${emojiFail}${emojiFail}${emojiFail} Assertion Failed: ${arr1} !== ${arr2}`
    );
  }
};

module.exports = assertArraysEqual;
