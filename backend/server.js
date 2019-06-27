var http = require('http')
var express = require("express")

var app = express();

var myRouter = require('./router')

app.use('/data', myRouter)

server = http.createServer(app);
server.listen(8000,'127.0.0.1');
console.log("server is runing at 127.0.0.1:8000");