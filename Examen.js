const fs = require('fs');
function leerBDD() {
    console.log("mensaje")
    return new Promise((resolve) => {
        fs.readFile('data.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                resolve({
                    mensaje: 'No existe la Base de Datos',
                    bdd: null
                });
            }
            else {
                resolve({

                    mensaje: 'Base de datos leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
console.log(leerBDD());
// 1) Busque los tipos de "types" en el arreglo `data.json
function buscartype(name) {
    return new Promise((resolve, reject) => {
        fs.readFile('data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const respuestaFind = bdd
                    .find((types) => {
                        return types.name === name;
                    });
                resolve(respuestaFind);
            }
        });
    });
}

for (i = 0; i < 14; i++) {
    console.log(buscartype(i));
}
//2) Busque los tipos de "abilities" en el arreglo `data.json`
function buscarabilities(ability) {
    return new Promise((resolve, reject) => {
        fs.readFile('data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const respuestaFind = bdd
                    .find((abilities) => {
                        return abilities.name === ability;
                    });
                resolve(respuestaFind);
            }
        });
    });
}
for (i = 0; i < 14; i++) {
    console.log(buscarabilities(i));
}

//3) Busque los tipos de "move" en el arreglo `data.json`
function buscarmove(move) {
    return new Promise((resolve, reject) => {
        fs.readFile('data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const respuestaFind = bdd
                    .find((moves) => {
                        return moves.name === move;
                    });
                resolve(respuestaFind);
            }
        });
    });
}
for (i = 0; i < 65; i++) {
    console.log(buscarmove(i));
}
//7) Cree un arreglo del abecedario, revisar si existe al menos un pokemon con cada letra del abecedario.
var abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
console.log(abc);
function buscarpokemon(move) {
    return new Promise((resolve, reject) => {
        fs.readFile('data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const respuestaFind = bdd
                    .find((moves) => {
                        if(moves==letras) {
                            return moves.name === move;
                        }
                    });
                resolve(respuestaFind);
            }
        });
    });
}