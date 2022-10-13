const argv = require('yargs')
                .option('t',{ // b es el nombre de la base y podemos usar ambos, b o base.
                    alias: 'table',
                    type: 'number', //es el tipo de valor de variable
                    demandOption: true, // hace obligatorio el dato o variable
                    default: false,
                    describe: 'Base de la tabla de multilpicar'
                })
                .option('l',{ // l es el nombre de lustar y podemos usar ambos, l o listar.
                    alias: 'listar',
                    type: 'boolean', //es el tipo de valor de variable
                    demandOption: true,
                    default: false, //No hace obligatorio el dato o variable
                    describe: 'Muestra la tabla en consola'
                })
                .option('h',{ // l es el nombre de lustar y podemos usar ambos, l o listar.
                    alias: 'hasta',
                    type: 'number', //es el tipo de valor de variable
                    demandOption: false,
                    describe: 'Indica el límite de la multiplicación'
                })
                .check( (argv, options)=> { //Validamos la información
                    if (isNaN( argv.t )) {
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv
module.exports = argv;