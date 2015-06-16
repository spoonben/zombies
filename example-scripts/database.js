var express = require("express");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/zombies');

var sensorListSchema = {
	unit_id: Number,
	location: String,
	type: String
}

var SensorList = mongoose.model('SensorList', sensorListSchema, 'sensors');

var app = express();

// List all the sensors 
app.get('/listSensors', function (req, res) {
    SensorList.find(function (err, doc) {
        res.send(doc);
    });
});

app.listen(8080);