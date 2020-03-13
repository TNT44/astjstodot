const uuidv5 = require('uuid/v5');

const StringBuilder = require('./../module/StringBuilder');

var Unelignesimple = require('./Unelignesimple');

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}


function Untableau(unid , value) {

    this.id = unid || "";
    this.nom = value || "";
    this.tabligne = [];

    if (this.id === "")
    {
        this.id = create_UUID();
    }
}

/** Affiche le tableau uniquement. 
 * ID | nom
*/
Untableau.prototype.toString = function() {

    return this.id + " | " + this.nom + " | ";
  
};

/** Affiche le tableau et les diverses lignes 
 * 
 *  ID | nom
 * <ligne>
*/
Untableau.prototype.toDebugString = function() {
    var deb = " | " + this.id + " | " + this.nom + " | " + "\n";

    var sb = new StringBuilder();
    sb.append(deb);

    this.tabligne.forEach((un) => {
        sb.append(un.toDebugString());
    });
    
    return sb.toString();
};

/** getid. 
 * @return id;
*/
Untableau.prototype.getId = function() {
    return this.id;
};

/** setid. 
 * ID | nom
*/
Untableau.prototype.setId = function(numid) {
    this.id = numid;
};

/** getnom. 
 * @return id;
*/
Untableau.prototype.getNom = function() {
    return this.nom;
};

/** setnom. 
 * ID | nom
*/
Untableau.prototype.setNom = function(unnom) {
    this.nom = unnom;
};

/**
 * Ajout un objet de type uneligne
 */
Untableau.prototype.addUneligne = function(uneligne) {
    this.tabligne.push(uneligne);
}

/**
 * Créer une ligne;
 */
Untableau.prototype.addligne = function(nom) {

    this.tabligne.push(new Unelignesimple(nom));
}

Untableau.prototype.getNbLigne = function() {
    return this.tabligne.length;
}

module.exports = Untableau;