const isUserLoggedIn = true;
const debitCard = true;
if(isUserLoggedIn && debitCard){
    console.log(`user is LoggedIn and allowed for shopping.`);
}

const loginFromGoogle = false;
const loginFromEmail = true;

if(loginFromEmail || loginFromGoogle){
    console.log(`user loggedIn`);
}

const month = 2;
switch(month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    
    default:
        console.log("default case matched.")
        break;
}

// ============= Truthy & Falsy Values ==================

// Truthy Values:- true, "0", "false", " ", [], {}, function(){} 
// Falsy Values:- false, 0, -0, BigInt 0n, "", null, undefined, NaN 

const userEmail = "sham@gmail.com"

if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Don't have user Email");
}

const arr = [];
if(arr.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined
// It is used for handling exceptions and Errors
let val1;
val1 = 5 ??10
val2 = null ??10
val3 = undefined ??10
val4 = null ?? undefined ?? 10
console.log(`val1: ${val1}, val2: ${val2}, val3: ${val3}, val4: ${val4}`);

// Ternary Operator
const iceTeaPrice = 100
iceTeaPrice <= 80 ?console.log("less than 80"): console.log("more than 80");
