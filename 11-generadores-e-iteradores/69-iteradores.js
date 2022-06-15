/*

Iteradores:

De acuerdo a la MDN un iterador es cualquier objeto que implementa el iterator protocol. Lo que es lo mismo el protocolo iterador.

En palabras practicas cualquier objeto que implemente un metodo next() que retorne un objeto con una propiedad value y una propiedad done implementa el protocolo y por lo tanto es un iterador.


*/

// Definimos un objeto:
let iterador = {
    next(){
        return {
            value: null,
            done: true
        }
    }
}

// Vamos a hacer un iterador que haga valores del 1 al 5:
let num = {
    currentValue:1,
    next(){

        let resultado = {value:null, done:false};

        if(this.currentValue > 0 && this.currentValue <= 5){
            resultado = {
                value:this.currentValue,
                done:false
            }
            this.currentValue += 1;
        } else {
            resultado = {
                done:true
            }
        }
        return resultado;
    }
}

console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next()); // El iterador ha sido completado.