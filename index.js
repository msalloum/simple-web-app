var express = require('express');

var app = express();

const PORT = 8888;

app.get('/', function (req, res) {
  res.send('Simple Web Application is UP');
});

app.listen(PORT, function () {
    console.log('Simple Web Application running on port ' + PORT);
});