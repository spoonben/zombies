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

app.get('/sensorLocation/:unit_id', function (req, res) {
    SensorList.find({ unit_id: req.param('unit_id') }, function(err, sensor) {
      if (err) throw err;

      // object of the user
      console.log(sensor);
      res.send(sensor[0].location);
  });
});

app.get('/sendDrone/:location', function (req, res) {
    var RollingSpider = require("rolling-spider"),
            temporal    = require("temporal"),
            drone = new RollingSpider();

    drone.connect(function() {
      drone.setup(function() {
        temporal.queue([
          {
            delay: 0,
            task: function () {
              drone.flatTrim();
              drone.startPing();
              console.log('connected!');
              drone.takeOff();
            }
          },
          {
            delay: 4000,
            task: function() {
               console.log('landing!');
               drone.land();
            }
          }]);
      });
    });
    res.send("Sending drone to " + req.param('location'));
});

app.listen(8080);