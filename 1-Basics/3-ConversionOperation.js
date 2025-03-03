let score = "33"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let score2 = "33abc"
console.log(typeof score2);
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score3 = null
console.log(typeof score3);
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let score4 = undefined
console.log(typeof score4);
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

/* 
    score ==> valuesInNumber:
    eg: "33" ==> 33
        "33abc" ==> NaN
        undefined ==> NaN
        null ==> 0
        true ==> 1, false ==> 0
*/

let isLoggedIn = "shamsad"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
    1 ==> true, 0 ==> false
    "" ==> false
    " " or "Shamsad" ==> true

*/

/* ================= Operations =============== */

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " shamsad"
let str3 = str1+str2;
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1 + 2 + 2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")