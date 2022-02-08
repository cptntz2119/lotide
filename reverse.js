const args = process.argv;
const newArr = args.slice(2);
//console.log(newArr);
let result = [];

for (let ele of newArr) {
  //console.log(ele);
  for (let i = ele.length - 1; i >= 0; i--) {
    result += ele[i];
  }
  result += "\n";
}
console.log(result);
