function negativos(vetor) {
    negativo = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativo++;
        }
    }
    return negativo
}
vetor = [10, -2, -8, -45, 47, 58, 96]
console.log(negativos(vetor))