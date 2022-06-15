/*

En ciencias computacionales llamamos a escaping a la identificacion de caracteres especieles que dan una instruccion especial a la pc.

En el caso de las cadenas esto nos permite agregar caracteres especiales o caracteres que alteren el texto de alguna manera.

Para escapar un caracter debemos usar la barra invertida \


*/

// ejemplo comillas dobles dentro de un string:
let cadena = "Yo soy una cadena \"muy interesante\"";
console.log(cadena);

// Si usamos comillas simples no hace falta espacar las comillas dobles:
let msj = 'Yo soy otro mensaje "muy pero muy interesante."'
console.log(msj);

// Adicionalmente en Unix se usa para hacr salto de linea:
let salto = "Yo soy una linea... \n y yo soy la linea siguiente.";
console.log(salto);