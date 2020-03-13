//const fs = require('fs');
//var unitTests = JSON.parse(fs.readFileSync('./test/unitTests.json', 'utf8'));

var assert = require("chai").assert;

var unitTests = {"unitTests": [{"input": "1.foo"},{"input": "4.foo"},{"input": "3.foo"},{"input": "2.foo"}]}

function doStuff(test) {
  console.log("did stuff with " + test.input);
}

describe('runTests', function() {
  unitTests.unitTests.forEach(function(test) {
    it('does stuff with ' + test.input, function(done) {
      var res = doStuff.apply(null, [test]);
      assert.equal(res, res);
      done();
    });
  });
});