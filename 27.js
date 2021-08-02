function calculaAltura(altura, taxa, altura1, taxa1) {
    if (altura == altura1) {
        if (taxa > taxa1) {
            return 'Criança 1 ultrapassara a criança 2 em 1 ano.'
        } else if (taxa < taxa1) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        } else {
            return 'Crianças tem a altura igual e crescimento'
        }
    } else {
        if (altura > altura1) {
            if (taxa >= taxa1) {
                return 'A criança menor não ultrapassará a criança maior.'
            } else {
                return calcularTempo(altura1, taxa1, altura, taxa)
            }
        } else {
            if (taxa1 >= taxa) {
                return 'A criança menor não ultrapssará a maior.'
            } else {
                return calcularTempo(altura, taxa, altura1, taxa1)
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

console.log(calculaAltura(184, 2, 184, 2));