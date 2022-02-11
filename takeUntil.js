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

const takeUntil = function (array, callback) {
  // ...
  let result = [];
  for (let num of array) {
    if (!callback(num)) {
      result.push(num);
    }
    if (callback(num)) {
      break;
    }
  }
  return result;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
assertEqual(results1, [1, 2, 5, 7, 2]);
assertEqual(results2, ["I've", "been", "to", "Hollywood"]);
