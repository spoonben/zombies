var express = require('express'),
	app = express();                 

var port = process.env.PORT || 8080;

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.get('/', function(req, res) {
    res.send('Zombie protection service is up and running!');
    // optionally we could use json in our response:
    // res.json(message: 'Zombie protection service is up and running!');
});

//start server
app.listen(port);
console.log('Starting Zombie protection service on port ' + port);