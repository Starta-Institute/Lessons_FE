// console.log("Hello world");

// const name = prompt("Write your name")
// console.log("Hello " + name + "." + "How are you?"); // concatenation
// console.log(`Hello ${name}.How are you?`); // interpolation


// // string & number 
// console.log(5);
// console.log("5");

// console.log(typeof(name));
// console.log(typeof(5));


const r = 12
const g = 34
const b = 14

console.log("rgb(" + r + ", " + g + ", " + b + ");" );
console.log(`rgb(${r}, ${g}, ${b});`) 

const value_1 = 12
const value_2 = 4

console.log(value_1 + value_2); //сложение 
console.log(value_1 - value_2); //вычитание
console.log(value_1 * value_2); //умножение 
console.log(value_1 / value_2); //деление 
console.log(value_1 % value_2); //взятие остатка от деление 
console.log(value_1 ** value_2); //возведение в степень 

console.log("=================================================");
const a = 2 
const d = "2"
console.log(typeof String(a));
console.log(typeof Number(d));
console.log(typeof +d);
console.log(typeof ("" + a));

console.log("2" + 2); // число типа --> string // "22"
console.log("2" - 2); // число типа --> number // 2 - 2 = 0

console.log("=======================================");

console.log(Number(a));
console.log(typeof NaN);

console.log("b" + "a" + Number("c") + "a");

console.log("================================");

// const age = prompt("Write your age")
// console.log(`Your age is ${age*365*24*60}`);

// const number = prompt("Write a number")
// console.log(`pow of ${number} is ${number**2}`);

// const num_1 = prompt("Write first number")
// const num_2 = prompt("Write second number")

// console.log(`num_1 + num_2 = ${+num_1 + +num_2}`);


const z = "2" // string
const x = 2 // number

// if(z === x){ //2 == 2
//     console.log("z = x");
// }

console.log("z == x");// true ==> 2 == 2
console.log("z === x"); // false ===> string not = number

if (z == x) {
    console.log("a == b");
} else {
    console.log("a ! = b");
}

if (z > x){
    console.log("z > x");
} else {
    console.log("z < x");
}

if ( z => x){
    console.log("z => x");
} else {
    console.log("z <= x");
}

if ( z !== x){
    console.log("z !== x");
} else {
    console.log("z == x");
}