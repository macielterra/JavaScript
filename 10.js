function impar(num) {
    if (num % 3 == 0) {
        console.log(`${num} é divisivel por 3`);
        console.log('True');
    } else {
        console.log(`${num} não é divisivel por 3`);
        console.log('False');
    }
}
impar(3)
impar(5)
impar(15)