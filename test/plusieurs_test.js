
var assert = require("chai").assert;

var unitTests = ["un", "deux", "trois"];

function doStuff(item) {
  console.log("did stuff with " + item);
}

describe('runTests', function() {
  unitTests.forEach(function(item) {
    it('does stuff with ' + item, function(done) {
      var res = doStuff.apply(null, [item]);
      assert.equal(res,res);
      done();
    });
  });
});