// FUNCTION IMPLEMENTATION
const assertEqual = require(`./assertEqual`);

const tail = (arr) => {
  let newArr = arr.slice(1);
  return newArr;
};

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

module.exports = tail;
