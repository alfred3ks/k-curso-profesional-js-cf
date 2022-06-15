/*

La palabra reservada await hace que la ejecucion del codigo espere a que una promesa sea resulta, enviando la sintaxis de then().

Para poder usar await tenemos que hacerlo dentro de una funcion asincrona que use async.



*/

// Tenemos una promesa usando then() para poderla resolver.
let promesa = new Promise((resolve, reject)=>{
    setTimeout(resolve, 400, 5);
})

promesa.then((r)=>{
    console.log("Resuelta " + r);
})

// ahora con await:
let asincrona = async ()=>{
    let promesa = await new Promise((resolve, reject) => {
        setTimeout(resolve, 800, 35);
    })

    let valor = await new Promise((resolve, reject)=>{
        setTimeout(resolve, 100, "Holaaaaa");
    })

    console.log(`La respuesta asincrona es: ${valor} tengo ${promesa} años.`);

}

asincrona();

// Aqui tenemos otro ejemplo: Probarlo en navegador en nodeJS no esta definido el metodo fetch() hay que descargar un modulo.
let showGitHubInfo = async ()=> {
    let response = await fetch('https://api.github.com/users/alfred3ks/repos');
    let json = await response.json();
    console.log(json);
}

showGitHubInfo();







