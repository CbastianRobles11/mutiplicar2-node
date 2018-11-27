const opt = {
    base: {
        alias: `b`,
        demand: true
    },
    limite: {
        alias: `l`,
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'comieza archivo ', opt)
    .command('listar', 'comieza archivo ', opt)
    .help()
    .argv

module.exports = {
    argv
}