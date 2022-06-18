/*

Los iterables nos permiten definir el comportamiento de uno de nuestro objetos cuando lo pasamos por un ciclo for of.

En javaScript existen varios ejemplos de iterables. Los arreglos son iterables, las cadenas son iterables tambien.

El protocolo iterable nos permite definir cual sera el comportamento de un objeto cuando sea puesto en un ciclo for of.

*/

function* counter(){
    for(var i = 1; i <= 5; i++){
        yield i;
    }
}

let generator = counter();

let numeros = [2,5,78,8];
for(let numero of numeros){
    console.log(numero);
}

/*

Un ciclo for of puede tambien recibir un iterador y este se va ejecutar por cada valor del array.

*/

// Itera a traves de todos los valores que se estan producuiendo dentro del iterador.
for (let numero of generator) {
    console.log(numero);
}

/*

Para que un objeto sea iterable debe implementar un metodo llamado @@iterator
Este metodo esta identificado en los objetos por un SIMBOLO. no por una cadena. Este simbolo no tiene un nombre.

Podemos encontrar el simbolo que representa a @@iterator dentro de la constante Symbol.iterator

console.log(Symbol.iterator);

Este simbolo es uno de los que nosotros conocemos en JS como well non simbolos, o los simbolos bien conocidos, lo importante del metodo @@iterator es que debe retornar un objeto iterator.

que caracteristicas tiene este objeto, que tenga un metodo next(), que retorne un objeto con las propiedades value y done.

*/

// Veamos otro ejemplo: Aqui tenemos un iterador

let contador = {
    [Symbol.iterator](){
        return {
            currentValue: 1,
            next() {

                let result = { value: null, done: false };

                if (this.currentValue > 0 && this.currentValue <= 5) {
                    result = {
                        value: this.currentValue,
                        done: false
                    }
                    this.currentValue += 1;
                } else {
                    result = {
                        done: true
                    }
                }
                return result;
            }
        }

    }
}

for(let numero of contador){
    console.log(numero);
}

/*

Vamos a ver un ejemplo mas practico, en otros lenguajes que no son JS existen unos objetos a los que llamamos rango.

A un rango le especificamos un valor minino y un maximo.

Luego podemos iterar sobre los valores entre el minimo y el maximo.

*/

let rango = {
    min:null,
    max:null,
    currentValue:null,
    [Symbol.iterator](){
        return this;
    },
    next(){
        if(this.currentValue == null){
            this.currentValue = this.min;
        }

        let result ={};

        if(this.currentValue >= this.min && this.currentValue <= this.max){
            result = {value:this.currentValue, done:false}
            this.currentValue +=1;
        } else {
            result = {
                done: true,
            }
        }
        return result;
    }
}

rango.min = 5;
rango.max = 10;

for (let el of rango){
    console.log(`valores ${el}`);

}

// OJO esto ya es JS nivel mas PRO....