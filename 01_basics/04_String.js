const name = "Hitesh"
const repocount = 50
//console.log(name + repocount + "value")  --- not use

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

// // string declare 
const gameName = new String('hitesh-sc-ch')
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "  hitesh  "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://kris.com/kris%20bhunia"
console.log(url.replace('%20', '-'))

console.log(gameName.split('-'))