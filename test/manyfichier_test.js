//var StringBuilder = require('./../src/module/StringBuilder');
var FctIo = require('./../src/module/FctIo');
var AstToDot = require('./../src/module/AstToDot');
var fctarray = require('./../src/module/fctArray');

var parse = require('dotparser');
var DataObjectParser = require('dataobject-parser');
var assert = require("chai").assert;


var unitTests = [
  "advanced.gv", 
  "DAF1.gv", 
  "nonoriente.gv",
  "notcrossing.gv",
  "compound.gv",
  "rank.gv",
  "fancy.gv",
  "graphstructure.gv",
  "hashtable.gv",
  "simple.gv",
  "advanced.gv",
  'nonhtml.gv',
  'polygon.gv',
  "subgraph.gv",
  "simple.gv",
  "prune.gv",
  "process.gv",
  "polygon2.gv",
  "multi.gv",
  "hashtable.gv",
  "html1.gv"
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

      var res = AstToDot.generegraph(theast, 0);

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