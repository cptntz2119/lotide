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

const eqObjects = (object1, object2) => {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  let values1 = Object.values(object1);
  let values2 = Object.values(object2);
  //console.log(key1, key2, values1, values2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (let key of key1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
  const emojiFail = String.fromCodePoint(0x1f6d1);
  const emojiPass = String.fromCodePoint(0x1f7e9);
  if (eqObjects(actual, expected)) {
    console.log(
      `${emojiPass}${emojiPass}${emojiPass} Assertion Passed: ${inspect(
        actual
      )} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `${emojiFail}${emojiFail}${emojiFail} Assertion Failed: ${inspect(
        actual
      )} !== ${inspect(expected)}`
    );
  }
};
assertObjectsEqual({ a: 1, b: 1 }, { a: 1, b: 3 });
