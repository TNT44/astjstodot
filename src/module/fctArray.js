/**
30 01 2019 :
Je cherche a splitter la fonction isEqual en sous fonction
a diminuer la complexité de la fonction isEqual
a surcharger la comparaison de valeur ..
pour avoir un "8" = 8.


Version 1.0.0 du 06/05/2019
Version 1.0.1 du 11/12/2019

*/

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
    return obj === undefined;
}

function isDefined(obj) {
    return obj !== undefined;
}

function isNil(obj) {
    return obj == null;
}

function isArray(obj) {
    return nativeToString.call(obj) === '[object Array]';
}

function isObject(obj) {
    return nativeToString.call(obj) === '[object Object]';
}

function isNumber(obj) {
    return nativeToString.call(obj) === '[object Number]';
}

function isFunction(obj) {
    return nativeToString.call(obj) === '[object Function]';
}

function isString(obj) {
    return nativeToString.call(obj) === '[object String]';
}


/**
 * Get the value type.
 * @param {Array|Object} structure - une structure.
 * @returns {String} la value type.
 */
var getValueType = function (structure) {
    return Object.prototype.toString.call(structure);
};

/**
 * compare la value type de 2 structures.
 * @param {Array|Object} value - une structure value.
 * @param {Array|Object} other - une structure other.
 */
var isSameType = function (value, other) {

    // Get the value type
    var type = getValueType(value);

    // If the two objects are not the same type, return false
    if (type !== getValueType(other)) return false;

    return true;
};

/**
 * calcule la taille de la structure.
 * @param {Array|Object} structure - une structure.
 * @returns {int} la taille de structure.
 */
var getlength = function (structure) {
    var type = getValueType(structure);
    if (type === "[object Array]") {
        return structure.length;
    } else {
        return Object.keys(structure).length;
    }
};

/**
 *  Compare two items.
 * @param {Object} item1 - un objet.
 * @param {Object} item2 - un objet.
 * @returns {boolen} return vrai ou faux si les objects sont identiques.
 */
var compare = function (item1, item2) {

    // Get the object type
    var itemType = getValueType(item1);

    // If an object or array, compare recursively
    if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
        if (!isEqualDU(item1, item2)) return false;
    } else {
        // Otherwise, do a simple comparison
        // If the two items are not the same type, return false
        if (itemType !== getValueType(item2)) {
            console.log("----- comparaison d'item type -----");
            console.log("item2 =", item2);
            console.log("itemType item1 =", getValueType(item1));
            console.log("itemType item2 =", getValueType(item2));

            var item1str = "" + item1;
            var item2str = "" + item2;
            if (item2str == item1str) {
                console.log("-->identique");
                return true;
            }

            return false;
        }
        // Else if it's a function, convert to a string and compare
        // Otherwise, just compare
        if (itemType === "[object Function]") {
            if (item1.toString() !== item2.toString()) return false;
        } else {
            if (item1 !== item2) {
                console.log("----- difference -----");
                console.log("item1 =", item1);
                console.log("item2 =", item2);
                return false;
            }
        }

    }
    return true;
};


var isEqualDU = function (value, other) {

    console.log("----- isEqualDU -----");
    // Get the value type
    var type = getValueType(value);

    // If the two objects are not the same type, return false
    if (type !== getValueType(other)) return false;

    // If items are not an object or array, return false
    if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

    // Compare the length of the length of the two items
    var valueLen = getlength(value);
    var otherLen = getlength(other);
    if (valueLen !== otherLen) return false;



    // Compare properties
    if (type === "[object Array]") {
        for (var i = 0; i < valueLen; i++) {
            if (compare(value[i], other[i]) === false) return false;
        }
    } else {
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                if (compare(value[key], other[key]) === false) return false;
            }
        }
    }

    // If nothing failed, return true
    return true;

};
// ----------------------------------------------------
// -----------------------------------------------------


var isEqual = function (value, other) {

    // Get the value type
    var type = Object.prototype.toString.call(value);

    // If the two objects are not the same type, return false
    if (type !== Object.prototype.toString.call(other)) return false;

    // If items are not an object or array, return false
    if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

    // Compare the length of the length of the two items
    var valueLen = type === "[object Array]" ? value.length : Object.keys(value)
        .length;
    var otherLen = type === "[object Array]" ? other.length : Object.keys(other)
        .length;
    if (valueLen !== otherLen) return false;

    // Compare two items
    var compare = function (item1, item2) {

        // Get the object type
        var itemType = Object.prototype.toString.call(item1);

        // If an object or array, compare recursively
        if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
            if (!isEqual(item1, item2)) return false;
        }

        // Otherwise, do a simple comparison
        else {

            // If the two items are not the same type, return false
            if (itemType !== Object.prototype.toString.call(item2)) return false;

            // Else if it's a function, convert to a string and compare
            // Otherwise, just compare
            if (itemType === "[object Function]") {
                if (item1.toString() !== item2.toString()) return false;
            } else {
                if (item1 !== item2) return false;
            }

        }
    };

    // Compare properties
    if (type === "[object Array]") {
        for (var i = 0; i < valueLen; i++) {
            if (compare(value[i], other[i]) === false) return false;
        }
    } else {
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                if (compare(value[key], other[key]) === false) return false;
            }
        }
    }

    // If nothing failed, return true
    return true;

};

//module.exports = isEqual;

function is(a, b) {
    return a === b && (a !== 0 || 1 / a === 1 / b) // false for +0 vs -0
        || a !== a && b !== b; // true for NaN vs NaN
}

/**
 * Compare si 2 tableaux simple sont identiques
 * @param {Array} arr1 tableau simple 1
 * @param {Array} arr2 tableau simple 2
 * @return true or false.
 */
function comparetableausimple(arr1, arr2) {
    if (arr1.length == arr2.length
        && arr1.every(function (u, i) {
            // Use "is" instead of "==="
            return is(u, arr2[i]);
        })
    ) {
        return true;
    }
    return false;
}

module.exports = {
    isUndefined: isUndefined,
    isDefined: isDefined,
    isNil: isNil,
    isArray: isArray,
    isObject: isObject,
    isNumber: isNumber,
    isFunction: isFunction,
    isString: isString,
    isEqual: isEqual,
    isEqualDU: isEqualDU,
    comparetableausimple: comparetableausimple,
    compare: compare
};
