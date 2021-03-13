
var assert = require("chai").assert;
var AstJsToDot = require('../src/AstJsToDot');
var fixtures = require("./fixtures");


describe('runTests', function () {

    // --------------- genereattrstmt --------------------

    it('genereattrstmt', function (done) {

        var entree = fixtures.attrstmt;

        var res = AstJsToDot.genereattrstmt(entree, 0);

        //console.log(res);

        assert.equal(res, 'graph [rankdir="LR"]\n');

        done();
    });

    it('genereattrstmt sans type', function (done) {

        var entree = fixtures.attrstmt;
        delete entree.type;

        var res = AstJsToDot.genereattrstmt(entree, 0);

        //console.log(res);

        assert.equal(res, '');

        done();
    });

    it('genereattrstmt avec mauvais type', function (done) {

        var entree = fixtures.attrstmt;
        entree.type = "toto";

        var res = AstJsToDot.genereattrstmt(entree, 0);

        //console.log(res);

        assert.equal(res, '');

        done();
    });

    // -------------- genereedgestmt -------------------

    it('genereedgestmt', function (done) {

        var entree = fixtures.edgestmt;

        var res = AstJsToDot.genereedgestmt(entree, 0);

        //console.log(res);

        assert.equal(res, '"MATH 100" -> "MATH 101" [pos="e,237,215.25 126.4,180.87 155.89,190.04 195.69,202.41 227.11,212.18"]\n');

        done();
    });


    it('genereedgestmt sans type', function (done) {

        var entree = fixtures.edgestmt;
        delete entree.type;

        var res = AstJsToDot.genereedgestmt(entree, 0);

        //console.log(res);

        assert.equal(res, '');

        done();
    });

    it('genereedgestmt avec mauvais type', function (done) {

        var entree = fixtures.edgestmt;
        entree.type = "toto";

        var res = AstJsToDot.genereedgestmt(entree, 0);

        //console.log(res);

        assert.equal(res, '');

        done();
    });

    it('genereedgestmt sans attr_list', function (done) {

        var entree = fixtures.edgestmtsansattr;

        var res = AstJsToDot.genereedgestmt(entree, 0);

        //console.log(res);

        assert.equal(res, '"a" -> "b" \n');

        done();
    });

    // ---------------------- generenodestmt -------------------------

    it('generenodestmt', function (done) {

        var entree = fixtures.nodestmt;

        var res = AstJsToDot.generenodestmt(entree, 0);

        //console.log(res);

        assert.equal(res, '"e" [shape="polygon" style="filled" fillcolor="#ff7f0e"]\n');

        done();
    });


    it('generenodestmt sans type', function (done) {

        var entree = fixtures.nodestmt;
        delete entree.type;

        var res = AstJsToDot.generenodestmt(entree, 0);

        //console.log(res);

        assert.equal(res, '');

        done();
    });

    it('generenodestmt avec mauvais type', function (done) {

        var entree = fixtures.nodestmt;
        entree.type = "toto";

        var res = AstJsToDot.generenodestmt(entree, 0);

        //console.log(res);

        assert.equal(res, '');

        done();
    });

    it('generenodestmt sans attr_list', function (done) {

        var entree = fixtures.nodestmtsansattr;

        var res = AstJsToDot.generenodestmt(entree, 0);

        //console.log(res);

        assert.equal(res, '"e" \n');

        done();
    });


    // -------------- genidnumber ------------

    it('genidnumber avec str', function (done) {

        var res = AstJsToDot.genidnumber("1");

        //console.log(res);

        assert.equal(res, '"1" ');

        done();
    });

    it('genidnumber avec nombre', function (done) {

        var res = AstJsToDot.genidnumber(2);

        //console.log(res);

        assert.equal(res, '"2" ');

        done();
    });

    it('genidnumber avec nombre 0', function (done) {

        var res = AstJsToDot.genidnumber(0);

        //console.log(res);

        assert.equal(res, '"0" ');

        done();
    });

    it('genidnumber avec nombre et fin ligne', function (done) {

        var res = AstJsToDot.genidnumber(3, "end");

        //console.log(res);

        assert.equal(res, '"3"end');

        done();
    });

    it('genidnumber avec nombre et fin ligne vide', function (done) {

        var res = AstJsToDot.genidnumber(4, "");

        //console.log(res);

        assert.equal(res, '"4"');

        done();
    });

    it('genidnumber avec nombre et fin ligne undefined', function (done) {

        var res = AstJsToDot.genidnumber(5, undefined);

        //console.log(res);
        //undefined -- tu prends la valeur par défaut
        assert.equal(res, '"5" ');

        done();
    });


    // --------------- genereattr --------------------

    it('genereattr', function (done) {

        var entree = fixtures.attr;

        var res = AstJsToDot.genereattr(entree, 0, "\n");

        //console.log(res);

        assert.equal(res, 'rankdir="LR" \n');

        done();
    });

    it('genereattr sans type', function (done) {

        var entree = fixtures.attr;
        delete entree.type;

        var res = AstJsToDot.genereattr(entree, 0);

        //console.log(res);

        assert.equal(res, '');

        done();
    });

    it('genereattr avec mauvais type', function (done) {

        var entree = fixtures.attr;
        entree.type = "toto";

        var res = AstJsToDot.genereattr(entree, 0);

        //console.log(res);

        assert.equal(res, '');

        done();
    });


    // --------------- genereattr --------------------
    
});