var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
var assert = require("chai").assert;


var Untableau = require('../../src/modele/Untableau');
var Unelignesimple = require('../../src/modele/Unelignesimple');


describe('test UnTableau: ', function() {

  it('creer un tableau complet', function (done) {

    var un = new Untableau(1, "montableau");

    //expect(fctarray.isEqualDU(flatast, flatastproduit)).toBeTruthy();
    assert.equal(un.getId(),1);

    assert.equal(un.getNom(),'montableau');

    console.log(un.toString());

    done();
    
  });

  it('creer un tableau sans id', function () {

    var deux = new Untableau("", "montableau2");
    
    assert.equal(deux.getNom(),'montableau2');

    console.log(deux.toString());
    
  });

  it('creer un tableau sans nom', function() {

    var trois = new Untableau(3);

  
    assert.equal(trois.getId(),3);

    console.log(trois.toString());
    
  });

  //var table = new Untableau(1, "table");

  it('Ajouter des ojets Unelignesimple', function() {

    var table = new Untableau(1, "table");

    var un = new Unelignesimple("un");
    table.addUneligne(un);

    var deux = new Unelignesimple("deux");
    table.addUneligne(deux);
  
    assert.equal(table.getNbLigne(),2);


    console.log(table.toDebugString());
    
  });

  it('Creer des lignes dans un tableau', function() {

    var table = new Untableau(1, "table");

    table.addligne("un");
    table.addligne("deux");
  
    assert.equal(table.getNbLigne(),2);

    console.log(table.toDebugString());
    
  });


});
