const carro = {
    modelo: 'Línea',
    valor: 20000,
    proprietario: {
        nome: 'Maciel Paiva',
        idade: 39,
        end: {
            logradouro: 'Rua João Meirelles - 1780',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Michel',
        idade: 36
    }, {
        nome: 'David',
        idade: 16

    }]
}

carro.proprietario.end.numero = 1000
carro['proprietario']['end']['logradouro'] = 'Av. Abílio Vieira Paiva'
console.log(carro)

delete carro.condutores
console.log(carro)
console.log(carro.condutores.length)