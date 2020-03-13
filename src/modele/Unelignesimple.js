

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}


function Unelignesimple( value) {

    this.nom = value || "";
    this.id = create_UUID();
}

/** 
 * Affiche une ligne. 
 * ID | nom
*/
Unelignesimple.prototype.toString = function() {

    return this.id + " | " + this.nom + " | ";
  
};

/** Affiche une ligne. 
 * 
 *  ID | nom
 * <ligne>
*/
Unelignesimple.prototype.toDebugString = function() {
    return " | " + this.id + " | " + this.nom + " | " + "\n";
};

/** getid. 
 * @return id;
*/
Unelignesimple.prototype.getId = function() {
    return this.id;
};

/** setid. 
 * ID | nom
*/
Unelignesimple.prototype.setId = function(numid) {
    this.id = numid;
};

/** getnom. 
 * @return id;
*/
Unelignesimple.prototype.getNom = function() {
    return this.nom;
};

/** setnom. 
 * ID | nom
*/
Unelignesimple.prototype.setNom = function(unnom) {
    this.nom = unnom;
};

module.exports = Unelignesimple;