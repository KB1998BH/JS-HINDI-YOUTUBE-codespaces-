//const tinderuser = new object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false

//console.log(tinderuser)

const regularuser = {
    email: "kris4556@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            last: "bhunis"
        }
    }
}
//console.log(regularuser.fullname.userfullname.last)

/////----obj merge 
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2)

//--spread operator 
const obj3 = {...obj1, ...obj2}
console.log(obj3)

////--when fetch data from database using array object 
//user[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
// array under array
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('name'));
