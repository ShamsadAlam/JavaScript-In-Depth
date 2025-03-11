// NEW KEYWORD ---->
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    return this;
}
const userOne = new User("Shamsad",8, true);
const userTwo = new User("Alam",10, false);
console.log(userOne);
console.log(userTwo);
/*
    new Keyword- It always create a new / separate copy of the defined class.
    If we don't use new keyword in above two lines, userTwo's assigned value will overwrite the userOne that is not good for collaborating environment.
*/


function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 12;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

// initialized a function with the help of prototype but we can't access these function without 'new' keyword.

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

// 'new' keyword is used to access the methods initialized using prototype.
const chai = new createUser("chai",25);
const tea = new createUser("tea",250);

chai.printMe()
