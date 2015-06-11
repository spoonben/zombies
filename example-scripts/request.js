var request = require('request');

request('http://localhost:8080/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  } else {
  	console.log('Some sort of error!');
  }
})