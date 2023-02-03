/// In this file we see the api inform of json


// step1: create obj
const obj = {
  name: "Rahul Yadav",
  gender: "Male",
  age: 24,
};

// step2 : convert json formate
const jsonData = JSON.stringify(obj);

// step3 fs require
const fs = require("fs");


// step4  create file with asynchronos
// fs.writeFile("jsonData.json", jsonData, (err, data) => {
// //   console.log("data: ", err);
// console.log(err)
// });


//   step5 for  reading the file 
fs.readFile("jsonData.json","utf-8",(err,data)=>{
console.log(" data :",data)
let convertoOriginal=JSON.parse(data)
console.log("convertoOriginal: ", convertoOriginal);
})