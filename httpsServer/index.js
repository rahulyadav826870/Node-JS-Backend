const https = require("http");

const fs = require("fs");

const data = fs.readFileSync(`../userApi/userData.json`, "utf-8"); // we get the data from here   video 19
const ojbData = JSON.parse(data); /// now we conver the data inform of ojbect

// khud ka server bana rahe h with the help of thapad nodejs video , in this  file we use http ,createServer, writeHead,req,res,end
const server = https.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello from Rahul Side");
  } else if (req.url === "/about") {
    res.end("This is About Page");
  } else if (req.url === "/contact") {
    res.end("This is Contact page");
  } else if (req.url === "/userApi") {
    res.writeHead(200, "content-type:application/json");  // for telling which type of data we want access     video 19
    res.end(data);
  } else {
    res.writeHead(404, "'Content-Type': 'text/plain' ");
    res.end("<h1>404 Error</h1>");
  }
});

server.listen(8000, "127.0.0.1", (err) => {
  console.log("done");
});
