var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
var assert = require("chai").assert;

var createUnSchema = require('../../module/CreateJsonSchema').createUnSchema;
var createJsonSchema = require('../../module/CreateJsonSchema').createJsonSchema;

describe('test CreateJSONSCHEMA ', function () {

  var tab = {
    "nav": [{
      "id": "1",
      "firstName": "Tom",
      "lastName": "Cruise",
      "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
    },
    {
      "id": "2",
      "firstName": "Maria",
      "lastName": "Sharapova",
      "photo": "https://jsonformatter.org/img/Maria-Sharapova.jpg"
    },
    {
      "id": "3",
      "firstName": "Robert",
      "lastName": "Downey Jr.",
      "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg"
    }
    ],

    "objactu": {
      "id": "1",
      "unedate": "19/12/2018",
      "uneheure": "10:10:10",
      "unesource": "Boursorama",
      "untitre": "profil warning",
      "unsymbole": "Alcatel"
    },

    "unportefeuille": {
      "id": "1",
      "nom": "portefeuille1",
      "commentaire": "portefeuille virtuel",
      "datecreation": "12/06/2018",
      "tableautransaction2": [],
      "tableaudetrade": [],
      "tableauactu": [],
      "evaluation": {
        "liquidites": "2645646",
        "valeurtitreenpf": "2645646",
        "evaltotal": "145246",
        "montantinvesti": "456789",
        "total": "154546"
      },
      "beneficeperte": {
        "montantinvesti": "445464",
        "suite": "acompleter"
      }
    },

    "unetransaction2": {
      "id": "1",
      "uneref": "",
      "codeime": "FR3300008",
      "unsymbole": "Alcatel",
      "typetr": "Achat",
      "quantite": "100",
      "quotite": "1",
      "prixunit": "12.3",
      "unevaleur": "1230",
      "frais": "14",
      "total": "1244",
      "unm": "",
      "datetransaction": "19/12/2018",
      "uneheure": "10:10:10",
      "unreste": "100",
      "unpaiement": "20000",
      "unsolde": "6504",
      "unerecette": "0",
      "rang": "1",
      "unportefeuilleid": "114754",
      "untradeid": "1154"
    },

    "untrade": {
      "listeachatvente": [],
      "id": "1",
      "unsymbole": "Alcatel",
      "achat": {
        "prix": "14",
        "frais": "13",
        "total": "1400"
      },
      "vente": {
        "prix": "14.14",
        "frais": "13",
        "total": "1414"
      },
      "beneficeperte": "14",
      "pourcentage": "1.83",
      "unedate": "19/12/2018",
      "uneheure": "10:10:10"
    }
  };


  it('essai un', function () {
    var un = createUnSchema();
    //expect(un.getNom()).toEqual('montableau');
    console.log(un);
    console.log("-----------------------------------");
    assert.isDefined(un);
  });

  it('essai deux', function () {
    var un = createJsonSchema("Schema principale", tab);
    //expect(un.getNom()).toEqual('montableau');
    console.log(un);
    console.log("-----------------------------------");
    assert.isDefined(un);
  });

});