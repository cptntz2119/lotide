// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  const emojiFail = String.fromCodePoint(0x1f6d1);
  const emojiPass = String.fromCodePoint(0x1f7e9);
  if (actual === expected) {
    console.log(
      `${emojiPass}${emojiPass}${emojiPass} Assertion Passed: ${actual} === ${expected}`
    );
  } else {
    console.log(
      `${emojiFail}${emojiFail}${emojiFail} Assertion Failed: ${actual} !== ${expected}`
    );
  }
};

module.exports = assertEqual;

// TEST CODE
//assertEqual("abcde", "abcde");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 3);
