var fs = require('fs')
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
    var log = foodData[req.params.log]
    if(log){
        res.status(200).json(log)
    } else {
        res.status(400).send("Log item not found.")
    }
})

// Add a single food log item
app.post('/foodlog', function(req, res, next){
    console.log("== req.body: ", req.body)
    //check all request fields exist
    if (req.body && req.body.foodDate && req.body.foodItem && req.body.portionSize && req.body.calories && req.body.mealType){
        // generate ID
        var logID = ""
        do {
            logID = nanoid()
        } while (foodData[logID]) // as long as ID exists, regenerate

        //build JS object for food log
        var newLogEntry = {
            foodDate: req.body.foodDate,
            foodItem: req.body.foodItem,
            portionSize: req.body.portionSize,
            calories: req.body.calories,
            mealType: req.body.mealType
        }

        //add object with id to data
        foodData[logID] = newLogEntry

        //write data to file
        fs.writeFile(__dirname + "/food-log.json",
            JSON.stringify(foodData, null, 2),
            function(err, result){
                if(!err){ //if no error, send good status
                    res.status(200).send("Success")
                } else {
                    res.status(500).send("Server error")
                }
            }
        )

    } else {
        res.status(400).send("Request body is not in the correct format.")
    }
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