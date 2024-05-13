// #primiitve data types ---- they are call by value data types

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3
const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
let anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 86866897869869587546846847854874748n
console.log(typeof bigNumber);

//js is dynamically typed language

//#reference type or non primitive --- they are call by reference data types

// array, objects, functions

const cars = ["bmw" , "porsche", "merc"];
let myObj= {

    name: "sahil",
    age: 22,
}

const myFunction = function(){
    console.log("Hello");
}

console.log(typeof outsideTemp);
console.log(typeof myFunction);
//type of function is object function