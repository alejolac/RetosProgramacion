/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function reverse(words) {
    words = words.split("")
    const largo = words.length
    let newArr = []

    for(let i = largo - 1; i >= 0; i--) {
        newArr.push(words[i])
    }
    newArr = newArr.join("")
    console.log(newArr)
}

reverse("Hola mundo");