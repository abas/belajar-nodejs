var nodemailer = require('nodemailer');
var info = require('./authMail');


// var gmail = info.getEmail();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: info.getEmail(),
    pass: info.getPass()
  }
});

var mailOptions = {
  from: info.getEmail(),
  to: 'ahmad5basir@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
