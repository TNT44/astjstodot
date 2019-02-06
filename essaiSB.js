var StringBuilder = require("./module/StringBuilder.js")
const performance = require('perf_hooks').performance;

var sb = new StringBuilder();
sb.append("This is");
sb.append("much better looking");
sb.append("than using +=");

// joins the string
var myString = sb.toString();

// Cleans out the string buffer in the StringBuilder.
// This effectively makes it empty in case you did not
// know what cleaning out a buffer in this context
// meant.
sb.clear();

var t0 = performance.now();
// standard string append
var str = "";
for (var i = 300000; i > 0; i--) {
  str += "String concatenation. ";
}

var t1 = performance.now();
console.log("Call to String concatenation took " + (t1 - t0) + " milliseconds.")

// array join
var t0m = performance.now();
var str = "",
  sArr = [];
for (var i = 300000; i > 0; i--) {
  sArr[i] = "String concatenation. ";
}
str = sArr.join("");
var t1m = performance.now();
console.log("Call to array join took " + (t1m - t0m) + " milliseconds.")

//StringBuilder
var t0s = performance.now();

var sb = new StringBuilder();
for (var i = 300000; i > 0; i--) {
  sb.append("String concatenation. ");
}
str = sb.toString();
var t1s = performance.now();
console.log("Call to StringBuilder took " + (t1s - t0s) + " milliseconds.")