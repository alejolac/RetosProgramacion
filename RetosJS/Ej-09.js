/*
Dado un array de numeros enteros,
devuelve la suma mas grande entre 
dos numeros adyancentes 
*/

function sumArray (arr) {
    let sumMax = 0
    for (var i = 0; i < arr.length; i++) {
        let sum = arr[i] + arr[i + 1] 
        sumMax =  sum > sumMax ? sum : sumMax
    }
    // Variacion 
    for (var i = 0; i < arr.length; i++) {
        let sum = arr[i] + arr[i + 1] 
        sumMax =  Math.max(sum, sumMax)
    }

    console.log(sumMax)
}

const arr = [1, 3, 5, 7, 8, 3, 12, 23, 1, 2, 5]
sumArray(arr)
