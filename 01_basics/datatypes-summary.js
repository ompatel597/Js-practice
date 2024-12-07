//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "Jonathan",
    num : 25
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ===============================================================

// stack ( primitive ) - String, number, boolean, BigInt, symbol, Null, undefined
// &
//  Heap ( Non-primitive ) -  Array, function, object

const Jon = [1,2,3,4,5,6,7,8]

const Num = Jon;

console.log(Num.pop());
console.log(Jon);

