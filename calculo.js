const { curso } = require('./datos');
const fs = require('fs');

let listarCursos = (curso) => {
    let cursos = [];
    let tiempo = 0;

    curso.forEach(function (item) {
        let texto;        

        texto = 'Id del curso: ' + item.id + '\n' +
        'Nombre del curso: ' + item.nombre + '\n' +
        'Duracion en horas: ' + item.duracion + '\n' +
        'Valor del curso: ' + item.valor + '\n';
        cursos.push(texto)
    });

    cursos.forEach(function (elemento, indice, array) {
        setTimeout(function () {
            console.log(elemento);
        }, tiempo)

        tiempo = tiempo + 2000;
    });
};

function listar(){
    listarCursos(curso);
}

function inscripcion(id, interes, nombreInteresado, cedula){
    let cursoEncontrado = curso.find( curs => curs.id === id);
    let texto;

    if(cursoEncontrado == undefined){
        texto = '\nId ingresado no se encuentro, por favor intentar de nuevo.\n'

        listar();
    }else if(interes === 0){
            texto = '\nNo se encuentra interesado, recomendamos volver a observar los curso\npara darte animo a inscribirse a uno de ellos.\n'
            listar();
        }else{
            texto = '\nEl curso que ha elegido es:\n' +
        '   Id del curso: ' + cursoEncontrado.id + '\n' +
        '   Nombre del curso: ' + cursoEncontrado.nombre + '\n' +
        '   Duracion en horas: ' + cursoEncontrado.duracion + '\n' +
        '   Valor del curso: ' + cursoEncontrado.valor + '\n';

        crearArchivo(texto, interes, nombreInteresado, cedula);

        texto = texto + '\nSe ha inscribo al curso anteriormente describo, muchos exitos.\n'
        
        }

    console.log(texto);
}

let crearArchivo = (texto, interes, nombreInteresado, cedula) => {
    if(interes == 0)
        interes = 'No inscribir';

    textoFinal = 'La persona: ' + nombreInteresado + '\n' +
        'Cedula: ' + cedula + '\n' +
        'Con interes de: ' + interes + '\n' +
         texto

    fs.writeFile('informacion.txt', textoFinal, (err) => {
        if (err) throw (err)
        console.log('Se ha creado el archivo');
    });
};

module.exports = {
    inscripcion
}