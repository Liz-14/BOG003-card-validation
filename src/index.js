import validator from './validator.js';
/* Función que permite manipular los display de la pantalla inicial
  y final. Tambien obtener e imprimir los datos de los imput*/
const screen1 = () => {
  let finalSreen = document.getElementById("finalScreen");
  finalSreen.style.display = "block";

  let homeScreen = document.getElementById('homeScreen');
  homeScreen.style.display = "none"

  let name = document.getElementById('name').value;
  document.getElementById('employeeN').innerHTML = name;

  let creditCardNumber = document.getElementById('cardN').value;
  document.getElementById('cardNumber').innerHTML = creditCardNumber;
}

/* Función que permite manipular los display de la pantalla final
  e inicial. Tambien limpiar los campos imput*/
const screen2 = () => {
  let finalSreen = document.getElementById("finalScreen");
  finalSreen.style.display = "none";

  let homeScreen = document.getElementById('homeScreen');
  homeScreen.style.display = "block"

  document.getElementById('name').value = "";
  document.getElementById('cardN').value = "";

}

// Funcionalidad del boton validar
let btnValidar = document.getElementById('validar');
btnValidar.addEventListener("click", screen1);

// Funcionalidad del boton validar otra tarjeta
let btnOtherCC = document.getElementById('btn2');
btnOtherCC.addEventListener("click", screen2);


console.log(validator);
