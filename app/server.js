var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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


// more routes for our API will happen here

app.use('/api', router);

//start server
app.listen(port);
console.log('Starting Zombie protection system on port ' + port);