function calculaValor(mes, valor) {
    if (mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5 / 100)) ** atraso)).toFixed(2)
    } else {
        return 'Valor Inválido'
    }
}
console.log(calculaValor(4, 120))