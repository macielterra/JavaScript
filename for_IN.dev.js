"use strict";

var notas = [10, 4.5, 7.0, 9.4, 5.1, 6];

for (var i in notas) {
  console.log(i, notas[i]);
}

var pessoa = {
  nome: 'Maciel',
  sobrenome: 'Paiva',
  idade: 39,
  peso: 82,
  altura: 1.84
};

for (var atributo in pessoa) {
  console.log("".concat(atributo, " = ").concat(pessoa[atributo]));
}