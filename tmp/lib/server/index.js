
var express = require('express');
var path = require('path');

var app = express();
var DOCS_PATH = '../../docs/';
var PORT = 8082;
var IP_ADRESS = 'localhost';

app.set('port', PORT);
app.set('ipAdress', IP_ADRESS);

app.use(express.static(path.join(__dirname, DOCS_PATH)));

app.get('/', function (req, res) {
  return res.sendFile(path.join(__dirname, DOCS_PATH, 'index.html'));
});

app.listen(PORT, IP_ADRESS, function () {
  return console.log('\n    ==============================================\n    -> Server \uD83C\uDFC3 (running) on ' + IP_ADRESS + ':' + PORT + '\n    ==============================================\n  ');
});