/*

Vamos a poner en practica todo el conocimiento adquirido.

Vamos a buscar link en una cadena y le vamos a agregar su cadena http para que funciones correctamente.

*/

let url = "https://cheverestore.com";
let expresion = /(https?:\/{2}(\S+\.)?\S+(\.\S+)(\.S+)?)/;
console.log(url.match(expresion));

let texto = "Visita " + url;
console.log(`La url es: ${texto}`);

let replaceTexto = texto.replace(expresion, "<a href='$1'>$1</a>");
console.log(replaceTexto);
