if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        var buff = [];
        for(var k in obj){
            if(obj.hasOwnProperty(k)){
                buff.push([k, obj[k]].join(': '));
            }
        }
        return buff;
    }
  };
});
