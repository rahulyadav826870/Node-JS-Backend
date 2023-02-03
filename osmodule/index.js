const fs =require("fs")

fs.mkdir("osmod",(err)=>{
console.log("file created")
})

fs.writeFile("../osmod/osmod.js",(err)=>{
    console.log("done")
})