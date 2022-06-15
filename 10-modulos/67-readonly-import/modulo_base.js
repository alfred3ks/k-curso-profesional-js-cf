// import { name } from './modulo_dos.mjs';

// Importamos por defecto: Podemos ver que el nombre de la importacion es arbitrario puede ser cualquier cosa.
// import def from './modulo_dos.mjs';

// Siquieramos exportar todo en una sola linea se puede hacer:
import def, { name, age } from './modulo_dos.mjs';

// age = 50;

console.log(`El nombre del dev es ${name} ${def} y tengo ${age} años.`);
