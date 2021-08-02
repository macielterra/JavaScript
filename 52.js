function somarNumeros(numeros) {
    const somaNumero = numeros.length

    return (somaNumero === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}
console.log(somarNumeros(10, 45, 6, 74, 12))

function somaNumeros(numeros) {
    const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    return soma
}
console.log(somaNumeros(2, 5, 8, 19, 23, 28, 34))