/*

Existen unos metodos por medio de los cuales podemos asignarle el valor de this.

- bind()
-call()
-apply()

Los metodos que modifican el contexto y que se ejecutan de manera inmediata la funcion:
call()
apply

Los que construyen una nueva funcion para ejecutarla:
bind()


*/

function Estudiantes() {
    this.nombre = "Ursula",
    this.saludar = function() {
            console.log("Hola " + this.nombre, arguments);
        }
    // this.saludar = this.saludar.bind(this);
}

let e = new Estudiantes();
e.saludar();

// call():
e.saludar.call(e, "1", "2");

// apply():
e.saludar.apply(e,["3","4"]);

// bind():
let nueva = e.saludar.bind(e, "6", "7");
nueva();
