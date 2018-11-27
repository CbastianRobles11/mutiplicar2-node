const fs = require('fs');



let archivo = ``

let crearArchivo = (base) => {
    return new Promise((res, error) => {
        if (!Number(base)) {
            error(`Error no es numero`)
        } else {

            for (let i = 0; i <= 10; i++) {

                let resultado = i * base;
                archivo += `${base}* ${i}=${resultado}\n`;

            }
            fs.writeFile(`archivo-${base}.txt`, archivo, (err) => {
                if (err) {
                    error(`Existe Error no se pudo crear`, err)
                } else {
                    res('Archivo -${base} creado');
                }


            });
        }

    })
}

module.exports = {
    crearArchivo
}