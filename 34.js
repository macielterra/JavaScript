/*Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras*/

function VerificarString(string1, string2) {
    let estaContido = true
    for (let i = 0; i < string1.length; i++) {
        caracterString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            caracterString2 = string2.charAt(j).toLowerCase()
            if (caracterString1 == caracterString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}
console.log(VerificarString('Eu amo todos aqui', 'eu Amo Todo aqui'))
console.log(VerificarString('Dara de Lima Monteiro', 'Maciel Terra Paiva'))