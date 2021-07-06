function validator (creditCardNumber){
  this.creditCardNumber = creditCardNumber;
  this.valid = false;
  this.numValid = /[^0-9-\s]+/.test(creditCardNumber); // regresa un booleano
  this.isValid = () => {

    if(this.numValid === true){
      return alert("Por favor solo escribe numeros en el campo de número de tajeta de crédito");
    }
    else {
      let cNumber = this.creditCardNumber;
      let oddPosNum = 0;
      let evenPosNum = 0;
      let sumEven1 = 0;
      let sumEven10 = 0;
      let sumEven2 = 0;
      let totalSum = 0;
      let num = 0;

      //"/\D/g" busca de manera global si no existe un digito del 1-9 y lo elimina;
      cNumber = cNumber.replace(/\D/g, "");

      //invierte los digitos del numero de tarjeta
      for (let i = cNumber.length - 1; i >= 0; i--){
        num += cNumber.charAt(i);
      }

      //Elimina el 0 de la pos 0;
      num = num.substring(1, num.length);

      /*bucle para reccorer el elemento "creditCardNumber" de derecha a iazquierda (Final->Inicio)*/
      //"i" respresenta la pos de cada elemnto
      for(let i = cNumber.length - 1; i >= 0; i--){

        //Escoge aquellos numeros que tienen posicion impar
        if(i % 2 != 0){
          oddPosNum = parseInt(num.charAt(i))*2;
          oddPosNum = oddPosNum.toString();
          //Escoge aquellos numeros que en la operacion anterior sean mayores a 10 y los suma entre si
          if(oddPosNum >= 10){
            sumEven10 = parseInt(oddPosNum.charAt(0)) + parseInt(oddPosNum.charAt(1));
            sumEven1 += sumEven10;
          }
          else {
            sumEven2 += parseInt(oddPosNum);
          }
        }
        //hace la suma de todos los numeros que tienen psociion impar
        else {
          evenPosNum += parseInt(num.charAt(i));
        }
      }
      //Suma todos los elementos resultado de las operaciones anteriores
      totalSum = sumEven1 + sumEven2 + evenPosNum;

      //Validacion
      if(totalSum % 10 == 0){
        let answer = "Valida"
        let valid = this.valid = true;
        return {answer, valid};
      }
      else {
        let answer = "Invalida"
        let valid = this.valid = false;
        return {answer, valid};
      }
    }
  }

  this.maskify = () => {
    let cNumber = this.creditCardNumber;
    //se extraen solo los ultimos 4 numeros
    let lastNumbers = cNumber.substring(cNumber.length-4);
    //Se extraen todos los numeros menos los 4 ultimos
    let initialNumbers = cNumber.substring(0,cNumber.length-4);
    // Se enmascara con # para /./-> cualquier carácter
    let cNumberFinalScreen = initialNumbers.replace(/./g, '#') + " " + lastNumbers;
    // retorna un objeto
    return {lastNumbers, initialNumbers, cNumberFinalScreen};
  }
}

export default validator;
