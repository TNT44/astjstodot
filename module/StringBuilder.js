/**
Version 1.0.0 du 06/05/2019
*/

function StringBuilder(value) {
    this.strings = new Array();
    this.append(value);
}

StringBuilder.prototype.append = function(value) {
    if (value) {
        this.strings.push(value);
    }
};

StringBuilder.prototype.appendtab = function(value, nb = 1) {
    if (value) {
        var tab = " ";
        this.strings.push(tab.repeat(nb) + value);
    }
};

StringBuilder.prototype.addtab = function(nb = 1) {
    this.strings.push("\t".repeat(nb));
};

StringBuilder.prototype.clear = function() {
    this.strings.length = 0;
};

StringBuilder.prototype.toString = function() {
    return this.strings.join("");
};

StringBuilder.prototype.toPointVirguleString = function() {
    return this.strings.join("; ");
};

StringBuilder.prototype.toJoinString = function(jointure) {
    return this.strings.join(jointure);
};

module.exports = StringBuilder;