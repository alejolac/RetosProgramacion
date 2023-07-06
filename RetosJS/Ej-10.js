/* 
Generador de contraseñas con
longitud de 12 a 22 caracteres,
1 simbolo especial como minimo 
*/ 

function generatePassword () {
    lengthPass = randomNumber(12, 22)
    const pass = []
    let condition = true
    for (var i = 0; i < lengthPass; i++) {
        const typeCh = randomNumber(1, 7) 
        if (typeCh == 1 || typeCh == 2 || typeCh == 3) {
            // 65 - 90 | A - Z
            pass.push(String.fromCharCode(randomNumber(65, 90)))
        } else if (typeCh == 4 || typeCh == 5 || typeCh == 6) {
            // 97 - 122 | a - z
            pass.push(String.fromCharCode(randomNumber(97, 122)))
        } else {
            // 33 - 47 | Special Characters
            pass.push(String.fromCharCode(randomNumber(33, 47)))
        }
        condition = typeCh == 7 ? false : true
    }
    if (condition) pass[-1] = String.fromCharCode(randomNumber(33, 47))
    return pass.join('')
}

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generatePassword())