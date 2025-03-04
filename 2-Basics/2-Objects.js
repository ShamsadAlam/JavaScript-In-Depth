// Singleton
// Object.create() --> In this method singleton Object is created.

// Object literals   --> multiple instances of Object is created.
const mySym = Symbol("key1");   // creating symbol

const JsUser = {
    name:"Shamsad",
    "Full Name": "Shamsad Alam",
    [mySym]:"myKey1",
    age:24,
    location:"Kushinagar",
    email:"noble@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

// console.log(JsUser."Full Name"); --> Not Allowed
console.log(JsUser["Full Name"]);
console.log(typeof JsUser[mySym], JsUser[mySym]);

JsUser.email = "shamsad@google.com";
// Object.freeze(JsUser);
JsUser.email = "shamsad@open-ai.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello, JS User");
}

JsUser.greetingTwo = function(){
    console.log(`hello, JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());