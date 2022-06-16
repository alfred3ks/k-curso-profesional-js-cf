/*

Vamos a ver lo unicodes.

El sistema unicode nos permite representar las caracteres de una cadena como puntos de codigo que a su ves son traducidos por el pc a unidades de codigo representadas en bits. Lenguaje que entiende la pc.

Antes del sistema unicode traducir la informacion de un archivo a caracteres que el usuario final pudiera leer era un desafio. Esto sucedia y sigue sucediendo ya que los pc no entienden los simbolos que usamos para escribir texto igual que nosotros.

Para ser procesados, guardados y enviados los caracteres de una cadena se convierten a bits para que el pc los pueda manipular, el problema original que resolvio unicode es como convertir los caracteres a bits. Sin una serie de reglas cada programa podria traducir los caracteres a bits de la forma que quisiera lo cual significa que otro programa deseara usar el texto del programa original debia entender y replicar las reglas originales con las que fue manipulado el texto.

Unicode ofrece una manera uniforme y estandarizada de representar los caracteres de todo tipo de lenguajes que existen. Los lenguajes hablados.

La ultima version de unicode la 13.0 contiene 143859 caracteres, esto incluye idiomas, simbolos, emoji, etc.

Eso solo es una pequeña porcion comparada con a los 1.111.998 caracteres que estan disponibles en el sistema unicode. Este sistema es muy simple, cada caracter de texto de cualquier idioma se representa con un rango que va de U+0000 hasta U+10FFFF donde el valor que aparece despues de la U es un valor hexadecimal.

Para poner a prueba este sistema podemos utilizar la siguiente funcion que viene de stack overflow:


*/

function toCodePoint(char){
    var hex = char.charCodeAt(0).toString(16) // Convierte caracter a hexadecimal
    return "\\u" + "0000".substring(0,4 - hex.length) + hex;
}

console.log(toCodePoint('a'));
console.log('\u0061');
