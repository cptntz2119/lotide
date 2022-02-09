const assertArraysEqual = function (actual, expected) {
  const emojiFail = String.fromCodePoint(0x1f6d1);
  const emojiPass = String.fromCodePoint(0x1f7e9);
  console.assert(eqArrays(actual, expected), [
    `${emojiFail}${emojiFail}${emojiFail} Assertion Failed: ${actual} !== ${expected}`,
  ]);
  console.assert(!eqArrays(actual, expected), [
    `${emojiPass}${emojiPass}${emojiPass} Assertion Passed: ${actual} === ${expected}`,
  ]);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const flatten = (arr) => {
  let result = [];
  for (let ele of arr) {
    if (typeof ele === "number") {
      result.push(ele);
    }
    if (Array.isArray(ele)) {
      for (let elem of ele) {
        result.push(elem);
      }
    }
  }
  return result;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, 3]));
console.log(flatten([1, 2, [3, [1, 2], 4], 5, [6]]));
