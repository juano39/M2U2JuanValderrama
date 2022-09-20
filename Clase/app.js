// variables
const d = document;
const arrNum = [];

// Variables del DOM
const numIngresados = d.querySelector('#numeros');
const btnIngresar = d.querySelector('#ingresar');
const btnCalcular = d.querySelector('#calcular')
const listaNum = d.querySelector('#listaNum');
const mayor = d.querySelector('#mayor');
const menor = d.querySelector('#menor');


console.log(numIngresados, btnIngresar)

// Funciones

const ingresarNumero = (e) => {
    e.preventDefault();

    const num = parseInt(numIngresados.value) 
    arrNum.push(num)

    const p = d.createElement('p');
    p.textContent = num
    listaNum.appendChild(p)

    
    
    // console.log(typeof num)
}

const mayorMenor = (arr) => {

    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
        
        if (max < arr[i]) {
            max = arr[i]
        }
    }

    mayor.textContent = max;
    menor.textContent = min;
}


// Eventos

btnIngresar.addEventListener('click', ingresarNumero)
btnCalcular.addEventListener('click', (e) => {
    e.preventDefault();
    mayorMenor(arrNum)
} )

