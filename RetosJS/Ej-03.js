/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

const Fibonacci = (N1 = 0, N2 = 1) => {
    console.log(N1)
    console.log(N2)
    for (let i = 0; i <= 50; i++) {
        console.log(N1 + N2);
        N1 > N2 ? N2 = N1 + N2 : N1 = N1 + N2; 
    }
}

Fibonacci()