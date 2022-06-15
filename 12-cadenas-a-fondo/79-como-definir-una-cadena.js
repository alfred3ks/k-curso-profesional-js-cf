/*

Antes de definir una cadena debemos saber que en JS existen dos versiones de las cadenas.

Un cadena puede ser bien un primitivo o un objeto.

Cuando definimos usando comillas dobles o simples estamos definiendo un primitivo:

Primitivo: no son estructuras, son valores a los que no se le puede asignar propiedades

let cadena = "Soy la mejor cadena de texto.";
let cadena1 = ' Y yo puedo conseguir ser la major.';

Objeto: Con el constructor podemos crear cadenas
let name = new String('Alfredo'); retorna un objeto porque usamos el metodo String()

Una cosa que hemos visto por ahi:
console.log(cadena.length);

Si es un primitivo como es que le podemos pasar el metodo length???

Lo que hace JS internamente implementa un proceso llamado coersion de tipos, este proceso es muy simple, para que los primitivos del lenguaje puedan responder al llamado y uso de metodos, el lenguaje crea un objeto aparte a partir del primitivo, responde a la accion y luego desecha el objeto. esto quiere decir que cuando el interprete encuentra el llamado a la propiedad length de la cadena crea un objeto en base a este primitivo, responde con el valor de la propiedad length y luego elimina el objeto creado.

El mismo proceso de coersion se presenta a ls inversa, cunado tratas de tratar un objeto string como un primitivo, JS crea un primitivo de tipo string temporal y luego es eliminado.

Eso significa que aunque en el lenguaje existan dos versiones de una cadena, en terminos practicos no debemos de preocuparnos de su estamos usando un  objeto o un primitivo.

En resumen debemos saber que hay dos formas distintas de instanciar una cadena. Como un primitivo o como un objeto


*/
let cadena = "Soy la mejor cadena de texto.";
console.log(typeof cadena); // string

let name = new String('Alfredo');
console.log( typeof name); // object

