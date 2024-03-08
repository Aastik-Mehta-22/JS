const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// accountId =2; //not allowed
accountEmail = "hc@hc.com";
accountCity = "Bengaluru";
accountPassword = "21212121";
console.log(accountId);

/*
preffered not to use var because of issue in block scope or functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity]);