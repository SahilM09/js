const myname = "sahil"
const age = 23

// console.log(name + age);

console.log(`Hello my name is ${myname} and my age is ${age} years old`);

const fullName = new String('sahilmagoo')
// console.log(fullName.__proto__);


// console.log(fullName.length);
// console.log(fullName.toUpperCase());
// console.log(fullName.charAt(4));
// console.log(fullName.indexOf('a'));

const idName = new String('sahil-sm-ms')
console.log(idName.substring(0,3));
console.log(idName.slice(-7,3));


const newString ="  isahil  "
console.log(newString.trim());


const url = "https://sahil.com/sahil%10magoo"

console.log(url.replace('%10', '-'))

console.log( url.includes('sahil'))

console.log(idName.split('-'));