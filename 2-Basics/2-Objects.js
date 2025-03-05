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
// Object.freeze(JsUser);   // freezes the object
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

//   Advanced ---->

// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc"
tinderUser.name = "sham"
tinderUser.iseLoggedIn = false;
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

const regularUser = {
    email:"some@gmai.com",
    fullName:{
        userFullName:{
            firstName:"Shamsad",
            lastName:"Alam"
        }
    }
}
console.log(regularUser.fullName.userFullName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

const obj4 = Object.assign({},obj1, obj2, obj3);
console.log(obj4)

const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5);

const users = [
    {
        id:1,
        email:'noble@gmail.com'
    },
    {
        id:2,
        email:'noble2@gmail.com'
    },
    {
        id:3,
        email:'noble3@gmail.com'
    },
]
console.log(users[1].email);

const course = {
    courseName: "JavaScript In Depth",
    price:"99$",
    courseInstructor:"ShamsadAlam"
}

const {courseName, price, courseInstructor:Instructor} = course
console.log(courseName);
console.log(price);
console.log(Instructor);