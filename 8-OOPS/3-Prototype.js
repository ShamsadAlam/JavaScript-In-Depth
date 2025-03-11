let myName = "shamsad     "
console.log(myName.length); // Shamsad -> 7 character but dues to spaces it exceeded to 12.
console.log(myName.trim().length);  // this will result 7 character.

// But we want to create a specified method 'trueLength' to remove the extra spaces from the string without using any inbuilt functions.
console.log(myName.trueLength);

String.prototype.trueLength = function(){
    console.log(`True length is: ${this.trim().length}`);
}
myName.trueLength();    // This is how we can create our own method to fulfill our tasks
"Varsha".trueLength();
"Noble".trueLength();



// Understanding how to do that particular task--
let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.Shamsad = function(){
    console.log(`Shamsad is present in all objects`);
}

heroPower.Shamsad();    // Accessible
myHeroes.Shamsad();     // Accessible

Array.prototype.heyShamsad = function(){
    console.log(`Shamsad says Hello`);   
}

myHeroes.heyShamsad();      // Accessible
// heroPower.heyShamsad();     // Not Accessible