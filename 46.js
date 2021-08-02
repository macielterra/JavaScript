function vetor([elementos]) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()
    return [primeiroElemento, ultimoElemento]
} {
    console.log(vetor([10, 20, 30, 40, 50]))

    function vetor1([primeiroElemento, ...elementosRestantes]) {
        const ultimoElemento = elementosRestantes.pop()

        return [primeiroElemento, ultimoElemento]

    }
    console.log(vetor1([10, 45, 75, 'Maciel']))