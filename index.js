const prompt = require("prompt-sync")();
let funcao = require("./funcao.js")();

const numero = prompt("Digite um número");

return funcao.eParOuImpar(numero);
