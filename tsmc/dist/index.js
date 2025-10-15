"use strict";
// ---------
// Arrays
// ---------
Object.defineProperty(exports, "__esModule", { value: true });
let names = ['mario', 'luigi', 'peach'];
let ages = [25, 28, 24];
names.push('toad');
ages.push(35);
// ---------
// type inference with arrays
// ---------
// TS will automatically infer what data type you are using if you don't assign one
// The same output will occur when you attempt to pass a different value type to the array in this case.
// You will get an error if the data type is different than the existing array data type inferred
let fruits = ['apples', 'pears', 'mango'];
fruits.push('peaches');
const f = fruits[3];
console.log(f);
// you can add different value types but when you try to pull a value from the array, it wont
// know exactly what type it is pulling out. This is called a union type
let things = [1, true, 'hello'];
const t = things[0];
// ---------
// Object literals
// ---------
let user = {
    firstName: 'mario',
    age: 30,
    id: 1,
};
user.firstName = 'peach';
user.id = 2;
// ---------
// type inference with object literals
// ---------
let person = {
    name: 'luigi',
    score: 35
};
person.name = 'bowser';
person.score = 40;
const score = person.score;
console.log(score);
// ---------
// functions
// ---------
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(3, 9);
subtractTwoNumbers(10, 3);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
// ---------
// return type inference
// ---------
