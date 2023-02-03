const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
//   fs.readFile("input.txt", (err, data) => {
//     res.end(data);
//   });

const reqStream= fs.createReadStream("input.txt")

// reqStream.on("data",(chunkData)=>{
//     res.write(chunkData)
// })
// reqStream.on("end",()=>{
//     res.end()
// })

// reqStream.on("error",(err)=>{
//     console.log(err)
//     res.end("file in not find")
// })

reqStream.pipe(res)
});

server.listen("1200","127.0.0.1",()=>{
    console.log("server is running")
})