class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Shamsad","noble@gmail.com","1234")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// Behind the Scene--

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User("Noble", "sham@gmail.com","45678")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());


// Inheritance
class User3{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User3{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username} sir.`);
    }
}

const user = new Teacher("Sham","sham@gmail.com","7896");
user.addCourse();
user.logMe();

const user2 = new User3("Noble");
user2.logMe();
// user2.addCourse();   --> parent class does not have access of it's Child class functions.

console.log(user === user2);
console.log(user instanceof Teacher);
console.log(user instanceof User3);

// Static Props--
class User4{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const Shamsad = new User4("Shamsad");
console.log(Shamsad.logMe());
// console.log(Shamsad.createId());     --> Not accessible due to 'static' keyword.

class Teacher2 extends User4{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone","i@google.com")
iphone.logMe();
// console.log(iphone.createId());  --> Not accessible in child class as well.