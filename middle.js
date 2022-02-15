//
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");

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


module.exports = middle;
