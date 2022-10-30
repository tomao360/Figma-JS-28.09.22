let str =
  "your article is a queue, we are beautiful Bueueueuuiiiiiiiiiiiiiiiiiiiise";
let array = str.split("");
let specialLetter = ["a", "e", "i", "o", "u"];
let arrayResult = [];
let flagLastOneSpecialLetter = false;
let counterSpecialLetter = 0;
let flag = false;

for (let i in array) {
  flag = specialLetter.includes(array[i]);

  if (!(flag && flagLastOneSpecialLetter)) {
    arrayResult.push(array[i]);
  }
  flagLastOneSpecialLetter = flag;
}
console.log(arrayResult);

let stringResult = arrayResult.join("");
console.log(stringResult);
