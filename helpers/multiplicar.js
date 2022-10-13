const fs =  require('fs');

const crearArchivo = async ( table = 3, listar = false, hasta) => {

        
        
        let salida='';
        let limite = 11;
        if (hasta !== 11) {
            limite = hasta +1
        }
        for (let index = 1; index < limite; index++) {
           salida += `${ table } x ${ index } = ${ table * index }\n`;
        }
        
        if (listar) {
            
            console.log( salida );
        }
        

        fs.writeFileSync(`./salida/tabla-${ table }.txt`, salida);
    
        return `tabla-${ table }.txt`;
}
    

module.exports = {
    crearArchivo: crearArchivo
    //se puede dejar solo crearArchivo
}