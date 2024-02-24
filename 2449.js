var input = require("fs").readFileSync("/dev/stdin", "utf8");
input = input.split("\n");
var i1 = input.shift().toString().split(" ");
var vetor = input.shift().toString().split(" ").map(Number);
n = parseInt(i1.shift());
tamanho = parseInt(i1.shift());
let resposta = 0;

for (var i = 0; i < n; i++) {
  diferenca = tamanho - vetor[i];
  resposta += Math.abs(diferenca);
  if (i + 1 < n) {
    vetor[i + 1] += diferenca;
  }
}
console.log(resposta);
