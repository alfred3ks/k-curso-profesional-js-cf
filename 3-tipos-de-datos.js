/*

JS es categorizado con un lenguaje debilmente tipado, esto quiere decir que aunque hay mucha flexibilidad en el tipado de una variable las variables si tienen asignado un tipo de dato.

El lenguaje puede definir la cantidad de memoria reservar a traves del dato que le estamos diciendo.

En JS existen los siguientes tipos de datos.

En Javascript existen 6 estructuras de datos primitivas:

    Primitivos:
    - String
    - Number
    - Boolean
    - Symbol (ECMAScript 6)
    - Null
    - Undefined

    Todos los demas tipos son objetos en JS.

    - Existen otras estructuras de datos como:
    - Objetos
        - Array
        - Diccionarios
    - Tipos predefinidos por el lenguaje
        - Dates
        - RegExp
    - Tipos definidos por el desarrollador
        - Funciones

NOTA: Los tipos de datos primitivos en JS son inmutables, esto quiere decir que nosotros creamos una varaible con un tipo y le asignamos otro tipo mas tarde esa cadena original no esta siendo modificada. Cuando asignamos otro valor la variable apunta a otra direccion dentro de la memoria.

Cada valo primitivo tiene un equivalente en objeto: Si las usamos si enviamos un tipo diferente de la funcion esta cambia el tipo de esa varaible:
String()
Number()
Boolean()
Symbol()
BigInt()

Tambien existen funciones especiales para cambiar valores de un tipo para otro.
parse.Int()
parse.Float()
toString()

*/

let nombre = "Alfredo";
let edad = 46;
let hijos = true;
let hobbies = null;
let canta = undefined;

// Inmutabilidad:
let number = 22;
number = "Hola";

// Equivalencias de primitivos: Deja de ser prmitivo y ahora es un objeto
console.log("20"); // -> imprime "20"
console.log(Number("20")); // -> imprime 20, cambia el tipo de dato.

// Funciones cambio de tipo:
parseInt("200"); // -> imprime 200
parseFloat("200.5"); // -> imprime 200.5
Number(200).toString(); // Imprime "200"
let c = 22;
let cString = c.toString();
console.log(cString);

