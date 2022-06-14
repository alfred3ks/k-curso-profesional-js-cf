/*

La forma como obtenemos el valor de una promesa y podemos ejecutar codigo cuando esta ha finalizado es enviando funciones a metodos especificos de las promesas que ejecutaran dichas funciones cuando la operacion asincrona finalice.

Existen 3 metodos en una promesa para los que podemos añadir codigo que se evalue en diatintos estados de la promesa:

.then() -> Para cuando la promesa se completo con existo.
.catch() -> Para atrapar los errores si la promesa es rechazada.
.finally() -> Ejecuta codigo independientemente si la promesa se completo o no.


El callbacks finally suele utilizarse hacer limpieza por ejemplo: para cerrar ciertas operaciones que se pueden quedar abiertas durante la peticion, por ejemplo cerrar la BD, para cerrar un archivo que se esta editando, en el frontend para reiniciar un formaulario que se envia asincromente, etc.

*/

let requestPromise = require('request-promise');

let promesa = requestPromise("https://cheverestore.com");

promesa.then(() => {
    console.log("Termine la peticion... promise 😎");
})
    .catch(err => {
        console.log(`error: ${err} 💀`);
    })
    .finally(() => {
        console.log("Finaliza la peticion con promesas...😮");
    });

console.log("Yo paso despues de todas las peticiones...🤠");

