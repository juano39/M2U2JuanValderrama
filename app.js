let d = document;

let formulario = d.querySelector('#form')
let button = d.querySelector('#evaluar');
let nombreEstudiante = d.querySelector('#nombre');
let cedula = d.querySelector('#cedula');
let numeroMaterias = d.querySelector('#materias');
let periodo = d.querySelector('#periodo');
let nombreUniversidad = d.querySelector('#universidad');
let materias = d.querySelectorAll('.check');





button.addEventListener('click', (e)=> {
    e.preventDefault()
    console.log('first')
})