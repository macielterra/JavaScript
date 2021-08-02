/*function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}
console.log(estaEntre(10, 150, 50))
console.log(estaEntre(100, 150, 50))
console.log(estaEntre(150, 150, 150))*/

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}
console.log(estaEntre(10, 150, 50))
console.log(estaEntre(100, 150, 50))