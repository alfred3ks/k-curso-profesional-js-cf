/*

Los modulos que estamos viendo son los usados por el lenguaje JS nativamente:

La sintaxis para definir para definir un modulo e importarlo en otro.

Trabajaremos con dos archivos:

modulo_base.js

modulo_dos.mjs

Es buena practica que los archivos que son unos modulos usen la extension .mjs, pero no pasa nada si usamos la extension .js

Aun que buenas practicas es mejor usarlo.

Un modulo de JS se distingue de un archivo de JS o bien exporta codigo o lo importa. Ambos archivos el que importa o exporta son modulos y son tratados como tal por el interprete de JS.

Para transformar un archivo normal de JS a un modulo tan simple como usar la palabra export:

export const name = "Alfred";

Asi exportariamos una variable.

Ahora en el modulo que vamos a importar usaremos la instruccion import:

import { name } from 'modulo_dos.mjs';

Si vamos a usar nodeJS para ejecutar el codigo debemos crear el package.json y decirle que estos archivos son de tipo module:

{
    "name": "modulos",
    "version": "1.0.0",
    "description": "",
    "main": "modulo_base.js",
    "type": "module",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Alfredo Sánchez",
    "license": "ISC"
}

Si lo vamos a usar en el navegador para ver lo que muestra la consola lo hacemos con el archivo index.html y en el script le tenemos que decir el archivo de entrada del tipo modulo.

    <script src="./modulo_base.js" type="module"></script>

MMMM una cosas muy interesante y practico si no tenemos instalado liveserver es usar node static

instalamos la dependencia:

npm install -g node-static

para arrancar escribes en la consola static y enter. Arrancaria si hay un html.

Ahora yo ya tengo instalado nodemon.

*/