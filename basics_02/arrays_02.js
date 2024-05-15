const cars = ["bmw", "porsche", "merc", "audi"]
const cars2 = ["tata", "toyota", "tesla", "mahindra"]

// cars.push(carModels)


const out1 = cars.concat(cars2)
console.log(out1);

const allcars = [...cars, ...cars2] //spread is used to merge 2 or more arrays at 1 time

console.log(allcars);

const anotherArr = [1, 2, 3,[4, 5, 6], 7, [6, 7,[4, 5]]]

const realArr = anotherArr.flat(Infinity) // merges all subarray into 1 single array
console.log(realArr);

console.log(Array.isArray("Sahil"))
console.log(Array.from("Sahil"));

console.log(Array.from({name: "sahil"})) //imp

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1, score2, score3));
