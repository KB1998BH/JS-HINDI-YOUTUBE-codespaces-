const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function(val) {
//     console.log(val)
// })

// using arrow function here 
coding.forEach( (item) => {
    //console.log(item);
})

// function reference 
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

/////-- there pass not only item 
coding.forEach((item,index, arr)=> {
    //console.log(item, index, arr);
})


const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "phython",
        languagefilename: "phy"
    }
]
mycoding.forEach((item) => {
  console.log(item.languagename);
})