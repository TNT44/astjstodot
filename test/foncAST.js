var dash = require("min-dash");
//var StringBuilder = require("./StringBuilder");

/**
Version 1.0.0 du 06/05/2019
*/

/**
 * lister les noeuds d'un graph.
 * @param {Array|Object} unfichierast - un fichier ast.
 * @returns {Array} une liste de noeuds.
 */
var listernode = function(unfichierast) {
  var tab = [];
  explorernode(unfichierast, tab);
  return tab;
};

/**
 * lister les edge d'un graph.
 * @param {Array|Object} unfichierast - un fichier ast.
 * @returns {Array} une liste de noeuds.
 */
var listeredge = function(unfichierast) {
  var tab = [];
  exploreredge(unfichierast, tab);
  return tab;
};

var explorernode = function(unfichierast, tab) {

  var enreg = unfichierast;
  var children;

  if (dash.has(enreg, "type")) {

    switch (enreg.type) {
      case "attr_stmt":

        break;
      case "node_stmt":

        if (dash.has(enreg, "node_id")) {
          var nod = enreg.node_id;
          tab.push(nod.id);
        }
        break;
      case "edge_stmt":

        break;
      case "digraph":
        if (dash.has(enreg, "children")) {
          children = enreg.children;
          children.forEach((element) => {
            explorernode(element, tab);
          });
        }
        break;
      case "graph":
        if (dash.has(enreg, "children")) {
          children = enreg.children;
          children.forEach((element) => {
            explorernode(element, tab);
          });
        }
        break;
      case "subgraph":

        break;
      default:
    }
  }

};

var exploreredge = function(unfichierast, tab) {

  var enreg = unfichierast;
  var children;

  console.log("rentre dans explorernode");



  if (dash.has(enreg, "type")) {

    switch (enreg.type) {
      case "attr_stmt":

        break;
      case "node_stmt":

        break;
      case "edge_stmt":
        console.log("edge_stmt");

        if (dash.has(enreg, "edge_list")) {
          var nod = enreg.node_id;

          tab.push(nod.id);
          console.log("ID =" + nod.id);
        }
        break;
      case "digraph":
        if (dash.has(enreg, "children")) {
          children = enreg.children;
          children.forEach((element) => {
            exploreredge(element, tab);
          });
        }
        break;
      case "graph":
        if (dash.has(enreg, 'children')) {
          children = enreg.children;
          children.forEach((element) => {
            exploreredge(element, tab);
          });
        }
        break;
      case 'subgraph':

        break;
      default:
    }
  }


  console.log('sortie explorernode');

  //return tab;
};

/**
 * Recherche un noeud par ID
 * @param {Array|Object} unfichierast - un fichier ast.
 * @param {String} nomnoeud - nom du noeud.
 * @returns {Object} Le noeud.
 */


var comparerNoeud = function(enreg, nomnoeud) {

  if (dash.has(enreg, 'node_id')) {
    var nod = enreg.node_id;
    var nom = nod.id;
    if (nom.localeCompare(nomnoeud) == 0) {
      return true;
    }
  }

  return false;
};

//var i = 0;

var rechercheANode = function(unfichierast, nomnoeud) {
  var enreg = unfichierast;
  var children;
  var ret = null;
  //console.log("Rentre dans rechercheANode " + i++);

  if (dash.has(enreg, "type")) {

    switch (enreg.type) {
      case "attr_stmt":

        break;
      case "node_stmt":
        if (dash.has(enreg, "node_id")) {
          var nod = enreg.node_id;
          //console.log("Rentre dans node_stmt");
          var nom = nod.id;
          if (nom.localeCompare(nomnoeud) == 0) {

            //console.log("nom =" + nom);
            //console.log("nomnoeud =" + nomnoeud);
            //console.log("Identique");
            //this.ret = enreg;
            return enreg;
          }
        }
        break;
      case "edge_stmt":

        break;

      case "digraph":
      case "graph":
        if (dash.has(enreg, "children")) {
          children = enreg.children;
          children.some((element) => {
            ret = rechercheANode(element, nomnoeud);
            if (ret != null) {
              //console.log(" graph ret est non null");
              return ret;
            }
          });
        }
        break;
      case "subgraph":

        break;
      default:
    }
  }

  //if (ret != null) {
  //  console.log("ret est non null");
  //}
  return ret;

};


module.exports = {
  listernode: listernode,
  listeredge: listeredge,
  rechercheUnNoeud: rechercheANode,
  comparerNoeud: comparerNoeud
};