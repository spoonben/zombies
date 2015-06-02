var express    = require('express');        
var app        = express();                 

var port = process.env.PORT || 8080;

//ROUTES
var router = express.Router();              

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'working' });   
});

router.route('/alert')
    .post(function(req, res) {
    	// alert that the zombies are here!
    	res.json({ message: 'INCOMING ZOMBIES' });
    });   

app.use('/api', router);

//start server
app.listen(port);
console.log('Starting Zombie protection system on port ' + port);