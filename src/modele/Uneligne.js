/**
 * En cours de reflexion
 */

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}


function Uneligne( value) {

    this.nom = value || "";
    this.id = create_UUID();
    this.tabvaleur = [];

    this.tabvaleur.push(this.nom);
}

/** 
 * Affiche une ligne. 
 * ID | nom
*/
Uneligne.prototype.toString = function() {

    return this.id + " | " + this.nom + " | ";
  
};

/** Affiche une ligne. 
 * 
 *  ID | nom
 * <ligne>
*/
Uneligne.prototype.toDebugString = function() {
    return " | <" + this.id + "> " + this.nom + " | " + "\n";
};

/** getid. 
 * @return id;
*/
Uneligne.prototype.getId = function() {
    return this.id;
};

/** setid. 
 * ID | nom
*/
Uneligne.prototype.setId = function(numid) {
    this.id = numid;
};

/** getnom. 
 * @return id;
*/
Uneligne.prototype.getNom = function() {
    return this.nom;
};

/** setnom. 
 * ID | nom
*/
Uneligne.prototype.setNom = function(unnom) {
    this.nom = unnom;
};

Uneligne.prototype.addLignesimple = function(uneligne) {
    this.tabligne.push(uneligne);
}

Uneligne.prototype.getNbLignesimple = function() {
    return this.tabligne.length;
}

module.exports = Uneligne;