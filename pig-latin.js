const args = process.argv;
const newArr = args.slice(2);
//console.log(newArr);
let result = [];

for (let ele of newArr) {
  let firstLetter = ele.replace(ele[0], ele[0] + "ay");
  //console.log(firstLetter);
  result += ele.slice(1) + firstLetter.slice(0, 3);
  result += " ";
}

console.log(result);
