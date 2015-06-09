var nodemailer = require('nodemailer'),
    fs = require('fs'),
    data = fs.readFileSync('./smtp-config.json'),
    smtpConfig;

smtpConfig = JSON.parse(data);

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: smtpConfig.username,
        pass: smtpConfig.password
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Ben Spoon <ben@benspoon.com.com>', // sender address
    to: 'ben@benspoon.com', // list of receivers
    subject: 'ZOMBIES ARE HERE', // Subject line
    text: 'Dude, there are zombies. You should do something', // plaintext body
    html: '<b>Dude, there are zombies. You should do something</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});