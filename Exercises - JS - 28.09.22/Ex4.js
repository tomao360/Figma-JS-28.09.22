//Exercise a:
let arrayofNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayCoppy = [...arrayofNumber];
console.log(arrayCoppy);

//Exercise b:
let firstSecond = [[...arrayofNumber][0], [...arrayofNumber][1]];
console.log(firstSecond);

//Exercise c:
arrayCoppy = [];
const [a, b, ...c] = arrayofNumber;
console.log(a);
arrayCoppy.push(a);
console.log(b);
arrayCoppy.push(b);
console.log(c);
arrayCoppy.push(c);
console.log(arrayCoppy);

//Exercise d:
let person = {
  name: "John",
  age: 30,
  lastName: "Billy",
};

let nameLastName = [...person.name, " ", ...person.lastName];
let string = nameLastName.join("");
console.log(string);

//Exercise e:
let fun = (a, b, ...c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};

fun(1, 2, 3, 3, 4, 5, 6, 8);
