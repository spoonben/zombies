var RollingSpider = require("rolling-spider"),
    		temporal 	  = require("temporal"),
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
          //yourDrone.takeOff();
        }
      }]);
  });
});