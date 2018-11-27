const fs = require('fs');
var colors = require('colors');
let listarTabla = (base, limite) => {

    return new Promise((rest, error) => {
        if (!Number(base)) {
            error(`El valor ${base}: No es un numero`)
            return;
        }
        let datito = ``

        for (var i = 1; i <= limite; i++) {
            let res = i * 2;
            datito += `${base} * ${i} = ${res} \n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, datito, (err) => {
            if (err)
                error(err);
            else
                rest(`tabla- ${base}.txt`)

        });

    })

}

let crearArchivo = (base) => {
    return new Promise((res, error) => {

        if (!Number(base)) {
            error(`El valor ${base}: No es un numero`)
            return;
        }

        let data = ``

        for (var i = 1; i <= 10; i++) {
            let res = i * 2;
            data += `${base} * ${i} = ${res} \n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                error(err);
            else
                res(`tabla- ${base}.txt`)

        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}