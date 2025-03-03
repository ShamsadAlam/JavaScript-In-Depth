const name = "shamsad";
const repoCount = 57;

console.log(name+repoCount+" Value");

console.log(`hello nmy name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ShamsadAl')
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
