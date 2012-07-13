if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    async : function() {
        return {
            then: function(fulfilledHandler){
                fulfilledHandler(true);
            }
        };
    },

    manipulateRemoteData : function(url) {
        return {
            then: function(fulfilledHandler){
                $.getJSON(url, function(data){
                    function skim(objects, prop){
                        var buff = [];
                        var i, len = objects.length;
                        for(i=0; i<len; i++){
                            buff.push(objects[i][prop]);
                        }
                        return buff;
                    }
                    var names = skim(data.people, "name");
                    fulfilledHandler(names.sort())
                });
            }
        };
    }
  };
});
