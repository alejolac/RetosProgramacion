/*
Realizar un programa que
evalue una contraseña y diga
su nivel de proteccion
*/

/*

Valores seguridad

length
------------------
length > 4 = 1
length > 8 = 2
length > 12 = 3
length > 14 = 4

Mayusula 
------------------
Una mayusucula o mas = 2

Numeros
------------------
Un numero = 1
Dos numeros = 2
Tres numeros o mas = 4

Caracters Especiales
--------------------
Un caracter especial o mas = 4


pass < 4 - Muy debil
4 < pass < 6 - Debil
6 < pass <    

*/

function checkPassword(pass) {
    let passPower = 0
    let passLength = 0
    let passMayus = 0
    let passNumber = 0
    let passSpecial = 0

    // Check length
    ////////////////////////////////
    passLength += checkLength(pass.length)
    ////////////////////////////////

    for (var i = 0; i < pass.length; i++) {
        let val = pass[i];
        if (65 <= val.charCodeAt() <= 90) {
            passMayus = 2
        } else if (48 <= val.charCodeAt() <= 57) {
            if (passNumber <= 3) passNumber += 1
        } else if (!(97 <= val.charCodeAt() <= 122)) {
            passSpecial = 4
        }
    }

    passPower = passLength + passSpecial + passNumber + passMayus
    return passPower
}

function checkLength(length) {
    if (length >= 14) return 4
    if (length >= 12) return 3
    if (length >= 8) return 2
    if (length > 4) return 1
}

let value = checkPassword("Buena231s")
console.log(value);