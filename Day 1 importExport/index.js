const { add, sub, mult, divide, sin, tan, random } = require("./oper");

// let para1=Math.floor(Math.random()*10)
// console.log("para1: ", para1);
// let para2=Math.floor(Math.random()*10)
// console.log("para2: ", para2);

// add(para1,para2)
// sub(10,5)
// mul(5,5)
// div(10,2)

const input = process.argv;
// console.log(input[1])

// *************** This is simple if else condition ****************
// if(input[2]==="add"){
//     add(Number(input[3]),Number(input[4]))
// }else if(input[2]==="sub"){
//     sub(Number(input[3]),Number(input[4]))
// }else if(input[2]==="mult"){
//     mult(Number(input[3]),Number(input[4]))
// }else if(input[2]==="divide"){
//     divide(Number(input[3]),Number(input[4]))
// }

//**** Switch Casse use *************** */
switch (input[2]) {
  case "add":
    add(Number(input[3]), Number(input[4]));
    break;
  case "sub":
    sub(Number(input[3]), Number(input[4]));
    break;
  case "mult":
    mult(Number(input[3]), Number(input[4]));
    break;
  case "divide":
    divide(Number(input[3]), Number(input[4]));
    break;

  case "sin":
    sin(Number(input[3]));
    break;

  case "tan":
    tan(Number(input[3]));
    break;
  case "random":
    random(Number(input[3]));
    break;
  default:
    return console.log("invalid number");
}


