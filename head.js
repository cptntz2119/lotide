// FUNCTION IMPLEMENTATION
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

const head = (arr) => {
  return arr[0];
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
