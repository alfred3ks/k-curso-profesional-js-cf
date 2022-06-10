/*

Vamos a aprender a utilizar el operador expansion o lo que es lo mismo el Spread Operator.

Lo usaremos para combinar o duplicar objetos, se puede dar el caso que tengamos un objeto el cual no desarmos modificar su valor inicial, par eso usamos este operador.


*/

let user = {
    edad: 20,
    nombre: "Frank"
}

// Para genera una copia del objeto original:
let admin = {
    ...user,
    permisos: true
};
console.log(admin);
console.log(user); // No se modifica el original

// Ahora vamos a combinar dos o mas objetos:
let esquemaPermisos = {
    nivel: 2
}

let superAdmin = {
    ...admin,
    nombre: "Cody", // Este pisa a la propiedad original, cuando son iguales las propiedades.
    ...esquemaPermisos
}

console.log(superAdmin);

// Tambien existe un metodo llamado object.assign() para duplicar objetos:
let copiaUser = Object.assign({}, user);
console.log(copiaUser);

// Desde una fuente ya existen le agregamos atributos.
let copiaUser1 = Object.assign(user, {permisos:false});
console.log(copiaUser1); // OJO se modifica el original!!!!!
console.log(user);