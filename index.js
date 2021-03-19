var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('<div style="font-size:80px; text-align:center; padding: 50px; font-weight: bold;"><h1>Hello World</h1>Aprendendo AWS EC2</div>')
})

app.listen(1903, function () {
  console.log('Listening on port 1903...')
})