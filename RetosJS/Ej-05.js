/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */


const poligonos = poligono => {
    const formas = {
        rect: "Rectángulo",
        cuad: "Cuadrado",
        tria: "Triángulo"
    }
    switch(poligono.tipo) {
        case formas.rect: 
            return poligono.base * poligono.altura

        case formas.cuad:
            return poligono.lado * poligono.lado
            
        case formas.tria:
            return (poligono.base * poligono.altura) / 2
    }
}


const triangulo = { tipo: 'Triángulo', base: 5, altura: 8 };
const cuadrado = { tipo: 'Cuadrado', lado: 4 };
const rectangulo = { tipo: 'Rectángulo', base: 6, altura: 9 };

console.log(poligonos(triangulo))
console.log(poligonos(cuadrado));
console.log(poligonos(rectangulo));