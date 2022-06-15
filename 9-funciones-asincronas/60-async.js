/*

Vamos aprender como declarar funciones asincronas en JS.

Las funciones asincronas se declaran siempre con la palabra async antes de la definicion de la misma.

A diferencia de una funcion normal al hacerla asincronas retornan una promesa independiente del cuerpo de la funcion.

*/

// Funcion que retorna una promesa, con async la volvemos asincrona.
async function suma(a,b){
    return a + b;
    // Internamente hace esto:
    // return Promise.resolve(a + b);
}

// aqui tenemos una funcion asincrona que devuelve una promesa con promise.
async function calcular(){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, 500,6);
    })
}

console.log(suma(4, 6)); // retorna una promesa Promise {10}
