function anoBissexto(ano) {
    const anoCem = ano % 100 == 0
    const anoQuatrocentos = ano % 400 == 0
    const anoQuatro = ano % 4 == 0
    return (anoQuatro && !anoCem) || anoQuatrocentos
}

console.log(anoBissexto(2020))
console.log(anoBissexto(2021))
console.log(anoBissexto(2100))

function anoBissexto1(ano) {
    return new Date(ano, 1, 29).getDate() === 29;
}
console.log(anoBissexto(2020))
console.log(anoBissexto(2021))
console.log(anoBissexto(2100))