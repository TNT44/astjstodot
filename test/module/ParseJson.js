
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
 * Verifie la structuture d'un objet
 * @param {Array|Object} structure - une structure.
 * @returns {boolean} true or false.
 */
function isObject(obj) {
    return (typeof obj === "object" && obj !== null) || typeof obj === "function";
};


const object1 = {
    a: 1,
    b: 2,
    c: 3
};

console.log(Object.getOwnPropertyNames(object1));
// expected output: Array ["a", "b", "c"]

// On affiche les noms et les valeurs 
// des propriétés avec Array.forEach
//Object.getOwnPropertyNames(obj).forEach(
//    function(val, idx, array) {
//      console.log(val + " -> " + obj[val]);
//  });
// affiche 
// 0 -> a
// 1 -> b
// 2 -> c


function showProps(obj, objName) {
    var result = ``;
    for (var i in obj) {
        // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
        if (obj.hasOwnProperty(i)) {
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    return result;
}

var myCar = {};
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

showProps(myCar, "myCar");


function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for (objectToInspect = o; objectToInspect !== null;
        objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(
            Object.getOwnPropertyNames(objectToInspect)
        );
    }

    return result;
};


var person = { fname: "John", lname: "Doe", age: 25 };

var txt = "";

for (x in person) {
    txt += person[x] + " ";
}

console.log(txt);
