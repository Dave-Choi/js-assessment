if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj, null);
    },

    functionFunction : function(str) {
        return function(str2){
            return str + ", " + str2;
        };
    },

    partial : function(fn, str1, str2) {
        return function(str3){
            return fn(str1, str2, str3);
        };
    },

    useArguments : function() {
        var i;
        var sum = 0;
        for(i=arguments.length-1; i>=0; i--){
            sum += arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        fn.apply(null, args);
    },

    curryIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function(){
            var extraArgs = Array.prototype.slice.call(arguments, 0);
            return fn.apply(null, args.concat(extraArgs));
        };
    },

    makeClosures : function(arr, fn) {
        var i, len = arr.length;
        var closures = [];
        for(i=0; i<len; i++){
            var item = arr[i];
            var closure = (function(arg){
                return function(){
                    return fn(arg);
                };
            })(item);
            closures.push(closure);
            /*
            closures.push(
                (function(something){
                    return fn(something);
                })(item);
            );
*/
        }
        return closures;
    }
  };
});
