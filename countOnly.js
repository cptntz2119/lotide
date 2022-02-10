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

//const countOnly = (AllItemArr, ItemToCountObj) => {};
const countOnly = function (allItems, itemsToCount) {
  let countArr = [];
  let resultObj = {};
  for (let keyInObj in itemsToCount) {
    if (itemsToCount[keyInObj] === true) {
      console.log(keyInObj);
      let countArr = allItems.filter((eleInArr) => eleInArr === keyInObj);
      console.log(countArr);
      resultObj[keyInObj] = countArr.length;
    }
  }
  console.log(resultObj);
  return resultObj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
