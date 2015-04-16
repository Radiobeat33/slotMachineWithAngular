var express = require('express'); 
var app = express();

var port = process.env.PORT || 3000;
var host = process.env.host || '127.0.0.1';

app.use(express.static(__dirname));

app.listen(port, function () {
  console.log('Server now listening on port ' + port);
});