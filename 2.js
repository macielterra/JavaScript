function triangulo(a, b, c) {

    if (a == b && b == c) {
        console.log('Triangulo Equilátero')
    } else {
        if (a == b && b != c) {
            console.log('Triangulo Isósceles')
        } else {
            if (a != b && a == c) {
                console.log('Triangulo Isósceles')
            } else {
                if (a != b && b != c) {
                    console.log('Triangulo Escaleno')
                } else {
                    if (a != b && a != c) {
                        console.log('Triangulo Isósceles')
                    }
                }
            }
        }
    }
}
//triangulo(10, 10, 10)
//triangulo(10, 10, 20)
//triangulo(20, 20, 10)
//triangulo(20, 10, 10)
//triangulo(10, 20, 15)
triangulo(10, 10, 20)