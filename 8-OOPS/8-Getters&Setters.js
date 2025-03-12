class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return (this._password)*Math.random()*10+1
        // but we are returning some arbitrary value.
    }

    set password(value){
        this._password = value;
        // we are setting original value of password
    }
}

const Shamsad = new User("Shamsad.ai","1234")
console.log(Shamsad.email);
console.log(Shamsad.password);

// Function Method to achieve this--
function User2(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })
}

const user = new User2("chai@chai.com","chai")
console.log(user.email)

// Object Method to achieve this--
const User3 = {
    _email:'h@hc.com',
    _password:'abc',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User3)
console.log(tea.email);
