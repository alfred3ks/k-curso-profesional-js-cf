/*

Podemos unsar parentesis () en una expresion regular para agrupar una parte del patron, el usao de grupos puede servirnos para dos cosas principales.

- Recordar parte de un patron por separado,
- Aplicar cuantificadores a un grupo.

Cuando aplicamos cuantificadores por ejemplo:

*/

let patron = /\d*/;

/*

El cuantificador * que qeuiere decir ceros o muchos, aplica a todos los caraceres que aaparecen delante osea cualquier digito, esta expresion regular se leeria, cualquier expresion de digitos a partir de cero.

Cuando deseamos aplicar ese mismo modificador a un grupo de caracteres podemos encerrar por parentesis el grupo:

*/

patron = /(\d-)*/;

/*

Esto quiere decir cualquier cantidad de digitos desde cero y guiones.

*/
patron = /(\d-)+/g;
console.log("123--3-2-".match(patron));

/*

Ademas de agrupar los caracteres para aplicar cuantificadores el motor de busqueda de las expresiones regulares recuerda las agrupaciones en caso de que desees usar es informacion mas delante.

Digamos que quieres extraer los que esta delante del @ en un correo:

*/

let pat = /(\S+)@\S+/;
let mail = "alfred@gmail.com";

console.log(mail.match(pat));

/*

Una cosa que debemos saber que cuando agregamos grupos a nuestra expresion regular este viene con un coste de rendimiento al analisis de un string, lo importante es usar grupos solo si es muy necesario.

En algunas ocaciones necesitaremos identificar por nombre los grupos que estamos definiendo dentro de esos parentesis (), eso se puede hacer de la siguiente manera:

*/

pat = /(?<username>\S+)@\S+/;
console.log(mail.match(pat));

/*

Primero colocamos un signo de interrogacion al iniciar el grupo,
Despues entre <> colocamos el nombre del grupo.

[
    'alfred@gmail.com',
    'alfred',
    index: 0,
    input: 'alfred@gmail.com',
    groups: [Object: null prototype] { username: 'alfred' }
]

Ademas tambien podemos definir grupos que no se recuerden: Para eso usamos un simbolo de interrogacion de cierre y dos puntos.

*/

pat = /(?:\S+)@\S+/;
console.log(mail.match(pat));


