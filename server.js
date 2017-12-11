var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = app.set('port', process.env.PORT || 8000);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/', function(req, res){
  console.log(req.body);
})


app.listen(port,'https://ionicai.herokuapp.com');
