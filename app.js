var express = require('express');
var app = express();
var jsonfile = require('jsonfile')
var json_path= './vending.json'

app.get('/', function (req, res) {
  res.send(require(json_path));
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
  console.log(res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});