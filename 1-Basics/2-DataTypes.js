"use strict"; // treat all JS code as newer version

// alert(3+3) // -> It show Error bcs we are using Node.js, not browser

/*
Types of DataTypes - 
(1) Primitive - 7 Types:
    1. Number => 2^53 range
    2. BigInt
    3. string
    4. boolean => true/false
    5. Null => stand-alone value
    6. undefined => values are not assigned yet
    7. symbol => unique

(2) Non-Primitive (Reference) - 
    1. Array
    2. objects
    3. Functions
*/
console.log(typeof undefined); // -> o/p- undefined
console.log(typeof null); // -> o/p- object

// Symbols-
const id = Symbol('123');
const AnotherId = Symbol('123');
console.log(id === AnotherId);

const heroes = ["shaktiman","naagraj","doga"];       // Array

let myObj = {
    name:'shamsad',
    age:24
}       // Object

const myFunction = function(){
    console.log("Hello, World");
}
myFunction();