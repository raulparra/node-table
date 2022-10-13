
const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

console.log( process.argv );
console.log( argv );



crearArchivo( argv.t, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

/* let salida = '';
const imprimirTabla = (table)=>{
    for (let index = 1; index < 11; index++) {
       salida += `${ table } x ${ index } = ${ table * index }\n`;
        
    }
    console.log( salida );
}
let table = 5
imprimirTabla(table);

fs.writeFile(`tabla-${ table }.txt`, salida, ( err )=> {
    if (err) throw err;
    console.log(`tabla-${ table }.txt ha sido creada correctamente`);
}) */
