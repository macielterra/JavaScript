"use strict";

Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

var imprimirResultado = function imprimirResultado(nota) {
  if (nota.entre(9, 10)) {
    console.log('Quandro de Honra');
  } else if (nota.entre(7, 8.99)) {
    console.log('Aprovado');
  } else if (nota.entre(4, 6.99)) {
    console.log('Recuperação');
  } else if (nota.entre(0, 3.99)) {
    console.log('Reprovado');
  } else {
    console.log('Nota Inválida');
  }
};

imprimirResultado(10);
imprimirResultado(8);
imprimirResultado(4.5);
imprimirResultado(6.4);
imprimirResultado(-7);
console.log('Fim');