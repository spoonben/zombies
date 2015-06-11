var five = require("johnny-five"),
    RollingSpider = require("rolling-spider"),
    temporal    = require("temporal"),
    drone = new RollingSpider(),
    board, button;

board = new five.Board();

board.on("ready", function() {

  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  button = new five.Button(2);

  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    button: button
  });

  // Button Event API
  button.on("hold", function() {
    console.log('========');
    console.log('Landing');
    console.log('========');
    drone.land();
  });

  button.on("up", function() {
    drone.connect(function() {
      drone.setup(function() {
        temporal.queue([{
              delay: 0,
              task: function () {
                drone.flatTrim();
                drone.startPing();
                console.log('===========');
                console.log('Taking off');
                console.log('===========');
                drone.takeOff();
              }
          }]);
        });
      });
    });

  // "up" the button is released
  button.on("down", function() {
    console.log("up");
  });
});