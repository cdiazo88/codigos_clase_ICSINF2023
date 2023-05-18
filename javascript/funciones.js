// Simular hacer una calculadora
// declarar las variables
const numero1 = 5;
const numero2 = 4;

// crear funcion + - * /
sumar(numero1, numero2);
// const resultadoResta = restar(numero1, numero2);
// console.log('resultadoResta->', resultadoResta);

function sumar(numero1, numero2) {
    const resultado = numero1 + numero2;
    console.log('resultado->', resultado)
}

// function restar(num1, num2) {
//     return num1 - num2;
// }

// hacer mas inteligente la funcion;

hacerOperacion(numero1, numero2, 'sumar');
hacerOperacion(numero1, numero2, 'resta');
hacerOperacion(numero1, numero2, 'multiplicar');
hacerOperacion(numero1, numero2, 'dividir');

function hacerOperacion (num1, num2, operacion){
    if (operacion === 'suma'){
        sumar(num1, num2);
    }
    if (operacion === 'resta'){
        console.log(num1 - num2);    
    }
    if (operacion === 'multiplicar'){
        console.log(num1 * num2);    
    }
    if (operacion === 'dividir'){
        console.log(num1 / num2);    
    }
}
