function addTwoNumbers(number1, number2){
    return number1+number2;
}
const result = addTwoNumbers(3,5);
// console.log("result: ", result);

function loginUserMessage(username="sham"){
    if(!username){
        return console.log("Please enter a username")
        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Shamsad"))

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,600,2000))

const user = {
    username:"Shamsad",
    price:599
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user);
handleObject({
    username:"Alam",
    price:"799"
});

const myArr = [200,400,600,800];
function SumofArray(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(SumofArray(myArr));
console.log(SumofArray([10,20,50,60]));