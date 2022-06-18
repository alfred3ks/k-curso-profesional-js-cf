/*

Solo para terminar la comparacion entre iteradores y generadores.

Vamos a hacer lo del rango pero ahora usando un generador:


*/

let rango = {
    min: null,
    max: null,
    [Symbol.iterator]() {
        return this.generator();
    },
    generator: function*(){
        for(var i = this.min; i <= this.max; i++){
            yield i;
        }
    }
}

rango.min = 0;
rango.max = 100;

for (let el of rango) {
    console.log(`valores ${el}`);
}
