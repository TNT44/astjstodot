var fctarray = require('../src/module/fctArray');

var assert = require('chai').assert;
//var DataObjectParser = require('dataobject-parser');

describe('test fctArray: ', function() {

  it('fonction isEquals tableau simple', function() {

    var arr1 = [1, 2, 3, 4, 5];
    var arr2 = [1, 2, 3, 4, 5];
    assert.isTrue(fctarray.isEqual(arr1, arr2)); // returns true
  });
  it('fonction isEquals tableau imbrique', function() {
    var arrObj1 = [1, 2, {
      a: 1,
      b: 2,
      c: 3
    }, 4, 5];
    var arrObj2 = [1, 2, {
      c: 3,
      b: 2,
      a: 1
    }, 4, 5];
    assert.isTrue(fctarray.isEqual(arrObj1, arrObj2)); // returns true
  });

  it('fonction isEquals tableau dans le desordre', function() {
    var arr1 = [1, 2, 3, 4, 5];
    var arr3 = [5, 4, 3, 2, 1];
    assert.isFalse(fctarray.isEqual(arr1, arr3)); // returns false

  });

});