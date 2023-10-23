// # primitive data types 

// 7 types : String, Number, boolean, null, undefined, symbol, BigInt 
const str = 100;
const num = 100.3

const isLoggedIn = false;
const outsideTemp = null
let useEmail

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const BigIn = 1111122222222n

//Reference(Non primitive)

//Array, objects, functions, 
const heroes = ["shaktiman", "naagraj", "daga"];
let myobj = {
    name: "hitesh",
    age: 22,
}
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myobj)


// ****************** Memory 
//Stack(primitive), Heap(Non-primitive)

let myYoutubename = "kris@.com"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

//**** heap */
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@goggle.com"

console.log(userOne)
console.log(userTwo)