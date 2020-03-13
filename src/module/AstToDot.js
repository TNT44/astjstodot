var dash = require("min-dash");
var StringBuilder = require("./StringBuilder");

/**
Version 1.0.0 du 06/05/2019
*/

function AstToDot() {



    /*
   *  exports.attr = {
   *    "type": "attr",
   *    "id": "rankdir",
   *    "eq": "LR"
   *  };
   */

}

/**
 * construit un graph.
 * @param {Array|Object} unfichierast - un fichier ast.
 * @param {int} ntab - Nombre de tabulation.
 * @returns {String} resultat de la génération.
 */
generegraph = function(unfichierast, nbtab = 0) {

    var enreg = unfichierast;
    //console.log("entree", enreg);
    var sb = new StringBuilder();

    if (dash.has(enreg, "type")) {

        // verifie le strict.
        if (dash.has(enreg, "strict")) {
            if (enreg.strict) {
                sb.append("strict ");
            }
        }

        // verifie sir graph ou digraph.
        if (enreg.type == "graph") {
            sb.append("graph");
        } else if (enreg.type == "digraph") {
            sb.append("digraph");
        }
        sb.append(" ");

        // verifie la présence d'un id.
        if (dash.has(enreg, "id")) {
            sb.append(genid(enreg.id));
        }

        sb.append("{\n");

        // regarde la partie stmt_list
        if (dash.has(enreg, "children")) {
            var children = enreg.children;
            children.forEach(function(element) {
                sb.append(dispatch(element, 1));
            });
        }
        sb.append("}\n");
    }



    return sb.toString();
};

/**
 * construit un attr.
 * @param {Array|Object} enreg - un enregistrement.
 * @param {int} ntab - Nombre de tabulation.
 * @param {String} fin - La fin de la ligne.
 * @returns {String} resultat de la génération.
 */
genereattr = function(enreg, nbtab, fin = "\n") {
    var sb = new StringBuilder();

    if (dash.has(enreg, "type")) {
        if (enreg.type == "attr") {
            sb.addtab(nbtab);
            sb.append(enreg.id);
            sb.append("=");
            var objeq = enreg.eq;
            if (dash.isObject(objeq)) {
                if (dash.has(objeq, "html")) {

                    if (objeq.html) {
                        sb.append("<");
                        sb.append(objeq.value);
                        sb.append("> ");
                    } else {
                        sb.append(genparenth(objeq.value));
                    }
                }

            } else {
                //console.log("enreg.id = " + enreg.id);
                sb.append(genparenth(enreg.eq));
            }
            sb.append(fin);
        }
    }

    return sb.toString();
};

/*
var attrstmt = {
  "type": "attr_stmt",
  "target": "graph",
  "attr_list": [{
    "type": "attr",
    "id": "rankdir",
    "eq": "LR"
  }]
};
*/
/**
 * construit un attr_stmt.
 * @param {Array|Object} enreg - un enregistrement.
 * @param {int} ntab - Nombre de tabulation.
 * @returns {String} resultat de la génération.
 */
genereattrstmt = function(enreg, nbtab) {
    var sb = new StringBuilder();

    if (dash.has(enreg, "type")) {
        if (enreg.type == "attr_stmt") {
            sb.addtab(nbtab);
            sb.append(enreg.target);
            sb.append(" ");
            sb.append(buildtable(enreg.attr_list));
        }
    }

    return sb.toString();
};

/**
 * construit un edge_stmt.
 * @param {Array|Object} enreg - Un enregistrement .
 * @param {int} ntab - Nombre de tabulation.
 * @returns {String} resultat de la génération.
 */
genereedgestmt = function(enreg, nbtab) {
    var sb = new StringBuilder();

    if (dash.has(enreg, "type")) {
        if (enreg.type == "edge_stmt") {

            var tab = enreg.edge_list;

            var sb2 = new StringBuilder();
            sb.addtab(nbtab);
            tab.forEach(function(element) {
                sb2.append(genidedge(element));
            });
            //console.log("genereedgestmt >>" + sb2.toJoinString("-> "));
            sb.append(sb2.toJoinString("-> "));

            if (dash.has(enreg, "attr_list")) {
                sb.append(buildtable(enreg.attr_list));
            }

        }
    }

    return sb.toString();
};

/**
 * construit un node_stmt.
 * @param {Array|Object} enreg - Un enregistrement .
 * @param {int} ntab - Nombre de tabulation.
 * @returns {String} resultat de la génération.
 */
generenodestmt = function(enreg, nbtab) {
    var sb = new StringBuilder();

    if (dash.has(enreg, "type")) {
        if (enreg.type == "node_stmt") {

            sb.addtab(nbtab);
            sb.append(genidnode(enreg.node_id));

            if (dash.has(enreg, "attr_list")) {
                sb.append(buildtable(enreg.attr_list));
            }

        }
    }
    //console.log("genNodeStmt >>" + sb.toString());
    return sb.toString();
};

/**
 * construit un tableau d'attr_list.
 * @param {Array|Object} tab - Un tableau d'attr_list.
 * @param {int} ntab - Nombre de tabulation.
 * @returns {String} resultat de la génération.
 */
buildtable = function(tab, nbtab) {
    var sb = new StringBuilder();
    var sbt = new StringBuilder();
    if (tab.length > 0) {
        sb.append("[");
        tab.forEach(function(element) {
            sbt.append(genereattr(element, 0, ""));
        });
        sb.append(sbt.toString().trim());
        sb.append("]");
    }
    sb.append("\n");
    return sb.toString();
};

/**
 * construit un subgraph.
 * @param {Array|Object} enreg - un enregistrement.
 * @param {int} ntab - Nombre de tabulation.
 * @returns {String} resultat de la génération.
 */
generesubgraph = function(enreg, nbtab) {
    //console.log("entree", enreg);
    var sb = new StringBuilder();

    //if (dash.has(enreg, "type")) {
    //  if (enreg.type == "subgraph") {
    sb.addtab(nbtab);
    if (dash.has(enreg, "strict")) {
        if (enreg.strict) {
            sb.append("strict ");
        }
    }
    sb.append("subgraph ");
    sb.append(genidsub(enreg.id));
    sb.append("{\n");
    if (dash.has(enreg, "children")) {
        var children = enreg.children;
        children.forEach(function(element) {
            sb.append(dispatch(element, nbtab + 1));
        });
    }
    sb.addtab(nbtab);
    sb.append("}\n");
    //  }
    //}
    return sb.toString();
};

/**
 * construit un edgesubgraph.
 * @param {Array|Object} enreg - Objet subgraph.
 * @returns {String} resultat de la génération.
 */
genereedgesubgraph = function(enreg) {
    //console.log("entree", enreg);
    var sb = new StringBuilder();
    var sb2 = new StringBuilder();
    sb.append(" {");
    if (dash.has(enreg, "children")) {
        var children = enreg.children;
        children.forEach(function(element) {
            sb2.append(genidnode(element.node_id, 0));
        });
        sb.append(sb2.toPointVirguleString());
    }
    sb.append(" }");
    //  }
    //}
    return sb.toString();
};

/**
 * Dispatch la construction des elements en fonction du type.
 * @param {Array|Object} element - un objet.
 * @param {int} ntab - Nombre de tabulation.
 * @returns {String} resultat de la génération.
 */
dispatch = function(element, nbtab = 0) {
    var sb = new StringBuilder();

    switch (element.type) {
    case "attr_stmt":
        return genereattrstmt(element, nbtab);
        break;
    case "node_stmt":
        return generenodestmt(element, nbtab);
        break;
    case "edge_stmt":
        return genereedgestmt(element, nbtab);
        break;
    case "subgraph":
        return generesubgraph(element, nbtab);
        break;
    case "id=id":
        var rep = "Je ne connais pas : " + element.type + ".";
        break;
    default:
        var rep = "Je ne connais pas : " + element.type + ".";
        sb.append(rep);
        console.log(rep);
        break;
    }

    return sb.toString();
};

//-------------------------------------------------------------------

genidedge = function(element, fin = " ") {
    //console.log("genidedge");
    var sb = new StringBuilder();
    if (dash.has(element, "type")) {

        switch (element.type) {
        case "node_id":
        //console.log("node_id");
        //if (element.id instanceof Number) {
        //  sb.append(genidnumber(element.id, ""));
        //} else {
            sb.append(genid(element.id, ""));
            //}
            if (dash.has(element, "port")) {
                sb.append(":");
                var strport = element.port;
                sb.append(genid(strport.id, ""));
                if (strport.compass_pt != null) {
                    sb.append(":");
                    sb.append(strport.compass_pt);
                }
            }

            sb.append(fin);
            //    console.log(">>" + sb.toString());
            return sb.toString();
            break;
        case "subgraph":
        //  console.log("subgraph");
        //console.dir(element);
        //sb.append('{');
        //sb.append('}');
            sb.append(genereedgesubgraph(element));
            //console.log(">>" + sb.toString());
            return sb.toString();
            break;
        default:
            sb.append("inconnu");
            break;
        }
    } else {
        sb.append("pas de type");
    }
    //console.log(">>" + sb.toString());
    return sb.toString();
};


genid = function(str, fin = " ") {
    //console.log("genid " + str);
    var sb = new StringBuilder();
    sb.append("\"");
    sb.append("" + str);
    sb.append("\"");
    sb.append(fin);
    return sb.toString();
};

genidsub = function(str, fin = " ") {
    //console.log("genid " + str);
    var sb = new StringBuilder();
    sb.append("\"");
    sb.append(str);
    sb.append("\"");
    sb.append(fin);
    return sb.toString();
};

genidnumber = function(str, fin = " ") {
    console.log("genidnumber " + str);
    var sb = new StringBuilder();
    sb.append("\"");
    if (str == 0) {
        sb.append("0");
    } else {
        sb.append(str);
    }
    sb.append("\"");
    sb.append(fin);
    return sb.toString();
};

genidnode = function(str, fin = " ") {
    var sb = new StringBuilder();
    sb.append("\"");
    sb.append("" + str.id);
    sb.append("\"");
    sb.append(fin);
    return sb.toString();
};

genparenth = function(str, fin = " ") {
    var sb = new StringBuilder();
    sb.append("\"");
    sb.append("" + str);
    sb.append("\"");
    sb.append(fin);
    return sb.toString();
};

module.exports = AstToDot;

module.exports = {
    AstToDot: AstToDot,
    genereattr: genereattr,
    genereattrstmt: genereattrstmt,
    genereedgestmt: genereedgestmt,
    generesubgraph: generesubgraph,
    generegraph: generegraph
};