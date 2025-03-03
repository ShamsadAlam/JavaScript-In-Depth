// Primitive DataTypes -> Stack Memory
// Non-Primitive DataTypes -> Heap Memory

let myName = "Shamsad Alam"

let anotherName  = myName // A copy (Value) of variable myName's content is passed to anotherName variable
anotherName = "Pintu"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: 'user@google.com',
    upi:'user@ybl'
}

let userTwo = userOne;  // A reference of variable userOne's content is passed to userTwo variable
userTwo.email = 'sham@google.com'
console.log(userOne);
console.log(userTwo);
