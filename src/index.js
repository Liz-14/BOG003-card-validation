import validator from './validator.js';
/*let card = new validator();
card = new validator('4083952015263');
console.log(card.isValid().valid);*/
/* Función que permite la manipulación del DOM para el enmascaramineto
  del numero de tarjeta */
const CardNumberMasked = () => {
  let number = document.getElementById('cardN').value;
  let card = new validator(number);
  document.getElementById('unmasked').value = card.maskify().lastNumbers;
  document.getElementById('masked').value = card.maskify().initialNumbers;
}

/* Función que permite manipular los display de la pantalla final
  e inicial. Tambien limpiar los campos imput*/
const screen2 = () => {

  //La pantalla final se esconde, mostrando la inicial
  let finalSreen = document.getElementById("finalScreen");
  finalSreen.style.display = "none";

  let homeScreen = document.getElementById('homeScreen');
  homeScreen.style.display = "block"

  // Se limpian los campos/inputs
  document.getElementById('name').value = "";
  document.getElementById('masked').value = "";
  document.getElementById('unmasked').value = "";
  document.getElementById('cardN').value = "";
}

/* Función que permite manipular los display de la pantalla inicial
  y final. Tambien obtener e imprimir los datos de los imput, además
  recibe la funcion validator */
const screen1 = () => {
  //Se crea la tarjeta y comienza la validacion
  let number = document.getElementById('cardN').value;
  let card = new validator(number);

  //Verifica si hay inputs vacios
  if(document.getElementById('cardN').value == "" || document.getElementById('name').value == ""){
    return alert("llena todos los campos");
  }
  else{
    //Verifica que se escriban unicamente numeros
    if(card.isValid().answer === undefined){
      screen2();
    }
    //Si estan completos los campos se realizan las funciones
    else {
      //La pantalla inicial se esconde, mostrando la final
      let finalSreen = document.getElementById("finalScreen");
      finalSreen.style.display = "block";

      let homeScreen = document.getElementById('homeScreen');
      homeScreen.style.display = "none"

      //Se muestra el nombre que se escribio en el input previo
      let name = document.getElementById('name').value;
      document.getElementById('employeeN').innerHTML = name;

      //Se muestra los ultimos numeros de la tarjeta de credito ingresada
      document.getElementById('cardNumberMasked').innerHTML = card.maskify().cNumberFinalScreen;
      //Se muestra la validez o invalidez del numero de tarjeta
      document.getElementById('validation').innerHTML = card.isValid().answer;

      //Se cambia el color de acuerdo al resultado de la validacion
      if(card.isValid().answer == "Valida"){
        document.getElementById('validation').style.color = "green";
      }
      else{
        document.getElementById('validation').style.color = "red";
      }
    }
  }
}

// Funcionalidad del boton "validar"
let btnValidar = document.getElementById('validar');
btnValidar.addEventListener("click", screen1);

// Funcionalidad del boton "validar otra tarjeta"
let btnOtherCC = document.getElementById('btn2');
btnOtherCC.addEventListener("click", screen2);

/*Evento que permite el funcionamiento del "maskify" al oprimir
  cada numero del teclado*/
let masked = document.getElementById('cardN');
masked.addEventListener("keyup", CardNumberMasked)
