const myArr = [10,50,45,6,5]
console.log(typeof myArr)
console.log(myArr);
console.log(myArr[2]);

const myArr2 = new Array(1,2,3,4)
console.log(myArr2);

// Array Methods ---
myArr.push(786)
myArr.pop()

// Shift & Unshift
myArr.unshift(9)    // Add an element '9' at the beginning of the array ie index-'0'
myArr.unshift(15)
myArr.unshift(16)
myArr.unshift(21)
myArr.unshift(29)
myArr.shift()   // remove the element from the beginning of the Array ie index-'0'
myArr.shift()
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(50));

const newArr = myArr.join() // aggregate all the elements of the array and converted it into string.s format
console.log(myArr, typeof myArr);
console.log(newArr, typeof newArr);

// slice, splice
console.log("A ", myArr); // printing original array

const myn1 = myArr.slice(1,3)   // upper bound index '3' is not included
console.log(myn1);    // after applying slice method, our original array is not modified
console.log("B ",myArr);    // after applying slice method, our original array is not modified

const myn2 = myArr.splice(1,6);    // upper bound index '6' is included
console.log(myn2);  // after applying splice method, our original array will get modified.
console.log("C ",myArr);  // after applying splice method, our original array will get modified.

// Arrays concatenations
const marvel_heros = ['thor','Ironman','spiderman']
const dc_heros = ['superman','flash','batman']

marvel_heros.push(dc_heros); // original array gets modified
console.log(marvel_heros);
marvel_heros.pop();

const allHeros = marvel_heros.concat(dc_heros);  // original array will not modified and It returns a new array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]    // Spread Operator
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Shamsad"))
console.log(Array.from("Shamsad"))
console.log(Array.from({name:"Shamsad"}))

let score1 = 100, score2 = 200, score3 = 300;

console.log(Array.of(score1, score2, score3));