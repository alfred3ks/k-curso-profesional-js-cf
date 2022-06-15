/*

Vamos a ver como trabajar cuando tenemos multiples peticiones asincronas funcionando.

Veremos como gestionar multiples promesas que no dependen entre si.

*/

// Creamos unas promesa:

let p1 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 500, 'Primera promesa');
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 600, 'Segunda promesa')
});

function msjFinal(){
    console.log("Todo finalizo...");
}

// Vamos a resolver las promesas:
p1.then((resultado)=>{
    console.log(resultado);
});

p2.then((resultado)=>{
    console.log(resultado);
});

// Vamos a encadenar las promesas la idea es que se resuelva la primera, luego la segunda y por tercero el msj, pero esto es lo que llamamos callbacks hell
// p1.then(()=>{
//     p2.then(()=>{
//         msjFinal();
//     })
// })

// Otra forma seria utilizar el metodo .all() del constructor Promise():
Promise.all([p1,p2]).then(()=>{
    msjFinal();
})

