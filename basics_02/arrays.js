//array

const myArray = [0, 1, 2, 3, 4, 5] 

const myArr2 = ["sahil", "magoo", "hello"]

const myArr =new Array ("bmw", "porsche", "merc");

console.log(myArr2[2]);

//Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()    //removes the last element of the array
myArray.unshift(1)
myArray.shift()  //removes the first element of the array
console.log(myArray.includes(9));
console.log(myArray.indexOf(3));

const newArr = myArray.join()   //basically araay to string conversion
console.log(myArray);
console.log(newArr);
console.log(typeof newArr);


//slice and splice

console.log("A", myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B", myArray);
const myn2 = myArray.splice(1,3)
console.log(myn2);

console.log("C", myArray);
//basically slice does not change the array whereas splice modifies the array