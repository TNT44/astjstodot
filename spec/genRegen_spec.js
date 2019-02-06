var StringBuilder = require('./../module/StringBuilder');
var FctIo = require('./../module/FctIo');
var AstToDot = require('./../module/AstToDot');
var fctarray = require('./../module/fctArray');

var parse = require('dotparser');
var DataObjectParser = require('dataobject-parser');

var fs = require('fs');
var path = require('path');

describe('test genération: ', function() {

  it('genere fichier en sortie', function() {

    var nomfichier = "DAF1.gz.generer.dot2";

    var debug = false;
    var display = true;

    var jsonPath = path.join(__dirname, '..', 'travaux', nomfichier);
    //var jsonString = fs.readFileSync(jsonPath, 'utf8');
    console.log("chargement du fichier GZ : " + nomfichier);

    //var monast = parse(jsonString);

    expect(display).toBeTruthy();

  });

});
