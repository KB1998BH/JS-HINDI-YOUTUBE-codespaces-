/////////////////--------- reduce method used for cart----////////

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

// using arrow function 
// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
// console.log(myTotal);


const shoppingcart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "java course",
        price: 999
    },
    {
        itemname: "mobile development",
        price: 5999
    },
    {
        itemname: "data science",
        price: 12999
    },
]

 const pricetopay = shoppingcart.reduce((acc, item) => acc + item.price, 0)
 console.log(pricetopay);