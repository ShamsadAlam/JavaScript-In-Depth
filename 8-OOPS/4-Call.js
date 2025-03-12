function setUsername(username){
    // Complex DB Calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email;
    this.password = password;
}

const chai = new createUser("Shamsad","user@gmail.com","12356");
console.log(chai);
