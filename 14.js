function fruta(nome) {
    switch (nome) {
        case 'maçã':
            return `${nome} => Não vendemos esta fruta aqui`
        case 'kiwis':
            return `Estamos com escassez de =>  ${nome}`
        case 'melancia':
            return `${nome} => Aqui está, são 3 reais o kilo`
        default:
            return 'Fruta Inválida'
    }
}

console.log(fruta('pera'))
console.log(fruta('melancia'))
console.log(fruta('maçã'))
console.log(fruta('kiwis'))