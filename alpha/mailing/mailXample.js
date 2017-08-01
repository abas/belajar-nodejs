var nodemailer = require('nodemailer');
var Mail = require('./authMail');

// var getMail = Mail.authMail('akhmadbasir5@gmail.com','inipassword');
// var email = {
//   user : getMail.userM,
//   pass : getMail.passM
// }
//
// console.log(email);

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth:{
    user : Mail.authMail.user,
    pass : Mail.authMail.pass
  }
});

var reciver = Mail.getReciver('ahmad5basir@gmail.com');

var mailOption = {
  from : Mail.authMail.user,
  to : reciver,
  subject : 'Xample Email',
  text : 'good job!'
};

transporter.sendMail(mailOption,function(err,info) {
  if (err) {
    console.log(err);
  }else{
    console.log('email sended to : '+info.response);
  }
});
