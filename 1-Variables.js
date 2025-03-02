const accountId = 144553;

let accountEmail = "shamsad@gmail.com";
var accountPassword = "12345";
accountCity = "Kushinagar";
let accountState;

// accountId = 2; // not allowed --> const keyword can't be changed.
console.log(accountId);

/*
    prefer not to use var
    because of issue in block scope and functional scope
 */

accountEmail = "sham@sham.com";
accountPassword = "121212121";
accountCity = "Bengaluru";
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
