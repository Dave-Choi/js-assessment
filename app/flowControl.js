if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible the 3 and 5, the function should return
      // 'fizzbuzz';
      // otherwise the function should return the number

      var buff = "";
      if(num % 3 === 0){
        buff += "fizz";
      }
      if(num % 5 === 0){
        buff += "buzz";
      }

      return buff || num;
    },
  };
});
