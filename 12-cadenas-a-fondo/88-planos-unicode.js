/*

Los 1.111.998 valores que se pueden usar en el sistema unicode estan divididos en 17 planos, cada plano puede almacenar 65536 caracteres.

El primer plano o cero unicode de los 17 que existen es el mas comun y tiene como nombre basic multilingual plane, tambien conocido por sus siglas BMP basic Multilingual plane.

En este plano encontramos los caracteres mas utilizados, los lenguajes como el latin, griegos entre otros.

Estos caracteres que se encuentran en el BMP se pueden guardar utilizando numeros de 16 bits.

Los caracteres que pertencen a los planos despues del BMP, es decir del 1 hasta el 17 se llaman planos astrales.

En esos planos se encuentran los caracteres menos utilizados y unos de los de ahora mas utilizados como lo son los emoji.

Lo que hace interesante el estudio de los planos astrales es que estos no pueden ser representados por unidades de codigos de 16bits, por lo que en formato de encoding como UTF16 estos caracteres son represetnados por dos unidades de codigo cada una de 16 bits. A este concepto lo llamamos surrogate pair o par sustituto, es una combinacion de dos unidades de codigo el high surrogate pair y el low surrogate pair.

Para corroborar esto podemos ver la longitud de un caracter emoji:

*/

console.log('😂'.length); // 2

/*

Como podemos ver el resultado es 2, el emoji es representado por un surrogate pair compuesto por dos unidades de codigo el high surrogate pair y low surrogate pais.
Este dos tambien nos dice que la representacion de este emoji esta en un plano astral y necesita dos unidades de codigo para poder ser represntado.

Esto significa tambien que si nosotros validamos que si una cadena tenga al menos 5 caracteres esta validacion puede ser aprobado utilizando un emoji.

Por ejemplo es password debe tener al menos 5 caracteres.

*/

console.log('🤡😮.'.length);

/*
En resumen:

Un emoji es la combinacion de dos caracteres como minimo, cualquiere caracter comun basa su representacion en el plano cero, el resto que aparecen en los planos del 1 al 17 se represntan  utilizando dos unidades de codigo de 16 bits cada uno, los emoji base se componen de dos unidades de codigo.

*/