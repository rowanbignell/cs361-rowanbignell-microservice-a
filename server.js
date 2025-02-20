var path = require('path')
var express = require('express')

var app = express()
var port = process.env.PORT || 3005

app.use(express.json())

app.get('/foodlog', function(req, res, next){
    
})

app.get('/foodlog/:log', function(req, res, next){
    
})

app.post('/foodlog', function(req, res, next){

})

app.put('/foodlog/:log', function(req, res, next){

})

app.delete('/foodlog/:log', function(req, res, next){
    
})

app.listen(port, function () {
    console.log("== Server listening on port", port)
  })