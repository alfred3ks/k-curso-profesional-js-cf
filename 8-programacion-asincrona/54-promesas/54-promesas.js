/*

Promesas:
Las promesas surgen como una alternativa a la sintaxis de callbacks, esta sintaxis es mucho mas expresiva, clara y facil de entender.

En ocaciones debemos ejecutar varias peticiones que se ejecutan en secuancia y de forma asincrona, aqui es donde promesas hace esto mas facil de entender.

Con los callbacks cuando tenemos que hacer muchas peticiones asincronas una detras de otras el codigo va creciendo uno dentro de otro llegando a tener lo que se llama los callback hell, el infierno de los callbacks.

Ejemplo de callbacks hell:

const lugaresVisitados = []

function irDePaseo() {

    setTimeout(function() {
        lugaresVisitados.push('Salta');

        setTimeout(function() {
            lugaresVisitados.push('Jujuy');

            setTimeout(function() {
                lugaresVisitados.push('Cordoba');

                setTimeout(function() {
                    lugaresVisitados.push('Tierra del fuego');
                },1000);
            },1000);
        },1000);
    },1000);
}

irDePaseo();
console.log(lugaresVisitados.toString());

Este codigo resulta muy dificil de leer y entender.


*/

let request = require('request');

request('https://www.google.com', ()=>{
    // console.log("Termine la peticion...callback 😁");
});

// console.log("Yo paso despues...🤣 de la peticion de callbacks...");

/*

Ahora para ver las promesas vamos a ver un modulo de npm el cual vamos a instalar:

npm install request -D
npm install request-promise -D

Este paquete hace lo mismo que el request pero en ves de usar callbacks se usan promesas.

Para promesas vamos encadenando .then() y tambien necesitamos el .catch() para atrapar los errores si los hay.

*/

let requestPromise = require('request-promise');

let promesa = requestPromise("https://cheverestore.com");
promesa.then(()=>{
    console.log("Termine la peticion... promise 😎");
}).catch(err=>{
    console.log(`error: ${err}`);
})

console.log("Yo paso despues de todas las peticiones...😮");


/*

La peticion asincrona realizada con promesa retorna un objeto, un objeto especial promise.

Una promesa es un objeto que probablemente produzca un valor en el futuro. Este valor puede ser el resultado de una operacion asincrona, o un error arrojado durante la ejecucion del codigo.

Las promesas pasan por distintos estados:
- fullfiled: Completada, significa que la promesa se completo con exito.
- rejected: Rechazada, significa que la promesa no se completo con exito.
- pending: pendiente, significa que es el estado de la promesa cuando la operacion no ha terminado, aqui decimos que la promesa no se ha compleado.
- settled: finalizada, cuando la promesa termino bien sea con error o con exito.

*/