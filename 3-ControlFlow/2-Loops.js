// For Loop
for(let index = 0; index <10; index++){
    // console.log(index);
}

// For-of Loop
const arr = [1,2,3,4,5,"Noble-Person",{name:"ShamsadAlam",email:"noble@gmail.com"}]
for(const num of arr){
    // console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings){
    // console.log(`Each character is ${greet}`);
}

// Maps --> It holds (key,value) pairs and does not contain duplicate keys.
const map = new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('IT',"Italy")
map.set('IN',"India")
// console.log(map.get('IN'));
// console.log(map);
// map.delete('IT')
// console.log(map.keys());
// console.log(map.values());

for(const [key, val] of map){
    // console.log(key, val)
}

// For In Loop

const myObj = {
    game1:'NFS',
    game2:'spiderman',
    game3:'avengers'
}

// for (const [key, val] of myObj) {
//     console.log(key, val)    // --> produces error ie 'myObj is not iterable'
// }

for (const key in myObj){
    // console.log(key, myObj[key]);
}

const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    // console.log(key,programming[key])
}

// For Each Loop
const coding = ["js","ruby","java","python","cpp"]

function printMe(item){
    // console.log(item);
}
// coding.forEach(printMe)

coding.forEach((item,index, arr)=>{
    // console.log(item,index, arr);
})

const myCoding = [
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item, item.languageName, item.languageName);    
})