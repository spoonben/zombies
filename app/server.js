var express    	  = require('express'),
	app        	  = express();                 

var port = process.env.PORT || 8080;

//ROUTES
var router = express.Router();              

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'working' });   
});

router.route('/alert')
    .post(function(req, res) {
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
	    	          console.log('=====================');
	    	          console.log('Launching scout drone');
	    	          console.log('=====================');
	    	          drone.takeOff();
    	       		}
    	       	},
    	       	{
    	       	 	delay: 3000,
    	       	 	task: function() {
    	       	 		drone.land();
    	       	}
    	      }]);
    	  });
    	});
    	// alert that the zombies are here!
    	res.json({ message: 'Notice received' });
    });   

app.use('/api', router);

//start server
app.listen(port);
console.log('Starting Zombie protection system on port ' + port);