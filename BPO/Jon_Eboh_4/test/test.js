var assert = require('assert');

var leastCommonMultiple = require('../assessment.js').leastCommonMultiple,
    myIndexOf = require('../assessment.js').myIndexOf,
    magicCipher = require('../assessment.js').magicCipher,
    minMaxProduct = require('../assessment.js').minMaxProduct,
    arraysSumN = require('../assessment.js').arraysSumN;


describe('#myIndexOf()', function () {
  it('should return the index of the element in the array', function () {
    assert.equal(myIndexOf([1,2,3,4,5], 5), 4);
    assert.equal(myIndexOf(["a", "b", "c"], "a"), 0);
  });

  it('should return -1 if element does not exist', function () {
    assert.equal(myIndexOf(["a", "b", "c"], "d"), -1);
  });
});

describe('#minMaxProduct()', function () {
  it('should return the product of the min and max value of the array.', function () {
    assert.equal(minMaxProduct([1,2,3,4,5]), 5);
    assert.equal(minMaxProduct([5,4,3,2,1]), 5);
    assert.equal(minMaxProduct([4,2,5,1,-5]), -25);
  });
});


describe('#leastCommonMultiple()', function () {
  it('should return the lowest number which is a multiple of both inputs', function () {
    var result1 = leastCommonMultiple(2,3);
    var result2 = leastCommonMultiple(6,10);
    var result3 = leastCommonMultiple(24,26);

    assert.equal(result1, 6);
    assert.equal(result2, 30);
    assert.equal(result3, 312);
  });
});


describe('#arraysSumN()', function () {
  it('should return inner arrays whose elements sum to n.', function () {
    var result = arraysSumN([ [0, 1], [2, 2, 0], [3, -2] ], 1);
    var expected = [ [0, 1], [3, -2] ];
    assert.equal(result.length, expected.length);

    for(var i = 0; i < result.length; i += 1){
      for(var j = 0; j < result[i].length; j ++) {
        assert.equal(result[i][j], expected[i][j]);
      }
    }

    var result = arraysSumN([ [0, 1, 2, 3, 100], [6] ], 6);
    var expected = [ [6] ];
    assert.equal(result.length, expected.length);

    for(var i = 0; i < result.length; i += 1){
      for(var j = 0; j < result[i].length; j ++) {
        assert.equal(result[i][j], expected[i][j]);
      }
    }
  });
});

describe('#magicCipher()', function () {
  it('should return a string where every character is replaced with its cooresponding value in the cipher', function () {
    var result = magicCipher("add me on facebook" , { a : "c", d : "q"});
    var expected = "cqq me on fccebook";
    assert.equal(result, expected);

    var result = magicCipher("where are you?" , { v : "l", '?' : "!"});
    var expected = "where are you!";
    assert.equal(result, expected);

    var result = magicCipher("twmce" , { m : "n", t : "d", w : "a"});
    var expected = "dance";
    assert.equal(result, expected);
  });
});
