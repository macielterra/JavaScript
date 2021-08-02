"use strict";

var contador = 1;

while (contador <= 10) {
  console.log("contador =".concat(contador));
  contador++;
}

for (i = 0; i <= 10; i++) {
  console.log("i = ".concat(i));
}

var notas = [5.8, 7.4, 4.0, 10];

for (var _i = 0; _i < notas.length; _i++) {
  console.log("nota = ".concat(notas[_i]));
}