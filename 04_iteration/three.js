// for of -- array specific 

// ["", "", ""] -- array of string 
//[{}, {}, {}] -- array of object 

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world"
// for (const greet of greetings) {
//     console.log(`each character is ${greet}`);
// }

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "united state o f america")
map.set('Fr', "France")

//console.log(map);
for (const [key, value] of map) {
    console.log(key, '->', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}
for (const [key, value] of myObject) {
    console.log(key, ';-', value); // myObject is not iterable
}




