var express = require('express');
var _ = require('underscore');
var app = express();
app.use(express.static('public'));

app.get('/*', function (req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});

app.listen(8080, function () {
  console.log('App is listening on port 8080!');
});
