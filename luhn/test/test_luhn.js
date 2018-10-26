var assert = require('chai').assert;
var check = require('../lib/luhn');

describe('Check valid number', function() {
  it('should return true if input PASSES Luhn Test', function() {
    var input = '79927398713';
    var result = check(input);
    assert.isTrue(result);
  });

  it('should return false if input does NOT pass Luhn Test', function() {
    var input = '79927398710';
    assert.isFalse(check(input));
  });

  it('should return false if a input is NOT a number', function() {
    var input = '7999a123812';
    assert.isFalse(check(input));
  });
});
