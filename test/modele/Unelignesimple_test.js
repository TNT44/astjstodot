var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
var assert = require("chai").assert;

var Unelignesimple = require('../../src/modele/Unelignesimple');


describe('test Unelignesimple: ', function() {

  it('creer une ligne sans id', function() {

    var deux = new Unelignesimple("uneligne");
    
    //expect(deux.getNom()).toEqual('uneligne');
    assert.equal(deux.getNom(), 'uneligne');

    console.log(deux.toString());
    
  });


});
