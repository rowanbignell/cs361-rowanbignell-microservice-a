var path = require('path')
var express = require('express')

var app = express()
var port = process.env.PORT || 3005

app.use(express.json())

app.get('*', function(req, res, next){
    
})

app.listen(port, function () {
    console.log("== Server listening on port", port)
  })