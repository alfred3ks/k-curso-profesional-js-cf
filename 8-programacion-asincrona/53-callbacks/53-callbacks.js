/*

Callbacks:

Un callback es es una funcion que se pasa como argumento a una operacion asincrona con la espectativa que dicha funcion sea ejecutada una ves que la operacion termine.

Imagina que cuando delegamos una operacion asincrona a la cola de tareas tambien añadimos una funcion que se debe ejecutar cuando la operacion asincrona termine, eventualmente el event loop se entera que la operacion asincrona ha terminado y ejecuta esta funcion a la que llamamos callback.

Existen distintas operaciones en JS que se ejecutan de manera asincrona, por ejemplo el trabajo con archivos, lectura escritura de archivos, peticiones a la red a APIs, hacia paginas web, consultas con un BD, entre otras.

Para este ejemplo vamos a utilizar una libreria que nos permite leer paginas de la red.

Vamos a instalar la libreria request.

npm install request -g

Este paquete esta obsoleto, no recibe actualizaciones pero solo lo usaremos para demostrar una operacion asincrona.

Tienes que crear el package json y luego instalar request para que funcione.

npm init -y

luego:

npm install request -D

Lo he probado con repplit

*/

let request = require('request');

request('https://www.google.com', function(){
    console.log("Termine la peticion.");
});

console.log("Ahora me ves...😎");

// La funcion request hace una peticion al sitio web, solo cuando esta ha terminado luego ya ejecuta la funcion que se pasa como callback con el msj de termine la peticion. Lo vemos que asi sucede porque vemos que JS se sigue ejecutando y el siguiente msj de Ahora me ves sale primero que el otro msj.
