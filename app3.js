const importar = require(`./multiplicar/multiplicar3`);

const argv = require(`./config/yargs3`).comandos

const hh = argv._[0];

switch (hh) {
    case `suma`:
        importar.crearSuma(argv.base, argv.limite)
            .then(gg => {
                console.log(gg);

            }).catch(zz => {
                console.log(zz);

            })
        break;

    case `resta`:
        importar.crearResta(argv.base, argv.limite)
            .then(gg => {
                console.log(gg);

            }).catch(zz => {
                console.log(zz);

            })
        break;

    case `multiplicacion`:
        importar.crearMultiplicacion(argv.base, argv.limite)
            .then(gg => {
                console.log(gg);

            }).catch(zz => {
                console.log(zz);

            })
        break;
    default:
        console.log(`No reconocido el caracter `);

        break;

}