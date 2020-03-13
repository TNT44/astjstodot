
var assert = require("chai").assert;

var unitTests = ["un", "deux", "trois"];

describe('runTests', function() {
  unitTests.forEach(function(item) {
    it('does stuff with ' + item, function(done) {
        console.log("did stuff with " + item);
        assert.equal(item, item);
      done();
    });
  });
});