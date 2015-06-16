var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var laser = new five.Led(9);
  var detection = new five.Sensor("A0");
  var isSecure = false;
  var droneId = 1;

  laser.on();

  detection.scale(0, 1).on("change", function() {
    var reading = !(this.value > 0.9);
    if (isSecure !== reading) {
      isSecure = reading;

      if (!isSecure) {
        sendEmail();
        sendDrone(droneId);
      }
    }
  });
});

function sendEmail() {
  var nodemailer = require('nodemailer'),
      fs = require('fs'),
      data = fs.readFileSync('./smtp-config.json'),
      smtpConfig;

  smtpConfig = JSON.parse(data);

  // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: smtpConfig.username,
          pass: smtpConfig.password
      }
  });

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'Ben Spoon <ben@benspoon.com.com>', // sender address
      to: 'ben@benspoon.com', // list of receivers
      subject: 'ZOMBIES ARE HERE', // Subject line
      text: 'Dude, there are zombies. You should do something', // plaintext body
      html: '<b>Dude, there are zombies. You should do something</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);

  });
};

function sendDrone(sensorId) {
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
            drone.takeOff();
          }
        },
        {
          delay: 500,
          task: function () {
            drone.land();
          }
        }]);
    });
  });
};