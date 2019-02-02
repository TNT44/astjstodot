var fs = require('fs');
var path = require('path');

function FctIo(nomfichier) {
  this.nomfichier = nomfichier;
}

/**
 * charge le contenu d'un fichier gz
 * @param {Array|Object} astreproduit - un fichier ast.
 */
FctIo.prototype.chargefichiergz = function(nom = "") {

  if (nom != "") {
    this.nomfichier = nom;
  }
  var jsonPath = path.join(__dirname, '..', 'sample', this.nomfichier);
  var jsonString = fs.readFileSync(jsonPath, 'utf8');
  console.log("chargement du fichier GZ : " + this.nomfichier);
  return jsonString;
}

/**
 * sauvegarde de l'arbre AST dans un fichier .json
 * @param {Array|Object} astreproduit - un fichier ast.
 */
FctIo.prototype.figeast = function(monast) {
  var fichiersortietxt = path.join(__dirname, '..', 'travaux', this.nomfichier +
    '.json');
  fs.writeFile(fichiersortietxt, JSON.stringify(monast, null, 4), (err) => {
    if (err) {
      console.error(err);
      return;
    };
    console.log("Fige la structure AST ");
  });
}

/**
 * sauvegarde le fichier generer dans un fichier.generer.dot
 * @param {String} res - le contenu de la génération.
 */
FctIo.prototype.figeresultat = function(res) {
  var fichiergensortie = path.join(__dirname, '..', 'travaux', this.nomfichier +
    '.generer.dot');

  fs.writeFile(fichiergensortie, res.toString(), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("Fige le travaux --> fichier .generer.dot");
  });

}

/**
 * sauvegarde de l'arbre AST produit à partir du text.gz obtenu dans un fichier .reconstruit.json.
 * @param {Array|Object} astreproduit - un fichier ast.
 */
FctIo.prototype.figeNouveauAst = function(astreproduit) {
  var fichierastreconstruitsortie = path.join(__dirname, '..', 'travaux',
    this.nomfichier + '.reconstruit.json');
  fs.writeFile(fichierastreconstruitsortie, JSON.stringify(astreproduit, null,
    4), (err) => {
    if (err) {
      console.error(err);
      return;
    };
    console.log(
      "Fige l'arbre AST obtenu à partir du fichier dot obtenu --> fichier.reconstruit.json"
    );
  });
}

/**
 * Affiche les 2 fichiers transpose.
 * @param {Array|Object} flatast - un fichier ast.
 * @param {Array|Object} flatastproduit - un fichier ast regenerer.
 */
FctIo.prototype.afficheDeuxAst = function(flatast, flatastproduit) {
  console.log("---- Desc 1 -----");
  console.dir(flatast);
  console.log("---- Desc 2 -----");
  console.dir(flatastproduit);
  console.log("---------");
}

/**
 * Sauvegarde les 2 fichiers transpose.
 * @param {Array|Object} flatast - un fichier ast.
 * @param {Array|Object} flatastproduit - un fichier ast regenerer.
 */
FctIo.prototype.sauveDeuxAst = function(flatast, flatastproduit) {
  var fichierasttranspose = path.join(__dirname, '..', 'travaux', this.nomfichier +
    '.un.json');
  fs.writeFile(fichierasttranspose, JSON.stringify(flatast, null, 4), (err) => {
    if (err) {
      console.error(err);
      return;
    };
    console.log("Fige le fichier transpose --> fichier.un.json");
  });

  var fichierasttransposegen = path.join(__dirname, '..', 'travaux', this.nomfichier +
    '.deux.json');
  fs.writeFile(fichierasttransposegen, JSON.stringify(flatastproduit, null, 4), (
    err) => {
    if (err) {
      console.error(err);
      return;
    };
    console.log(
      "Fige le fichier transpose regenerer  --> fichier.deux.json");
  });
}


module.exports = FctIo;
