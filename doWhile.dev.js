"use strict";

function inteiroAleatorio(min, max) {
  var valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

var opcao = 0;

do {
  opcao = inteiroAleatorio(-1, 10);
  console.log("Op\xE7\xE3o escolhida foi ".concat(opcao, "."));
} while (opcao != -1);

console.log('Fim');