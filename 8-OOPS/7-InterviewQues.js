/*
    Ques- Can we change the Math.PI = 3.14 [which is constant by default] to 5. (SDE-3 Level Ques)
    eg:- console.log(Math.PI)  -> o/p = 3.141592653589793
         Math.PI = 5    // It can't change the value.
         console.log(Math.PI)  -> o/p = 3.141592653589793
*/

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")   // we want to know the Math.PI property of Javascript Engine.
// console.log(descriptor);

/* console.log(descriptor)
    o/p-> {
            value: 3.141592653589793,
            writable: false,
            enumerable: false,
            configurable: false
          }
*/

// Eg:-
const chai = {
    name:'ginger chai',
    price:250,
    isAvailable: true,
    orderChai: function(){
        console.log('chai nhi bani');
        
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:false    // 'name' variable is not iteratable bcz 'enumerable:false' property.
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}