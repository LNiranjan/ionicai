var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port =  process.env.PORT || 8000;
var ip = process.env.IP || "127.0.0.1";
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/', function(req, res){
  console.log(req.body);
})


app.listen(port, ip);
