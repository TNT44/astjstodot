/*
04/12/2019

Utilise l'api dota.DotGraph(theast);.

Liste les noeuds
Liste les liens
Liste les graph and subgraph

*/

//var StringBuilder = require('./../module/StringBuilder');
var FctIo = require('./../module/FctIo');
var AstToDot = require('./../module/AstToDot');
var dota = require("./dotgraph");
var _ = require('lodash');
//var fctarray = require('./../module/fctArray');

var parse = require('dotparser');
var DataObjectParser = require('dataobject-parser');



var nomfichier = "AFL.1degree.dot";
nomfichier = "COM.1degree.dot";
var sav = false;
//var debug = true;
var display = true;

var versIO = new FctIo(nomfichier);
var jsonString = versIO.chargeschemagz(nomfichier);

var monast = parse(jsonString);
var theast = monast[0];
// ----------------------
// Le coeur du sujet

var graph = new dota.DotGraph(theast);
graph.walk(); // walks the ast and gathers all information about nodes, edges, and subgraphs

console.log("Debut");
console.log("* Nodes");
console.log(graph.nodes); // object of all nodes and their attrs
var tabnode = graph.nodes;
// tabnode est un objet
console.log("Taille tabnode =" + Object.keys(tabnode).length);
console.log("* edges");
console.log(graph.edges); // object of all edges and their attrs
var tabedge = graph.edges;
// tabedge est un objet
console.log("Taille tabnedge =" + _.size(tabedge));
console.log("* graphs");
console.log(graph.graphs); // object of all subgraphs and their attrs
console.log("End\n");

// ----------------------

if (sav) {
  versIO.figeast(theast);
}
var flatast = DataObjectParser.untranspose(theast);

var res = AstToDot.generegraph(theast, 0);
if (sav) {
  versIO.figeresultat(res);
}

if (display) {
  console.log("--- Sortie ---\n" + flatast);
}