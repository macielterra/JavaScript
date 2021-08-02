const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinesas = f => f.pais === 'china'
const mulheres = f => f.genero === ' mulher'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual ? func : funcAtual
}

axios.get(url).then(responde => {
    const funcionarios = response.data
    console.log(funcionarios)

    //mulher chinesa com menor salario
    const func = funcionarios
        .filter(chinesas)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})