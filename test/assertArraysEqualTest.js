const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
