if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/arrays'
], function(answers) {
  describe("arrays", function() {
    var a;
    beforeEach(function() {
      a = [ 1, 2, 3, 4 ];
    });

    answers.indexOf = function(array, needle){
      return array.indexOf(needle);
    };
    it("you should be able to determine the location of an item in an array", function() {
      expect(answers.indexOf(a, 3)).to.be(2);
    });

    answers.sum = function(array){
      var i, len = array.length, sum=0;
      for(i=array.length-1; i>=0; i--){
        sum += array[i];
      }
      return sum;
    };
    it("you should be able to add the values of an array", function() {
      expect(answers.sum(a)).to.be(10);
    });

    answers.remove = function(array, needle){
      var i, len = array.length;
      for(i=array.length-1; i>=0; i--){
        if(array[i] === needle){
          array.splice(i, 1);
        }
      }
      return array;
    };
    it("you should be able to remove a value from an array", function() {
      a.push(2); // Make sure the value appears more than one time
      var result = answers.remove(a, 2);

      expect(result).to.have.length(3);
      expect(result.join(' ')).to.be('1 3 4');
    });

    answers.append = function(array, item){
      array.push(item);
      return array;
    };
    it("you should be able to add an item to the end of an array", function() {
      var result = answers.append(a, 10);

      expect(result).to.have.length(5);
      expect(result[result.length - 1]).to.be(10);
    });

    answers.truncate = function(array){
      array.pop();
      return array;
    };
    it("you should be able to remove the last item of an array", function() {
      var result = answers.truncate(a);

      expect(result).to.have.length(3);
      expect(result.join(' ')).to.be('1 2 3');
    });

    answers.concat = function(array1, array2){
      return array1.concat(array2);
    };
    it("you should be able to join together two arrays", function() {
      var c = [ 'a', 'b', 'c', 1 ],
          result = answers.concat(a, c);

      expect(result).to.have.length(8);
      expect(result.join(' ')).to.be('1 2 3 4 a b c 1');
    });

    answers.insert = function(array, item, index){
      array.splice(index, 0, item);
      return array;
    };
    it("you should be able to add an item anywhere in an array", function() {
      var result = answers.insert(a, 'z', 2);

      expect(result).to.have.length(5);
      expect(result.join(' ')).to.be('1 2 z 3 4');
    });

    answers.count = function(array, needle){
      var i, count=0;
      for(i=array.length-1; i>=0; i--){
        if(array[i] === needle){
          count++;
        }
      }
      return count;
    };
    it("you should be able to count the occurences of an item in an array", function() {
      var result = answers.count([ 1, 1, 1, 2, 1, 3 ], 1);

      expect(result).to.be(4);
    });

    answers.duplicates = function(array){
      var dupes = [];
      var counts = [];
      var i;
      for(i=array.length-1; i>=0; i--){
        if(counts[array[i]]){
          counts[array[i]]++;
        }
        else{
          counts[array[i]] = 1;
        }
      }
      for(var k in counts){
        if(counts[k]>1){
          dupes.push(k);
        }
      }
      return dupes;
    };
    it("you should be able to find duplicates in an array", function() {
      var result = answers.duplicates([ 1, 2, 4, 4, 3, 3, 1, 5 ]);

      expect(result).to.have.length(3);
      expect(result.sort().join(' ')).to.be('1 3 4');
    });

    answers.square = function(array){
      var squares = [];
      var i, len = array.length;
      for(i=0; i<len; i++){
        var val = array[i];
        squares.push(val * val);
      }
      return squares;
    };
    it("you should be able to square each number in an array", function() {
      var result = answers.square(a);

      expect(result).to.have.length(4);
      expect(result.join(' ')).to.be('1 4 9 16');
    });

    answers.findAllOccurrences = function(array, needle){
      var occs = [];
      var i, len = array.length;
      for(i=0; i<len; i++){
        if(array[i] === needle){
          occs.push(i);
        }
      }
      return occs;
    };
    it("you should be able to find all occurrences of an item in an array", function() {
      var result = answers.findAllOccurrences('abcdefabc'.split(''), 'a');

      expect(result.join(' ')).to.be('0 6');
    });

  });
});
