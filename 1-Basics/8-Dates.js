// let myDate = new Date()
// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString('en-IN'));
// console.log(myDate.toISOString());

// const myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toString());

// const myCreatedDate2 = new Date(23,0,23,5,3);
// console.log(myCreatedDate2.toLocaleString());

// const myCreatedDate3 = new Date("2025-03-04");
// console.log(myCreatedDate3.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);   // current time in milliseconds
// console.log(myTimeStamp/1000);   // current time in Seconds presented in decimal
// console.log(Math.floor(myTimeStamp/1000)); // round of value in seconds

let newDate = new Date();
// console.log(newDate.toString());
// console.log(newDate.toLocaleString());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getTime());
// console.log(newDate.getSeconds());
// console.log(newDate.getTimezoneOffset());

console.log(newDate.toLocaleString('default',{
    weekday:'long'
}));
