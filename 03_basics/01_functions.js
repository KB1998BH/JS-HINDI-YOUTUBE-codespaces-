function sayMyName(){
    console.log("H")
    console.log("R");
    console.log("i");
    console.log("k");
}
//sayMyName()

// function addTwoNumbers(number1, number2) {
//    console.log(number1 + number2); 
// }

function addTwoNumbers(number1, number2) {
    //console.log(number1 + number2); 
    let result = number1 + number2
    return result
 }

 const result = addTwoNumbers(3,5)
//console.log("Result: ", result);

function loginUsermessage(username){
    if(username == undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUsermessage("hitesh"))
// console.log(loginUsermessage("hitesh"))

///////--- Rest operators ----////
// function calculatecartprice(...num1) {
//   return num1;
// }
// console.log(calculatecartprice(200, 800, 900))

function calculatecartprice(val1, val2, ...num1) {
    return num1;
  }
  console.log(calculatecartprice(200, 800, 600, 500, 900))


const user = {
    username : "hitesh",
    price: 199
}
function handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleobject(user)
////--- direct object pass 
handleobject({
    username: "sam",
    price:399
})


//////---array passs

const myNewArray = [200,400,100, 600]
function returnedsecondvalue(getarray){
    return getarray[1]
}
console.log(returnedsecondvalue(myNewArray))
