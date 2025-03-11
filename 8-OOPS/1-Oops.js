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