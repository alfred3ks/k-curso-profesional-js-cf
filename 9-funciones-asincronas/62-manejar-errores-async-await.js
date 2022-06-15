/*
Manejo de errores en async await: Para este caso se hace con los bloques de try y catch.



*/

(async function () {
    try {
        let promesa = await Promise.reject('Error 1');
        let promesa2 = await Promise.reject('Error 2');
    } catch (err) {
        console.log(err);
    }
})

();




