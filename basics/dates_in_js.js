//dates 

const myDate = new Date ()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

const myCreatedDate = new Date(2024, 6 , 30,11,3)
let newDate =new Date("04-08-2024")

// console.log(newDate.toLocaleString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let nowDate = new Date()

console.log(nowDate.getDay());
console.log(nowDate.getMonth());


console.log( newDate.toLocaleString('default', {weekday: "narrow"
}));