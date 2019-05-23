const { inscripcion } = require('./calculo');

const opciones = {
    idCurso: {
        demand: true,
        alias: 'i'
    },
    nombreInteresado: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    },
    interes: {
        default: 0,
        alias: 't'
    }
}

const argv = require('yargs')
    .command('prematricula', 'Ingresar informacion prematricula a curso', opciones)
    .argv

inscripcion(argv.idCurso, argv.interes, argv.nombreInteresado, argv.cedula) ;