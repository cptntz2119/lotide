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

const eqObjects = (object1, object2) => {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  let values1 = Object.values(object1);
  let values2 = Object.values(object2);
  console.log(key1, key2, values1, values2);
  if (key1.length !== key1.length) {
    return false;
  }
  for (let key of key1) {
    if (!key2.includes(key)) {
      return false;
    }
  }
  for (let value of values1) {
    if (!values2.includes(value)) {
      return false;
    }
  }

  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
