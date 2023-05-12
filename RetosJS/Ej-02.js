/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */


// Solucion Alejo
const anagramas = (str1, str2) => {
    if (str1 === str2 || str1.length != str2.length) return false
    let cont = 0
    for (let word of str1) {
        for (let word2 of str2) {
            if (word.toUpperCase() == word2.toUpperCase()) {
                cont++;
            }
        }
    }
    return cont == str1.length ? true : false
}

console.log(anagramas("Roma", "Omar"));


// Mejor Solucion

function sonAnagramas(palabra1, palabra2) {
    // Si las palabras tienen diferente longitud, no pueden ser anagramas
    if (palabra1.length !== palabra2.length) {
        return false;
    }

    // Convertimos las palabras a arrays de caracteres y los ordenamos alfabéticamente
    const arr1 = palabra1.split('').sort();
    const arr2 = palabra2.split('').sort();

    // Si los arrays ordenados no son iguales, las palabras no son anagramas
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // Si llegamos hasta aquí, las palabras son anagramas
    return true;
}

console.log(sonAnagramas("Roma", "Omar"));