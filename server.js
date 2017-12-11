var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/', function(req, res){
  console.log(req.body);
})


app.listen(8080,'https://ionicai.herokuapp.com');
