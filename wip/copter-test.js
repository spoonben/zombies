var RollingSpider = require("../node-rolling-spider/lib/drone.js");
var temporal = require("temporal");

var yourDrone = new RollingSpider();

yourDrone.connect(function() {
  yourDrone.setup(function() {
    // NEW CODE
    temporal.queue([
      {
        delay: 0,
        task: function () {
          yourDrone.flatTrim();
          yourDrone.startPing();
          console.log('conntected');
        }
      }]);
  });
});