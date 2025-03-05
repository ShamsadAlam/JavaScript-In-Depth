if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)    // --> It throws an error that 'a' is not defined which is Good
// console.log(b)   //  --> It throws an error that 'b' is not defined which is Good
console.log(c)  //   --> It does not throws an error

/*
    NOTES- It's generally recommended to use "let" and "const" over "var" when declaring variables in JavaScript.
    This is because they have more predictable behavior, and can help prevent unexpected scope problems

    Q:- What is var, let and const in JavaScript?
    Ans:-   var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
            let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
            const: Declares block-scoped variables that cannot be reassigned after their initial assignment.
*/

let a = 300 // Global Scope
if(true){
    let a = 10  // Blocked Scope
    let b = 20      
    // console.log("Inner: ",a);
}
console.log(a);

function One(){
    const username = "Shamsad"
    function Two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    -> It throws and Error
    Two();
}
One();

if(true){
    const username = "Shamsad-"
    if(username === "Shamsad-"){
        const website = "youtube"
        console.log(username+website);
    }
    // console.log(website) --> It throws an Error
}
// console.log(username);   --> It also throws an error

console.log(addOne(5)); // It does not throws an error
function addOne(num){
    return num+1;
}

// These are two different methods of defining a function

console.log(addTwo(5)); // But It throws an error ie 'Cannot access 'addTwo' before initialization'.
const addTwo = function(num){
    return num+2;
}
