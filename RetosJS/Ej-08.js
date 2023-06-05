/*
Crear una función que sume los números pares de una matriz.

----------------------------------------------------------------

1_ ¿Qué pasaría si la matriz es multidimensional?.

2_ ¿Conoces algún método en JS que cree una nueva matriz concatenando los elementos de la submatriz?

3_ ¿Puedes resolver el ejercicio en 1 línea de código?

*/

const sumaParesArr = arr => {
    let cont = 0;
    for (const item of arr) {
        if (item % 2 == 0) cont += item
    }
    return cont
}

sumaParesArr([2, 4, 6, 8])

// 1_ Funcion recursiva 

function sumarNumerosPares(matriz) {
    let suma = 0;
    for (let fila of matriz) {
        if (Array.isArray(fila)) {
            suma += sumarNumerosPares(fila); // Llamada recursiva para submatrices
        } else {
            if (fila % 2 === 0) suma += fila;
        }
    }

    return suma;
}

// 2_ Metodo .flat

const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const nuevaMatriz = matriz.flat();
console.log(nuevaMatriz);
// En este ejemplo, matriz.flat() crea una nueva matriz nuevaMatriz que contiene todos los elementos de la submatriz original concatenados en un solo nivel.

// 3_ One line

const sumarNumerosPares = (matriz) => matriz.flat().reduce((suma, numero) => suma + (numero % 2 === 0 ? numero : 0), 0);
