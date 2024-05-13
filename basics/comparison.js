//basic comparisions operators
/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
*/

console.log("2" > 1);
console.log(2 > "1");

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//the reason for this is comparison operators convert null to  a no. i.e. 0 & equality operators treat differently

//===checks strictly, it also checks the datatype

console.log("2"==2);
console.log("2"===2);
