// singleton
// Object.create


//symbol
const mySym = Symbol("hello")

// object literals
const JsUser ={
    name: "sahil",
    age: 23,
    sname: "magoo",
    email: "sahil@google.com",
    isLogged: false,
    lastLoginDays: ["Monday", "Tuesday"],
    "User id": 35,
    [mySym]: "world" //it is used as a string so we declare it in []
}

// 2 methods to print 

console.log(JsUser.email);
console.log(JsUser["User id"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]); 


JsUser.email = "sahil@mail.com"
console.log("A", JsUser.email);
// Object.freeze(JsUser)       //freeze is used to lock object
JsUser.email = "sahil@apple.com"
console.log("B", JsUser.email);

console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());