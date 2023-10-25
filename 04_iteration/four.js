const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift : "swift by apple"
}
// for in loop use for object 
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

////-- array
const programming = ["js", "css", "java"]
for (const key in programming) {
    console.log(programming[key]);
}

