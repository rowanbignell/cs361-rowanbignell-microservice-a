var path = require('path')
var express = require('express')
var { customAlphabet } = require('nanoid');
var alphabet = '123456789ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var nanoid = customAlphabet(alphabet, 10);

var foodData = require('./food-log.json')

var app = express()
var port = process.env.PORT || 3005

app.use(express.json())

// Retrieve all food log information
app.get('/foodlog', function(req, res, next){
  res.status(200).json(foodData)
})

// Retrieve a single food log item
app.get('/foodlog/:log', function(req, res, next){
    
})

// Add a single food log item
app.post('/foodlog', function(req, res, next){

})

// Edit a single food log item
app.put('/foodlog/:log', function(req, res, next){

})

// Delete a food log item
app.delete('/foodlog/:log', function(req, res, next){
    
})

app.listen(port, function () {
    console.log("== Server listening on port", port)
  })