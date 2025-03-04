const name = "shamsad";
const repoCount = 57;

console.log(name+repoCount+" Value");

console.log(`hello nmy name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shamsad-Al-noble')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const newStringOne = "     Shamsad      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://shamsad%20portfolio.vercel.com'
console.log(url.replace('%20','-'));

console.log(url.includes('sham'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));


