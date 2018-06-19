var express = require('express');
var temp = require('dotenv').config();
var app = express();
var mode   = process.env.NODE_ENV;
var your_ip = process.env.YOUR_IP;


app.get('/', function (req, res) {
  res.send(`hi you are listening from  ` + your_ip);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

