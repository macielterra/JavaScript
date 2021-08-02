"use strict";

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in num) {
  if (x == 5) {
    break;
  }

  console.log("".concat(x, " = ").concat(num[x]));
}

for (y in num) {
  if (y == 5) {
    continue;
  }

  console.log("".concat(y, " = ").concat(num[y]));
}

externo: for (a in num) {
  for (b in num) {
    if (a == 2 && b == 3) break externo;
    console.log("Par = ".concat(a, ",").concat(b));
  }

  console.log("Não fim");
}

console.log("Fim");