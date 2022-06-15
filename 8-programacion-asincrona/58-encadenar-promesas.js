/*

Resolver problemas en conjunto como vimos en el ejemplo anterior puede ser muy util para los casos donde tenemos multiples promesas y operaciones asincronas que no dependen una de la otra. En algunos casos antes de el resultado de una operacion asincrona necesitamos el resultado de otra.

Por el ejemplo en el desarrollo de una red social primero necesitas obtener el usaurio que inicio sesion, despues de eso necesitas obtener quisas sus publicaciones, su feed, etc.

Lo que haremos es encadenar las promesas.

*/


// Creamos unas promesa:

function primeraPromesa(){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 500, 'Primera promesa');
    });
}

function segundaPromesa(r2){
    console.log(r2);
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 600, 'Segunda promesa')
    });
}

function msjFinal() {
    console.log("Todo finalizo...");
}

// Vamos a ver como encadenar las promesas: Se ejecutara la segunda promesa solo hasta que se ejecuta la primera. Antes no:
primeraPromesa().then(segundaPromesa).then((r1) => {
    console.log(r1);
})