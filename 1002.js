var input = require("fs").readFileSync("/dev/stdin", "utf8");
let raio = parseFloat(input);
var pi = 3.14159;
console.log("A=" + (pi * (raio * raio)).toFixed(4));
