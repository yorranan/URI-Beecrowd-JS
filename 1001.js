var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var valoresRecebidos = input.split("\n");
var A = parseInt(valoresRecebidos.shift());
var B = parseInt(valoresRecebidos.shift());
console.log('X = ' + (A + B))