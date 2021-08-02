function percorreVetor(vetor) {
    let dentro = 0
    let fora = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro++
        } else {
            fora++
        }
    }
    console.log(`Dentro do vetor > ${dentro}, Fora do Vetor > ${fora}.`)
}
vetor = [4, 8, 9, 10, 45, 78, 65, 18, 19]
percorreVetor(vetor)