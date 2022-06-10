/*

Las funciones son un conjunto de instrucciones que se ejecutan cuando esta es llamada.

Nos permite encapsular parte de la funcionalidad de nuestro codigo de manera independiente para separar los problemas en subproblemas.

Las funciones se pueden declarar en JS usando una declaracion de la funcion o una expresion de la funcion.

declaracion de una funcion:

function saludar(){
    console.log("hello world");
}

saludar();

expresion de una funcion: Tambien llamadas funciones anonimas.

let saluda = function(){
    console.log("Hola desde una funcion como expresion");
}

saluda();

Tambien tenemos las funciones flechas:

let saludar = ()=>{
    console.log("Hello dev....");
}


*/

function saludar(){
    console.log("Hola Dev...");
}
saludar();

function cuadrado(num){
    return num * num;
}

let cuadrado_de_dos = cuadrado(2);
console.log(cuadrado_de_dos);
console.log(cuadrado(3));
