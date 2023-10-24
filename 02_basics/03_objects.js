// singleton 
// object.create

//object literal 

const mySym = Symbol("key1")
const jsUser = {
    name: "Hitesh",
    "full name": "kris bhunis",
    [mySym]: "mykey1",
    age: 18, 
    location: "jaipur",
    email: "kr23@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturaday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])


// jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user")
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())






