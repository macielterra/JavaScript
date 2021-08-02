/*function media(numeros) {
    const quantNumeros = numeros.length
    let soma = 0
    for (numero of numeros) {
        soma += numero
    }
    return soma / quantNumeros
}
console.log(media([10, 25, 36, 37, 48, 41, 78]))*/

function soma1(numeros) {
    const quantidadeNumeros = numeros.length
    const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB)

    return somaTotal / quantidadeNumeros
}
console.log(soma1([10, 25, 36, 37, 48, 41, 78]))