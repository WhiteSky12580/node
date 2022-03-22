//创建服务器
const http = require("http");
const serveHandle = require("../app.js");
const port = 5000;
const server = http.createServer(serveHandle);

server.listen(port, () => { console.log("serve running at port 5000") })