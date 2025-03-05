// function addTwoNumbers(number1, number2){
//     return number1+number2;
// }
// const result = addTwoNumbers(3,5);
// // console.log("result: ", result);

// function loginUserMessage(username="sham"){
//     if(!username){
//         return console.log("Please enter a username")
        
//     }
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("Shamsad"))

// function calculateCartPrice(...num1){
//     return num1;
// }
// // console.log(calculateCartPrice(200,400,600,2000))

// const user = {
//     username:"Shamsad",
//     price:599
// }

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
// }
// handleObject(user);
// handleObject({
//     username:"Alam",
//     price:"799"
// });

// const myArr = [200,400,600,800];
// function SumofArray(arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(SumofArray(myArr));
// console.log(SumofArray([10,20,50,60]));

// ============ Arrow Functions ================

const user = {
    username:"Shamsad",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website.`)
        // console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Sham"
// user.welcomeMessage();

// console.log(this);

function chai(){
    let username="Shamsad"
    console.log(this.username); // This only works with Objects, Not in functions
}
chai()

const chai2 =function(){
    let username="Shamsad"
    console.log(this.username); // This only works with Objects, Not in functions
}
chai2()

const chai3 = () => {
    let username="Shamsad"
    console.log(this.username); // This only works with Objects, Not in functions
}
chai3()

const addTwo = (num1, num2) =>{
    return num1+num2;
}   // Explicit return function
console.log(addTwo(4,5));

const addTwo2 = (num1, num2) => num1+num2   // Implicit return function ie 'return' keyword is not explicitly used, It will automatically return the value.
console.log(addTwo2(4,5));

const addTwo3 = (num1, num2) => num1+num2   // Implicit return function ie 'return' keyword is not explicitly used, It will automatically return the value.
console.log(addTwo3(4,5));

const myfun = (num1,num2) => ({username:"Shamsad"}) // It will implicitly return the defined Object.
console.log(myfun(3,4));

