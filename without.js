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

const without = (arrSrc, arrRm) => {
  // check remove arr is empty or do not have samehing in arrSrc, it return arrSrc
  for (let ele of arrRm) {
    if (!arrSrc.includes(ele)) {
      return arrSrc;
    }
    // if remove arr has the same in arrSrc, then filter out the elemeent from arrSrc
    if (arrSrc.includes(ele)) {
      return arrSrc.filter(function (elem) {
        return elem != ele;
      });
    }
  }
};

const words = ["hello", "world", "lighthouse"];
console.log("without:", without(words, ["lighthouse"]));

without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertEqual(words, ["hello", "world", "lighthouse"]);
