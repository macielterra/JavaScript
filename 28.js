function parImpar(vetorNumeros) {
    let impar = 0
    let par = 0

    for (i = 0; i < vetorNumeros.length; i++) {
        if (i % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    console.log(`Impares > ${impar} - Pares > ${par}.`)
}
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
parImpar(vetor)