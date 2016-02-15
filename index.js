var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('default', {
    title: 'Home',
    users: ['Ray', 'John', 'valentina']

  });
});

app.get('/me', function(req, res){
  res.send('@rizzy');
});

app.get('/who/:name?', function(req, res){
  var name = req.params.name;
  res.send(name + 'was here');
});

app.get('/who/:name?//:title?', function(req, res){
  var name = req.params.name;
  var title = req.params.title;
  res.send(name + 'was here' + "<br>" + title);
});

app.get('*', function(req, res){
  res.send('bad route');
});

var server = app.listen(3000, function(){
  console.log('Listening on port 3000');
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
