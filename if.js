function verdade(nota) {
    if (nota >= 7) {
        console.log('Aprovado > ' + nota)
    } else
        console.log('Reprovado > ' + nota)
}
verdade(5.1)
verdade(9.8)

function faloAverdade(valor) {
    if (valor) {
        console.log("Valor verdadeiro..." + valor)
    }
}

faloAverdade()
faloAverdade(null)
faloAverdade('')
faloAverdade(0)
faloAverdade(undefined)
faloAverdade(NaN)
faloAverdade(' ')
faloAverdade(-1)
faloAverdade([])
faloAverdade('?')