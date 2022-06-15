/*
Concatenar es el termino que se usa para la operacion de unir cadenas unas tras las otras.
La forma mas comun es por medio del operador +. Como si estuvieramos sumando dos string.
*/

console.log("Hola" + " como estas.");

/*
Tambien existe el uso del metodo concat();
*/

let a = "Hola ";
let b = "como estas.";

console.log(a.concat(b));

/*
Muy similar al proceso de concatenacion tenemos el proceso de interpolacion: Podemos unir una cadena en cualquier punto de otra. En JS la interpolacion se hace por medio de los template string  o template literal. Usamos las comillas invertidas back tick.
*/

let c = `${a}Alfred ${b}`;
console.log(c);


// Reto devolver un cero delante si ingresan un numero del 0 al 9
let fecha = (dato)=>{
    if (dato <= 9) {
        console.log(`0${dato}`);
    } else {
        console.log(`${dato}`);
    }
}

fecha(9)

// Otra opcion es usar el metodo .padStar(), primer argumento longitud, y segundo argumento el valor que llevara delante.
let mes = "3";
console.log(mes.padStart(2,"0"));

// Tambien existe el metodo .padEnd();
let v = "3";
console.log(mes.padEnd(2, "0"));




