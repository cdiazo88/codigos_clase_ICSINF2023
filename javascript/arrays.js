// creamos un array de nombres de tipo string
let alumnos = ["Pedrito", "Andrea", "Juanito"];

// Acceder a un elemento de Array mediante su índice
let primero = alumnos[0]
// console.log('primero->', primero);

let ultimo = alumnos[alumnos.length - 1]
// console.log('ultimo->', ultimo);

// Recorrer un Array
alumnos.forEach(element => {
    // console.log('el->', element);
});

for (let index = 0; index < alumnos.length; index++) {
    const element = alumnos[index];
    // console.log('el->', element);
}

// Añadir un elemento al final de un Array
let nuevaLongitud = alumnos.push('Daniela') // Añade "Daniela" al final
// console.log('alumnos->', alumnos);

// Eliminar el último elemento de un Array
let ultimoElemento = alumnos.pop() // Elimina "Daniela" del final
// console.log('ultimoElemento->', ultimoElemento);
// console.log('alumnos->', alumnos);

//Añadir un elemento al principio de un Array
let nuevaLongitudUS = alumnos.unshift('Amanda') // Añade "Amanda" al inicio
// console.log('alumnos->', alumnos);

//Eliminar el primer elemento de un Array
let primerElemento = alumnos.shift() // Elimina "Amanda" del inicio
//  console.log('alumnos->', alumnos);

//Encontrar el índice de un elemento del Array
// alumnos.push('Ricardo');
// let posicion = alumnos.indexOf('Ricardo');
// console.log('alumnos->', alumnos);
// console.log(posicion);

//Eliminar varios elementos a partir de una posición
let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria'];
let pos = 1, numElementos = 2;
let elementosEliminados = vegetales.splice(pos, numElementos)
// console.log(vegetales)

//Copiar un Array
let copiaArray = alumnos.slice();

// Acceder a elementos de un Array
// console.log(alumnos[0]);
console.log(alumnos.includes('Andrea'));



