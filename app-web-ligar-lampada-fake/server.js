var express = require('express')
var app = express()
 
app.use(express.static('arquivos_pubicos'));
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, '0.0.0.0')