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




// ---------
// reusable interfaces
// ---------


interface hasQuantity {
  quantity: number,
}

const something: hasQuantity = { quantity: 50};


function printQuantity(item: hasQuantity): void {
  console.log(`the quantity of the item is ${item.quantity}`)
}

const fruit = {
  name: 'mango', 
  quantity: 50,
}
const vehicle = {
  type: 'car',
  quantity: 3,
}
const persons = {
  name: 'mario',
  age: 30,
}

printQuantity(fruit);
printQuantity(vehicle);

// invoking the printQuantity function using the persons variable will give an error
// due to the type not being present from the interface we are using within the function

// printQuantity(persons);


// if you attempt to use a new key or attempt to state one that wasn't defined in the interface,
// you will throw an error. unlike when creating a template literal, you can't have key value
//pairs exist that weren't defined in the initial interface. 

printQuantity({quantity: 50})





// ---------
// function signatures
// ---------


type Calculator = (numOne: number, numTwo: number) => number

function multiplyTwoNumnbers(first: number, second: number) {
  return first * second
}

function squareNumber(num: number) {
  return num * num
}

function joinTwoNumbers(numOne: number, numTwo: number) {
  return `${numOne}${numTwo}`
}

let calcs: Calculator[] = [];

calcs.push(multiplyTwoNumnbers)
calcs.push(squareNumber)
//calcs.push(joinTwoNumbers)

// ---------
// function signatures on interfaces
// ---------


interface HasArea {
  name: string,
  calcArea: (a: number) => number
}

const shapeOne: HasArea = {
  name: 'square',
  calcArea(l: number) {
    return 1 * 1
  }
}

const shapeTwo: HasArea = {
  name: 'circle',
  calcArea(r: number) {
    return Math.PI * r^2
  }
}



// ---------
// extending interfaces
// ---------



interface HasFormatter {
  format(): string
}

interface Bill extends HasFormatter {
  id: string | number,
  amount: number,
  server: string
}

const userTwo = {
  id: 1,
  format(): string {
    return `This user has an id of ${this.id}`
  }
}

const bill = {
  id: 2, 
  amount: 50,
  server: 'mario',
  format(): string {
    return `Bill with id ${this.id} has $${this.amount} to pay`
  }
}

function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}

function printBill(bill: Bill): void {
  console.log('server:', bill.server)
  console.log(bill.format())
}

printFormatted(userTwo);
printFormatted(bill);
printBill(bill)





// ---------
// extending type aliases
// ---------



type Persons = {
  id: string | number,
  firstName: string
}


type Users = Persons & {
  email: string,
}

const personOne = {
  id: 1, 
  firstName: 'mario',

}

const personTwo = {
  id: '2',
  firstName: 'yoshi',
  email: 'yoshi@whatup.com',
}

const personThree = {
  email: 'peach@howdyp.net'
}


function printUser(user: Users) {
  console.log(user.id, user.email, user.firstName);
}

// printUser(personOne)
printUser(personTwo);
// printUser(personThree);



// ---------
// classes 101
// ---------

type Base = 'classic' | 'thick' | 'thin' | 'garlic'


class Pizza {
  constructor(title: string, price: number) {
    this.title = title
    this.price = price
  }
  title: string
  price: number
  base: Base = 'classic'
  toppings: string[] = []

  addTopping(topping: string): void {
    this.toppings.push(topping)
  }

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping)
  }
  selectBase(b: Base): void {
    this.base = b;
  }
}

const pizza = new Pizza('mario special', 15, );

pizza.selectBase('garlic');
pizza.addTopping('mushrooms');
pizza.addTopping('olives'); 


console.log(pizza);