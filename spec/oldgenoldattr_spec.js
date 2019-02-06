var StringBuilder = require('./../module/StringBuilder');
var AstToDot = require('./../module/AstToDot');
var fixtures = require('./fixtures');

var dash = require("min-dash");

describe('old test genération d un attribut: ', function() {

  it('genere un attribut', function() {

    var tabmm = fixtures.attr;

    var res = AstToDot.genereattr(tabmm, 0);

    expect(dash.has(tabmm, 'type')).toBeTruthy();

    console.dir("t1 =" + res);
  });

  it('genere un attribut 2 ', function() {

    var tabmm = fixtures.attr;
    //console.log(tabmm);
    //console.log("-------------------------------------------------");

    //  var asto = new AstToDot(tabmm);
    var res = AstToDot.genereattr(tabmm);

    expect(dash.has(tabmm, 'type')).toBeTruthy();

    console.dir("t2 =" + res);
  });

  it('genere un attr_stmt', function() {
    var attrstmt = {
      "type": "attr_stmt",
      "target": "graph",
      "attr_list": [{
        "type": "attr",
        "id": "rankdir",
        "eq": "LR"
      }]
    };

    expect(dash.has(attrstmt, 'type')).toBeTruthy();

    var res = AstToDot.genereattrstmt(attrstmt);
    console.dir("t3 =" + res);
  });

  it('genere un attr_edge', function() {
    var edgestmt = {
      "type": "edge_stmt",
      "edge_list": [{
        "type": "node_id",
        "id": "MATH 100"
      }, {
        "type": "node_id",
        "id": "MATH 101"
      }],
      "attr_list": [{
        "type": "attr",
        "id": "pos",
        "eq": "e,237,215.25 126.4,180.87 155.89,190.04 195.69,202.41 227.11,212.18"
      }]
    };

    var rep =
      '"MATH 100" -> "MATH 101" [pos="e,237,215.25 126.4,180.87 155.89,190.04 195.69,202.41 227.11,212.18"];';


    expect(dash.has(edgestmt, 'type')).toBeTruthy();

    var res = AstToDot.genereedgestmt(edgestmt);
    console.dir("t4 =" + res);

    var toto = res.normalize("NFC");
    console.dir("t4b =" + toto);
  });

  it('genere un digraph', function() {
    var simple = fixtures.simple;
    expect(dash.has(simple, 'type')).toBeTruthy();

    var res = AstToDot.generegraph(simple);
    console.log("--- t5 ---\n" + res);
  });
});
