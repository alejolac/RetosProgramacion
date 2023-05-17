/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const primos = () => {
    function esPrimo(numero) {
        if (numero < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 1; i <= 100; i++) {
        if (esPrimo(i)) {
            console.log(i);
        }
    }
}

primos()

// No resuleto 