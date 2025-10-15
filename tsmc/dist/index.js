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
// if we dont type the return type for functions, it will infer as to what type you actually want to
// return for you. Just like any other instance, if you attempt to force the output of a type that isn't
// congruent with the type of data it is receiving, you will get an error.
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting('mario', 'hello');
// ---------
// any type
// ---------
// the any type is basically reverting back to regular js since it will bypass a specific type
let age;
let title;
age = 30;
age = false;
title = 25;
title = {
    hello: 'world'
};
// ---------
// any type in arrays
// ---------
// the any type in arrays works the same way, you can use and push any type of value and it will allow it
// but again, this will basically case you to revert back to regular js
let newThings = ['hello', true, 30, null];
// ---------
// functions & any
// ---------
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello');
// useful when migrating from js to ts
// because using any won't cause errors initially
// ---------
// tuples
// ---------
let newPerson = ['mario', 30, true];
// ---------
// tuples examples
// ---------
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [98.2, 20.1];
function useCoord() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoord();
// ---------
// named tuples
// ---------
let newUser;
newUser = ['peach', 25];
console.log(newUser);
const authorOne = { name: 'mario', avatar: '/img/mario/png' };
const newPost = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne,
};
// ---------
// as function argument types
// ---------
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// ---------
// with arrays
// ---------
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: 'mario', score: 75 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
formatUser(userOne);
formatUser({ name: 'yoshi', score: 100 });
// ---------
// union type
// ---------
let someId;
someId = 1;
someId = '2';
let email = null;
email = 'mario@netninja.dev';
email = null;
let anotherId;
anotherId = '124kjdsflkj';
anotherId = 23423;
// ---------
// union type pitfalls
// ---------
// function swapIdType(id: Id): Id {
//   // can only use props and methods common to
//   // both number and string types
//   // parseInt(id) --> not allowed
//   // parseInt(5)
//   return id
// }
// ---------
// type guards
// ---------
function swapIdType(id) {
    if (typeof id === 'string') {
        // can use string methods now
        return parseInt(id);
    }
    else {
        // can use number methods and properties
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
console.log(idOne, idTwo);
// ---------
// tagged interfaces
// ---------
