var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('<h1> Hello </h1> Express');
});

var server = app.listen(3000, function(){
  console.log('Listening on port 300');
});

// var http = require('http');
// var myServer = http.createServer(function(request,response){
//     response.writeHead(200, {"Content-Type" : "text/html"});
//     response.write("<b>Hello World</b>");
//     response.end();
// }); //creates a server
//
// myServer.listen(3000);
//
// console.log("go to http://localhost:3000 on your browser");
