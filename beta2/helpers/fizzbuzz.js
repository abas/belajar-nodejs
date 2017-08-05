'use strict'

exports.fizzBuzz = function (param) {
  if (param % (3*5) == 0) {
    return "FizzBuzz";
  }else if (param % 5 == 0) {
    return "Buzz";
  }else if (param % 3 == 0) {
    return "Fizz";
  }else{
    return "NotFizzBuzz";
  }
}

// module.exports = {
//   fizzBuzz : function (param) {
//     if (param % 3 == 0) {
//       return "fizz";
//     }
//   }
// }
