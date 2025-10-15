// ---------
// Arrays
// ---------



let names: string[] = ['mario', 'luigi', 'peach'];
let ages: number[] = [25, 28, 24];


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

let things  = [1, true, 'hello']

const t = things[0];

// ---------
// Object literals
// ---------

let user: {firstName: string, age: number, id: number} = {
  firstName: 'mario',
  age: 30,
  id: 1,
}


user.firstName = 'peach'
user.id = 2

// ---------
// type inference with object literals
// ---------


let person = {
  name: 'luigi',
  score: 35
}

person.name = 'bowser'
person.score = 40


const score = person.score;
console.log(score);



// ---------
// functions
// ---------


function addTwoNumbers(a:number, b:number): number {
  return a + b
}


const subtractTwoNumbers = (a: number, b: number): number => {
  return a - b;
}

addTwoNumbers(3, 9)
subtractTwoNumbers(10, 3);


function addAllNumbers(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0)
  console.log(total);


}

addAllNumbers([5, 7, 9, 11, 3, 2, 1])


// ---------
// return type inference
// ---------

// if we dont type the return type for functions, it will infer as to what type you actually want to
// return for you. Just like any other instance, if you attempt to force the output of a type that isn't
// congruent with the type of data it is receiving, you will get an error.


function formatGreeting (name: string, greeting: string) {
  return  `${greeting}, ${name}`
}

const result = formatGreeting('mario', 'hello');


// ---------
// any type
// ---------

// the any type is basically reverting back to regular js since it will bypass a specific type


let age: any;
let title;

age = 30;
age = false;

title = 25
title = {
  hello: 'world'
}


// ---------
// any type in arrays
// ---------

// the any type in arrays works the same way, you can use and push any type of value and it will allow it
// but again, this will basically case you to revert back to regular js

let newThings: any[] = ['hello', true, 30, null]



// ---------
// functions & any
// ---------

function addTogether(value: any): any {
  return value + value;
}

const resultOne = addTogether('hello');


// useful when migrating from js to ts
// because using any won't cause errors initially



// ---------
// tuples
// ---------

let newPerson: [string, number, boolean] = ['mario', 30, true]


// ---------
// tuples examples
// ---------

let hsla: [number, string, string, number]

hsla = [200, '100%', '50%', 1]


let xy: [number, number]

xy = [98.2, 20.1]

function useCoord(): [number, number] {
  const lat = 100;
  const long = 50;

  return [lat, long]
}

const [lat, long] = useCoord();

// ---------
// named tuples
// ---------


let newUser: [name: string, age: number]

newUser = ['peach', 25]
console.log(newUser)


// ---------
// interfaces
// ---------

interface Author {
  name: string,
  avatar: string,
}

const authorOne: Author = {name: 'mario', avatar: '/img/mario/png'}


interface Post {
  title: string,
  body: string,
  tags: string[],
  create_at: Date,
  author: Author
}

const newPost: Post = {
  title:'my first post',
  body: 'something interesting',
  tags: ['gaming', 'tech'],
  create_at: new Date(),
  author: authorOne,
}


// ---------
// as function argument types
// ---------


function createPost(post: Post):void {
  console.log(`Created post ${post.title} by ${post.author.name}`)
}

createPost(newPost)

// ---------
// with arrays
// ---------


let posts: Post[] = [];

posts.push(newPost)



// ---------
// type aliases
// ---------

//example 1 - tuple

type Rgb = [number, number , number]

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b]
}

const colorOne = getRandomColor()
const colorTwo = getRandomColor()
 console.log(colorOne, colorTwo);

//example 2 - object literal

type User = {
  name: string,
  score: number
}

const userOne: User = {name: 'mario', score: 75}

function formatUser(user: User): void {
  console.log(`${user.name} has a score of ${user.score}`)
}

formatUser(userOne);
formatUser({ name: 'yoshi', score: 100 })



// ---------
// union type
// ---------


let someId: number | string


someId = 1;
someId = '2';


let email: string | null = null

email = 'mario@netninja.dev'
email = null

type Id = number | string

let anotherId: Id;

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

function swapIdType(id: Id) {
  if (typeof id === 'string') {
    // can use string methods now

    return parseInt(id)
  } else {
    // can use number methods and properties

    return id.toString()
  }
}

const idOne = swapIdType(1);
const idTwo = swapIdType('2');

console.log(idOne, idTwo);

// ---------
// tagged interfaces
// ---------


interface NewUser {
  type: 'user'
  username: string,
  email: string,
  id: Id
}

interface Person {
  type: 'person'
  fristname: string,
  age: number,
  id: Id
}

function logDetails(value: NewUser | Person): void {
  if(value.type === 'user') {
    console.log(value.email, value.username)
  } 
  if(value.type === 'person') {
    
  }
}