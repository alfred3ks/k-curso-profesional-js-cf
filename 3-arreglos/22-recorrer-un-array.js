/*

Para esta parte vamos a ver como usar ciclos para recorrer un arreglo.
La forma mas sencilla para recorrer un arreglo es usar un ciclo for().

*/

let numeros = [1,2,3,4,5,6,7];

for(let i = 0; i < numeros.length; i++){
    // console.log(i);
    console.log(numeros[i]);
}

for(let i = numeros.length-1; i >= 0; i--){
    let elementos = numeros[i];
    console.log(elementos);
}

