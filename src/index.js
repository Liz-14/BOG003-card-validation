import validator from './validator.js';

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

const screen2 = () => {
  let finalSreen = document.getElementById("finalScreen");
  finalSreen.style.display = "none";

  let homeScreen = document.getElementById('homeScreen');
  homeScreen.style.display = "block"
  
  document.getElementById('name').velue = "";
  document.getElementById('cardN').value = "";

}

let btnValidar = document.getElementById('validar');
btnValidar.addEventListener("click", screen1);

let btnOtherCC = document.getElementById('btn2');
btnOtherCC.addEventListener("click", screen2);


console.log(validator);
