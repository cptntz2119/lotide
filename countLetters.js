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
const countLetters = (sentenceStr) => {
  const result = {};
  //let noSpaceStr = sentenceStr.replaceAll(" ", "");
  //console.log(noSpaceStr);
  for (let letter of sentenceStr) {
    //console.log(letter);

    if (result[letter]) {
      result[letter] += 1;
    } else if (letter === " ") {
      process.exit;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};
console.log(countLetters("lighthouse in the house"));
