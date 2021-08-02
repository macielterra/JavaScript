function numerosPares(numeros) {
    let resultado = []
    for (let i = 0; i < numeros.length; i += 2) {
        const numeroPar = numeros[i] % 2 == 0
        if (numeroPar)
            resultado.push(numeros[i])
    }
    return resultado
}
console.log(numerosPares([4, 8, 10, 23, 78, 95, 63]))