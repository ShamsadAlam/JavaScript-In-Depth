const user = {
    username:"Shamsad",
    loginCount:8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log("this:", this);
        console.log(`username: ${this.username}`)
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    return this;
}
const userOne = new User("Shamsad",8, true);
const userTwo = new User("Alam",10, false);
console.log(userOne);
console.log(userTwo);
/*
    new Keyword- It always create a new / separate copy of the defined class.
    If we don't use new keyword in above two lines, userTwo's assigned value will overwrite the userOne that is not good for collaborating environment.
*/