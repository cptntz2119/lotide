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

const middle = (arr) => {
  let length = arr.length;
  const resultArr = [];
  //console.log(arr);
  if (length <= 2) {
    return resultArr;
  }
  if (length % 2 !== 0) {
    //console.log(arr[(length + 1) / 2 - 1]);
    resultArr.push(arr[(length + 1) / 2 - 1]);
  }
  if (length % 2 === 0) {
    //console.log(arr.slice(length / 2 - 1, length / 2 + 1));
    resultArr.push(arr[length / 2 - 1], arr[length / 2]);
  }
  return resultArr;
};

// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
//console.log(middle([1, 2, 3, 4])); // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
