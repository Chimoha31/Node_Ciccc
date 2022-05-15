console.log("Hello Day3");

const http = require("http");
const fs = require("fs");
const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<ul><li><p>Test</p></li></ul>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Teddy is running!");
});