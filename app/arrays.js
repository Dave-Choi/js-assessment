if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var i, len = arr.length, sum=0;
            for(i=arr.length-1; i>=0; i--){
                sum += arr[i];
            }
        return sum;
    },

    remove : function(arr, item) {
        return arr.filter(function(el){
            return el != item;
        });
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var i, count=0;
        for(i=arr.length-1; i>=0; i--){
            if(arr[i] === item){
                count++;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var dupes = [];
        var counts = [];
        var i;
        for(i=arr.length-1; i>=0; i--){
            var item = arr[i];
            if(counts[item]){
                counts[item]++;
            }
            else{
                counts[item] = 1;
            }
        }
        for(var k in counts){
            if(counts[k]>1){
                dupes.push(k);
            }
        }
        return dupes;
    },

    square : function(arr) {
        var squares = [];
        var i, len = arr.length;
        for(i=0; i<len; i++){
            var val = arr[i];
            squares.push(val * val);
        }
        return squares;
    },

    findAllOccurrences : function(arr, target) {
        var occs = [];
        var i, len = arr.length;
        for(i=0; i<len; i++){
            if(arr[i] === target){
                occs.push(i);
            }
        }
        return occs;
    }
  };
});
