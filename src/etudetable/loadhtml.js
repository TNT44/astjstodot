/*
04/11/2019
Lit un fichier dot
Parse le fichier dot --> vers un arbre AST
Lit la premiere strcuture de l'arbre AST.
liste les noeuds dans l'arbre AST.
Affiche le resultat
Affiche le resultat en json plat
*/
//var StringBuilder = require('./../module/StringBuilder');
var FctIo = require('./../module/FctIo');
var AstToDot = require('./../module/AstToDot');
//var fctarray = require('./../module/fctArray');

var foncast = require('./../module/foncAST');

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

var tab = foncast.listernode(theast);

// la liste de noeuds
console.log("tab\n", tab);
// ----------------------
/*
var structure = foncast.rechercheUnNoeud(theast, "COM");

console.log("structure\n", structure);

var structure2 = foncast.rechercheUnNoeud(theast, "RIV");

console.log("structure2\n", structure2);

var structure3 = foncast.rechercheUnNoeud(theast, "TOTO");

console.log("structure3\n", structure3);
*/
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