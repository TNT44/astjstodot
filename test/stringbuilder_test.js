
var assert = require("chai").assert;
var StringBuilder = require("../src/module/StringBuilder");


describe('runTests', function() {
  
    it('appendtabsimple' , function(done) {

        var sb = new StringBuilder();
        sb.appendtab("graph");
        var res = sb.toString();

        assert.equal(res, " graph");

      done();
    });

    it('appendtabavecparam' , function(done) {

        var sb = new StringBuilder();
        sb.appendtab("hello",1);
        var res = sb.toString();

        assert.equal(res, " hello");

      done();
    });

    it('appendtabavecparam * 3' , function(done) {

        var sb = new StringBuilder();
        sb.appendtab("toto",3);
        var res = sb.toString();

        assert.equal(res, "   toto");

      done();
    });

    it('appendtab undef' , function(done) {

        var sb = new StringBuilder();
        sb.appendtab(undefined);
        var res = sb.toString();

        assert.equal(res, "");

      done();
    });

});