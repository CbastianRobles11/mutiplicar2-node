const oo = {
    base: {
        alias: `b`,
        demand: true
    },
    limite: {
        alias: `l`,
        default: 10
    }
}

const comandos = require('yargs')
    .command('suma', 'listo documentar', oo)
    .command('resta', 'listo documentar', oo)
    .command('multiplicacion', 'listo documentar multiplicacion', oo)
    .argv

module.exports = {
    comandos
}