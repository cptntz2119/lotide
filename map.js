const assertEqual = function (actual, expected) {
  const emojiFail = String.fromCodePoint(0x1f6d1);
  const emojiPass = String.fromCodePoint(0x1f7e9);
  if (eqArrays(actual, expected)) {
    console.log(
      `${emojiPass}${emojiPass}${emojiPass} Assertion Passed: ${actual} === ${expected}`
    );
  } else {
    console.log(
      `${emojiFail}${emojiFail}${emojiFail} Assertion Failed: ${actual} !== ${expected}`
    );
  }
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

const map = (array, callback) => {
  //console.log("array: ", array);
  //console.log("callback: ", callback);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
assertEqual(results1, ["g", "c", "t", "m", "t"]);
const words2 = ["what", "is", "your", "name"];
const results2 = map(words2, (word) => word[1]);
assertEqual(results2, ["h", "s", "o", "a"]);
