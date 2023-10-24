///--this keyword define currentcontext
const user = {
    username: "hitesh",
    price: 999,

    welcomemessage: function(){
        // console.log(`${this.username}, welcome to website `);
        // console.log(this);
    }
}
user.welcomemessage()
user.username = "sam"
user.welcomemessage()

//console.log(this) // here we in node environment prefer infinity,

//-- under function this not use 
// function chai() {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()



/////== arrow function without function
// const chai = () =>{
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

////---- basic arrow function 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

///-- implicit arrow function 
// const addTwo = (num1, num2) =>  num1 + num2

//--- add parenthess
// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3,4))