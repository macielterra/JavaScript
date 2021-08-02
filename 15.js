function carro(modelo) {
    switch (modelo) {
        case 'hatch':
            return `${modelo} => Compra Efetuada com sucesso`
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            return `${modelo} => Tem certeza que não prefere este modelo?`
        default:
            return `${modelo} => Não trabalhamos com este tipo de automóvel aqui`
    }
}
console.log(carro('hatch'))
console.log(carro('motocicletas'))
console.log(carro('fiat'))
console.log(carro('sedans'))
console.log(carro('bicicletas'))