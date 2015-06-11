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

app.get('/sensorLocation', function (req, res) {
    SensorList.find({ unit_id: 1 }, function(err, sensor) {
      if (err) throw err;

      // object of the user
      console.log(sensor);
      res.send(sensor[0].location);
  });
});

app.listen(8080);