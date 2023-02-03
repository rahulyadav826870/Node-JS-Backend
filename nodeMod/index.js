const chalk = require("chalk")
const color=require("chalk")

// console.log(color.blue('Hello world!'))

const valid=require("validator")

let gmail=valid.isEmail("rahul@gmail.com")
// console.log("gmail: ", gmail);cl


const print =gmail ? color.blue.bgGreen.bold('Email True'):color.red.bgRed.bold("Email False")
console.log("print: ", print);
