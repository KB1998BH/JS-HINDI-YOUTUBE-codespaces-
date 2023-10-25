const coding = ["js", "ruby", "java", "python", "cpp"]

//  const values = coding.forEach( (item) => {
//     console.log(item);
//    // return item
// })

// console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9]
//const newNums = mynums.filter( (nums) => nums > 4)

// if we assign scope then should be used return keyword 
// const newNums = mynums.filter( (nums) => {
//     return nums>4
// })

////////-- use foreach loop----/////////
// const newNums = []

// mynums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books =[
    {title: 'Bool One', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Bool two', genre: 'History', publish: 1986, edition: 2012},
    {title: 'Bool three', genre: 'science', publish: 2011, edition: 2016},
    {title: 'Bool four', genre: 'Non-Fiction', publish: 1998, edition: 2010},
];
//const userbooks = books.filter((bk) => bk.genre === 'History')

const userbooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === "science"
})
console.log(userbooks);
