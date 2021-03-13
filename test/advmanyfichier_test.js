//var StringBuilder = require('./../src/module/StringBuilder');
var FctIo = require('./module/FctIo');
var AstJsToDot = require('./../src/AstJsToDot');
var fctarray = require('./module/fctArray');

var parse = require('dotparser');
var DataObjectParser = require('dataobject-parser');
var assert = require("chai").assert;


var unitTests = [
  "complexe/complexeport.gv",
  "complexe/complexelink.gv"
];


var debug = false;
var display = false;


describe('runTests', function () {

  unitTests.forEach(function (item) {
    it('travail sur le fichier ' + item, function (done) {
      //console.log("did stuff with " + item);

      var nomfichier = item;

      var versIO = new FctIo(nomfichier);
      var jsonString = versIO.chargefichiergz(nomfichier);

      var monast = parse(jsonString);
      var theast = monast[0];
      if (debug) {
        versIO.figeast(theast);
      }

      var flatast = DataObjectParser.untranspose(theast);

      var res = AstJsToDot.generegraph(theast, 0);

      if (debug) {
        versIO.figeresultat(res);
      }


      var tabastproduit = parse(res);

      var astproduit = tabastproduit[0];
      if (debug) {
        versIO.figeNouveauAst(theast);
      }
      var flatastproduit = DataObjectParser.untranspose(astproduit);
      if (display) {
        versIO.afficheDeuxAst(flatast, flatastproduit);
      }
      if (debug) {
        versIO.sauveDeuxAst(flatast, flatastproduit);
      }

      var test = fctarray.isEqualDU(flatast, flatastproduit);


      assert.isTrue(test);
      done();
    });
  });

});