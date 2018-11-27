const argv = require(`./config/yargs`).argv;
var colors = require('colors');

const bb = require(`./multiplicar/multiplicar`)

let comando = argv._[0];

switch (comando) {

    case `listar`:
        var gg = `Tabla ${argv.base} con limite ${argv.limite} creado`.red
        console.log(`Listar`);
        bb.listarTabla(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo: ` + gg);

            }).catch(error => {
                console.log(`errorr`, error);

            })

        break;
    case `crear`:
        var ff = `${archivo}`.bgBlue;
        console.log(`crear`);
        bb.crearArchivo(argv.base)
            .then(archivo => {
                console.log(`Archivo creado: ` + ff)
            }).catch(e => {
                console.log(e);

            })

        break;

    default:
        console.log(`comando no reconocido`);
        break;

}


// console.log(process.argv);
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split(`=`)[1]