/*

Los ciclos:

Los ciclos en programacion ayudan a ejecutar un bloque de código muchas veces.

En JS tenenmos varios ciclos que podemos utilizar:

Ciclo for. -> Se ejecuta en 3 partes:
1- Instruccion inicial,
2- Condicion,
3- Instruccion despues de cda iteracion.
for(Instruccion Inicial; Condicion; valor de iteracion){
    code...
}

Se pueden usar dos palabras reservadas del lenguaje:
break y continue.

break termina el ciclo.
continuo lo que hace es saltarse esa iteracion.

Ademas del ciclo for() tenemos el ciclo while() y do while.

Es un ciclo un poco mas abierto.


*/

// Ciclo for: Imprimir los números del 1 al 10.
for(let i = 1; i <= 10; i++){
    console.log(i);
    if(i === 5){
        // break;
    }

    if(i % 2 != 0){
        continue;
    }
    console.log("Es par");
}

console.log("Me ejecuto despues del ciclo for()");

// Ciclo while:
let i = 1;
while(i<=10){
    console.log("MSJ");
    i++;
}


// Ciclo do-while:
let j = 1
do {
    console.log("DO");
    j++;
}while(j <= 10);
