const coding = ["js","ruby","java","python","cpp"]
const values = coding.forEach((item)=>{
    // console.log(item);
    // return item;    --> It does not return anything implicitly or explicitly.
})
// console.log(values);

// Filter method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num)=>{
    return num>4;
})
// console.log(newNums);

const books = [
    {title:'Book One', genre:'Fiction', publish:1981, edition:2004},
    {title:'Book Two', genre:'Non Fiction', publish:1992, edition:2008},
    {title:'Book Three', genre:'History', publish:1999, edition:2007},
    {title:'Book Four', genre:'Non Fiction', publish:1989, edition:2010},
    {title:'Book Five', genre:'Science', publish:2009, edition:2014},
    {title:'Book Six', genre:'Fiction', publish:1987, edition:2010},
    {title:'Book Seven', genre:'History', publish:1986, edition:1996},
    {title:'Book Eight', genre:'Science', publish:2011, edition:2016},
    {title:'Book Nine', genre:'Non Fiction', publish:1981, edition:1989},
]

let userBooks = books.filter((item)=>(item.genre == 'History'))
userBooks = books.filter((item)=>(item.publish >= 1995 && item.genre == 'History'))
// console.log(userBooks)

// map method
const newNums2 = myNums.map((num)=>(num+10));
// console.log(newNums2);

const newNums3 = myNums.map((item)=>(item*10)).map((item)=> item+1).filter((item)=> item >=25)  // -> Chaining of function
console.log(newNums3);

// Reduce Method
const myNumbers = [1, 2, 3];
const myTotal = myNumbers.reduce((acc, currval)=>{
    console.log(`acc: ${acc} and currval:${currval}`);
    return acc + currval;
},0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js Course",
        price:2999
    },
    {
        itemName:"py Course",
        price:1999
    },
    {
        itemName:"mobile dev Course",
        price:5999
    },
    {
        itemName:"Data Science Course",
        price:12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item)=>(acc + item.price),0)
console.log(priceToPay);