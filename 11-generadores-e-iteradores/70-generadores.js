/*

Un generador en muchas cosas es parecido un iterador, sin embargo tambien tienen beneficios claros entre los que podemos encontrar una sintaxis mas clara y conciza principalmente porque a diferencia de un iterador con un generador no necesitas hacerte cargo del estado del objeto.

*/

// declaramos una funcion iterador:
function* counter(){
    console.log("Estoy aqui.");
    yield 1;
    console.log("Ahora estoy aqui.");
    yield 2;
}

let generator = counter();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


/*

La palabra reserva yield que se usa para pausar una funcion y luego reanudarla en ese punto. Lo que aparece al lado de la palabra reservada es el valor que se retornara via protocolo del iterador

*/

// Vamos a ver una funcion generadora de numeros: Muy parecido al anterior.
function* counterN() {
    for(var i = 1; i <= 5; i++){
        yield i;
    }
}

let generatorNuM = counterN()
console.log(generatorNuM.next());
console.log(generatorNuM.next());
console.log(generatorNuM.next());
console.log(generatorNuM.next());
console.log(generatorNuM.next());
console.log(generatorNuM.next());

/*

Un generador es ejecutar la funcion de manera pausada usando la instruccion yield, solo se ejecutara si llamamos a next(). Y asi hasta el valor que le hemos dado como final.

*/