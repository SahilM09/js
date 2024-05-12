const accId = 897678
let accEmail = "sahil@gmail.com"
var accPassword = "123456"
accCity = "Delhi"
let accState;
// accId = 2 // not allowed

accEmail = "sahil@apple.com"
accPassword ="121212"
accCity = "Mumbai"
console.log(accId);
/* 
prefer not to use var bec of issue in block scope & functional scope
*/
console.table([accId, accEmail, accPassword, accCity, accState])