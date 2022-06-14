/*

Las promesas son objetos. Una operacion asincrona retorna un objeto de tipo promesa, promisse.

Este objeto eventualmente se puede usar para obtener el resultado de la operacion asincrona o un error.

Para crear una promesa necesitas instaciar un objeto de la clase promise()

let promesa = new Promise();

La funcion Promise() se envia por parametro una funcion que se denomina executor.

let promesa = new Promise(function(){});

La caracteristic pricipal del executor es que recibe 2 argumentos. Uno que se llama resolve y otro reject.

let promesa = new Promise(function(resolve, reject){
    resolve(10);
    reject("Algo salio mal");
});

*/

// Hagamos un ejemplo mas realista, usaremos request
// npm install request -D

let request = require('request');


// Asi creamos una funcion con promesas:
function leerPagina(url){
    return new Promise((resolve, reject)=>{
        request(url, function(error, response){
            if(error){
                return reject(error);
            } else {
                resolve(response);
            }
        })
    })
}

let promesa = leerPagina("https://cheverestore.com");

// Asi usamos las promesas:
promesa.then(()=>{
    console.log("Se ejecuto la promesa...");
}).catch((err)=>{
    console.log(`error en la promesa ${err}`);
}).finally(()=>{
    console.log("Cerramos la conexion...");
})

