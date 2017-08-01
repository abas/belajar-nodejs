var userM = 'akhmadbasir5@gmail.com';
var passM = 'xaviergoogle123';

exports.authMail = function () {
  var temp = {
    user : userM,
    pass : passM
  }
  return temp;
};

exports.getReciver = function (reciver) {
  return reciver;
};

exports.test = function (a,b) {
  return a+b;
};
