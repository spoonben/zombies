# zombies

**under development**

[![bitHound Score](https://www.bithound.io/github/spoonben/zombies/badges/score.svg)](https://www.bithound.io/github/spoonben/zombies)

protecting yourself against the imminent zombie attack
(A collection of things to do with JavaScript)

### install 
```
$ npm install
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

### grunt tasks

eg:  

```
$ grunt [task] 
```

* **drone** - run just the drone demo

* **server** - start the zombie server, default port is **8080**

