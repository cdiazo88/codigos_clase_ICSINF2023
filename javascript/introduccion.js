// Variables
// let a = 1;
// let b = 2;
// const estapermitido = false;

// if (estapermitido) {
//     console.log('si autorizado');
// } else {
//     console.log('no autorizado');
// }
//Tipos de datos

//Operaciones

//Objetos
let salaClases = {color: 'blanco', capacidad: 30, esLaboratorio : true};
// console.log('sala->', salaClases);

let lista = [salaClases];
lista.push(5);
lista.push(6);
lista.push(7);

lista.forEach(element => {
    console.log('elemento', element);
    if(element === 6){
        console.log('voy en el elemento 6')
    }
});

// console.log('lista->', lista);
// console.log(lista.length);
//Listas (push, concat)
