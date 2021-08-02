function media(vetor) {
    let total = 0
    for (let i = 0; i < vetor.length; i++) {
        total += vetor[i]
    }
    return total / vetor.length
}
vetor = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(media(vetor))