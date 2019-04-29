function nineDigitsCPF(cpf) {
  return cpf.slice(0, 9);
}
function transformCPFinArray(cpf) {
  return cpf.split('');
}
function digitsCPFMultiplication(cpf, total) {
  return cpf.map((element) => {
    return element * (total--);
  })
}
function getSum(total, num) {
  return total + num;
}
function multi(reduce) {
  return reduce * 10;
}
function mod11(mult) {
  return mult % 11;
}
function testDigit(num) {
  if (num === 10) {
    return 0;
  } else {
    return num;
  }
}
function reduce(mapArraycpf){
  return mapArraycpf.reduce(getSum)
}
function validationDigit(cpfArray, digito){
   return testDigit(mod11(multi(reduce(digitsCPFMultiplication(cpfArray, digito)))));
}
function repeatingNumbersCpf(strCPF){
  return strCPF.split('').every((elem) => elem === strCPF[0])
}
function compareDigits(primeirodigito, segundodigito, cpf){
  if (primeirodigito === parseInt(cpf.charAt(9)) && segundodigito === parseInt(cpf.charAt(10))) {
    return true;
    }else{
      return false;
    }
}
function validatorCPF(cpf) {
  let ninedigit = nineDigitsCPF(cpf);
  let cpfArray = transformCPFinArray(ninedigit);
  let primeirodigito = validationDigit(cpfArray, 10);
  let segundodigito = validationDigit(cpfArray.concat(primeirodigito), 11); 
  return compareDigits(primeirodigito, segundodigito, cpf);
}
function setValidationCPF(cpf){
  if(repeatingNumbersCpf(cpf)){
    return false;
  }else if(validatorCPF(cpf)){
    return true;
  }else{
    return false;
  }
}

module.exports.setValidationCPF = setValidationCPF;