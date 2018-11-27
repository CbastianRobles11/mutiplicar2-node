const file1 = require('./multiplicar2');



let argv = process.argv;
let parametro = argv[2];
let base = parametro.split(`=`)[1]
console.log(base);


file1.crearArchivo(base).then(s => {
    console.log(`Archivo creado ${s} `);
}).catch(n => {
    console.log(n);

})