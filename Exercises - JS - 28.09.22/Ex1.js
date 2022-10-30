let str = "a,b$c*fs(@";
let str1 = str.split("");
let strSigns = [];
let strLetters = [];

for (let i = str1.length - 1; i >= 0; i--) {
  if (
    (str1[i] >= "A" && str1[i] <= "Z") ||
    (str1[i] >= "a" && str1[i] <= "z")
  ) {
    strLetters.push(str1[i]);
  } else {
    strSigns[i] = str1[i];
    //console.log(str1[i]);
    let location2 = i;
    //console.log(location2);
  }
}
//console.log(str1);
console.log(strLetters);
console.log(strSigns);
let counter = 0;
for (let i = 0; i < strSigns.length - 1; i++) {
  if (strSigns[i] === undefined) {
    strSigns[i] = strLetters[counter];
    counter++;
  }
}
console.log(strSigns);
