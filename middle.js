//
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");

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
