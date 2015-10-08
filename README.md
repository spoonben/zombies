# zombies
![zombie logo](./zombie.png);

Slides for this presentaion are available at [slides.com/benspoon/zombies](http://slides.com/benspoon/zombies#/)

*Please keep in mind this repo was built as a demo, this is **not** a good application structure*

[![bitHound Score](https://www.bithound.io/github/spoonben/zombies/badges/score.svg)](https://www.bithound.io/github/spoonben/zombies)

protecting yourself against the imminent zombie attack
(A collection of things to do with JavaScript)

### Example Scripts
Example scripts are located in the ```example-scripts``` directory. 

To run an example script, use node. e.g. ```node example-scripts/drone.js```

### Database
This experiment uses MongoDB for it's database. To find out more about MongoDB visit [their website](https://www.mongodb.org/)

#### Schema
The database script expects a schema to exist with a sensor in it. The schema is really simple: 

```
unit_id: Number,
location: String,
type: String
```

### SMTP
Settings should be saved in a file in the root directory called ```smtp-config.json``` that looks like:

```
{
	'username': 'foo@bar.com',
	'password': 's0m3th1ng' 
}
```

I realize this is not secure, but it is at least easy to implement for now.

### Links
Here you'll find links to all the repos I've used

* [https://github.com/rwaldron/johnny-five](https://github.com/rwaldron/johnny-five)
* [https://expressjs.com](https://expressjs.com)
* [https://github.com/voodootikigod/node-rolling-spider](https://github.com/voodootikigod/node-rolling-spider)
* [https://github.com/andris9/Nodemailer](https://github.com/andris9/Nodemailer)
