const fs = require('fs');


let archivo1 = ``

let crearSuma = (base, limite) => {
    return new Promise((res, error) => {


        for (let a = 1; a <= limite; a++) {

            let resultado = base + a;
            archivo1 += `${base} + ${a} = ${resultado}  \n `

        }
        fs.writeFile(`Suma de ${base}.txt`, archivo1, (err) => {
            if (err) {
                error(`No se pudo hacer el archivo`)
            } else {
                res(`Archivo Suma creado  de ${base}`);
            }

        });
    })
}

let crearResta = (base, limite) => {
    return new Promise((res, error) => {


        for (let a = 1; a <= limite; a++) {

            let resultado = base - a;
            archivo1 += `${base} - ${a} = ${resultado} \n`

        }
        fs.writeFile(`Resta de ${base}.txt`, archivo1, (err) => {
            if (err) {
                error(`No se pudo hacer el archivo`)
            } else {
                res(`Archivo Resta creado  de ${base}`);
            }

        });
    })
}
let crearMultiplicacion = (base, limite) => {
    return new Promise((res, error) => {


        for (let a = 1; a <= limite; a++) {

            let resultado = base * a;
            archivo1 += `${base} * ${a} = ${resultado}  \n`

        }
        fs.writeFile(`multiplicacion de ${base}.txt`, archivo1, (err) => {
            if (err) {
                error(`No se pudo hacer el archivo`)
            } else {
                res(`Archivo Multiplicacioón creado  de ${base}`);
            }

        });
    })
}



module.exports = {
    crearSuma,
    crearResta,
    crearMultiplicacion
}