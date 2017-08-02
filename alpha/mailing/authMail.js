var userM = 'akhmadbasir5@gmail.com';
// var passM = '';

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

exports.getEmail = function(){
  return userM;
}

exports.getPass = function () {
  return passM;
};
