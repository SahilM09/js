// const applicationUser = new Object()  ---this is a singleton object
const applicationUser = {}

applicationUser.id ="123abc"
applicationUser.name = "sahil"
applicationUser.isLoggedIn = "false"

console.log(applicationUser);

const regularUser = {
    email: "some@mail.com",
    fullname: {userName:
        {
            firstName:"Sahil",
            lastName:"Magoo"
        }

    }
}
    console.log(regularUser.fullname);

    const obj1 = {1: "a", 2: "b"}
    const obj2 = {3: "a", 4: "b"}
    const obj4 = {5: "a", 6: "b"}

    // const obj3 = Object.assign({}, obj1, obj2, obj4)
    // console.log(obj3);

    const obj3 = {...obj1, ...obj2, ...obj4}
    console.log(obj3);


    const users =[
        {
            id:1,
            email: "s@mail.com"
        },
        {
            id:2,
            email:"m@mail.com"
        }

    ]
    users[1].email
    console.log(applicationUser);
    console.log(Object.keys(applicationUser));  //keys
    console.log((Object.values(applicationUser)));  //values
    console.log((Object.entries(applicationUser)));  //entries


    console.log(applicationUser.hasOwnProperty('isLoggedIn'));