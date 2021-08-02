/*function nomeMes(mes) {
    switch (mes) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
        default:
            return "Mes Inválido, tente novamente"
    }
}
console.log(nomeMes(12))
console.log(nomeMes(2))
console.log(nomeMes(13))
console.log(nomeMes(1))*/

function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ]
    return mapeamento[--numero];
}
console.log(receberNomeDoMes(12))
console.log(receberNomeDoMes(2))
console.log(receberNomeDoMes(13))
console.log(receberNomeDoMes(1))