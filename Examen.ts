var rxjs = require('rxjs');
var fs = require('fs');
function leerBDD() {
    console.log("mensaje");
    return new Promise(function (resolve) {
        fs.readFile('data.json', 'utf-8', function (error, contenidoArchivo) {
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
function buscartype() {
    var arregloRespuestaTypes = [];
    var inicializarBDD$ = rxjs.from(leerBDD());
    inicializarBDD$
        .subscribe(function (res) {
            res.bdd.forEach(function (element) {
                element.types.forEach(function (tipo) {
                    var respuestaTypes = {
                        tipo: tipo.type.name
                    };
                    arregloRespuestaTypes.push(respuestaTypes);
                    console.log(respuestaTypes);
                });
            });
        });
}
buscartype();
//2) Busque los tipos de "abilities" en el arreglo `data.json`
function buscarabilities() {
    var arregloRespuestaAbilities = [];
    var inicializarBDD$ = rxjs.from(leerBDD());
    inicializarBDD$
        .subscribe(function (res) {
            res.bdd.forEach(function (element) {
                element.abilities.forEach(function (habilidad) {
                    var respuestaAbilities = {
                        habilidad: habilidad.ability.name
                    };
                    console.log(respuestaAbilities);
                    arregloRespuestaAbilities.push(respuestaAbilities);
                });
            });
        });
    return arregloRespuestaAbilities;
}
buscarabilities();
//3) Busque los tipos de "move" en el arreglo `data.json`
function buscarmove(move) {
    return new Promise(function (resolve, reject) {
        fs.readFile('data.json', 'utf-8', function (err, contenido) {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                var bdd = JSON.parse(contenido);
                var respuestaFind = bdd
                    .find(function (moves) {
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
var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];
console.log(abc);
function buscarpokemon() {
    return new Promise(function (resolve, reject) {
        fs.readFile('data.json', 'utf-8', function (err, contenido) {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                var bdd = JSON.parse(contenido);
                var respuestaFind = bdd
                    .find(function (moves) {
                        if (moves == letras) {
                            return moves.name ;
                            console.log('encontrado');
                        }
                    });
                resolve(respuestaFind);
            }
        });
    });
}
buscarpokemon()