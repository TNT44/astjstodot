//var StringBuilder = require("../module/StringBuilder.js");
var FctIo = require('./../module/FctIo');
//var AstToDot = require('../module/AstToDot');

var parse = require('dotparser');
var DataObjectParser = require('dataobject-parser');
var foncast = require('./../module/foncAST');


function trt() {

    var nomfichier = "simple.gv";
    var debug = true;


    var versIO = new FctIo(nomfichier);
    var jsonString = versIO.chargefichiergz(nomfichier);

    var monast = parse(jsonString);
    var theast = monast[0];

    // ----------------------
    // Le coeur du sujet

    var tab = foncast.listernode(theast);

    // la liste de noeuds
    console.log("Liste des noeuds \n", tab);

    // la liste de noeuds
    //var tabliens = foncast.listeredge(theast);
    //console.log("Liste des edge \n", tabliens);

    if (debug) {
        versIO.figeast(theast);
    }
    //var flatast = DataObjectParser.untranspose(theast);

    //console.log("flatast");
    //console.log(flatast);
    console.log("End");

}

trt();

