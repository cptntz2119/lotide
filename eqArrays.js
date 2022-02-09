const assertEqual = function (actual, expected) {
  const emojiFail = String.fromCodePoint(0x1f6d1);
  const emojiPass = String.fromCodePoint(0x1f7e9);
  console.assert(actual === expected, [
    `${emojiFail}${emojiFail}${emojiFail} Assertion Failed: ${actual} !== ${expected}`,
  ]);
  console.assert(actual !== expected, [
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
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
