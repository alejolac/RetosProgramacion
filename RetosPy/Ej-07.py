""""
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */
"""

def newCountWords(words = "") :
    if len(words) == 0 or words == None :
        print("Write something...")
        return
    objWords = {}
    words = words.lower()
    for word1 in words.split() :
        count = 0 
        for word2 in words.split():
            if word1 == word2:
                count += 1
        objWords[word1] = count - 1
    print(objWords)

newCountWords("hola buenas hola mundo mama buenas tardes hello how are you")

