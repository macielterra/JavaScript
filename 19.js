function lanches(codigo, quant) {

    switch (codigo) {
        case 100:
            console.log('Cachorro Quente - Valor R$', quant * 3)
            break
        case 200:
            console.log('Hamburguer Simples - Valor R$', quant * 4.0)
            break
        case 300:
            console.log('Cheesburguer - Valor R$', quant * 5.50)
            break
        case 400:
            console.log('Bauru - Valor R$', quant * 7.50)
            break
        case 500:
            console.log('Refrigerante - Valor R$', quant * 3.50)
            break
        case 600:
            console.log('Suco - Valor R$', quant * 2.80)
            break
        default:
            console.log('Produto Indisponível')
    }
}
lanches(200, 2)
lanches(600, 2)
lanches(400, 2)
lanches(300, 2)
lanches(500, 2)
lanches(700, 2)