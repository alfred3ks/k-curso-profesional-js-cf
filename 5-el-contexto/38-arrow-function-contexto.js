/*

- Las arrow function tienen una sintaxis mas corta que la declaracion con la palabra function,
- Heredan el valor de this del contexto en el que fueron creadas y no se reasigna.

*/

let estudiantes = {
    nombre: "Marcos",
    saludar1:function(){
        console.log("Hola soy " + this.nombre);
    },
    saludar2: ()=>{
        console.log("HOLA YO SOY " + this.nombre);

    }
}

estudiantes.saludar1();
estudiantes.saludar2(); // aqui se pierde el contexto. Porque su this es windows.

// Ahora con una funcion constructora:
function Estudiantes(){
    this.nombre = "Ursula",
    this.saludar = ()=>{
        console.log("Hola " + this.nombre);
    }
}

let e = new Estudiantes();
e.saludar();

// Vamos a reasignar el contexto:
setTimeout(e.saludar, 2000); // Aqui vemos que no se pierde el contexto.

