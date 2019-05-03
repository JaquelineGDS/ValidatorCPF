function nineDigitsCpf(strCPF) {
  return strCPF.slice(0, 9);
}
function transformCPFinArray(strCPF) {
  return strCPF.split('');
}
function digitsCPFMultiplication(strCPF, total) {
  return strCPF.map((element) => {
    return element * (total--);
  });
}
function valueReduced(mapArrayCpf) {
  return mapArrayCpf.reduce((total, element) => {
    return total + element;
  });
}
function multiplicationValueReduced(valueReduced) {
  return valueReduced * 10;
}
function mod11(valueMult) {
  return valueMult % 11;
}
function testDigitValidator(digitValidator) {
  if (digitValidator === 10 || digitValidator === 11) {
    return 0;
  } else {
    return digitValidator;
  }
}
function validationDigit(cpfArray, valueToMultiply) {
  return testDigitValidator(mod11(multiplicationValueReduced(valueReduced(digitsCPFMultiplication(cpfArray, valueToMultiply)))));
}
function compareDigits(firstDigitChecker, secondtDigitChecker, strCPF) {
  if (firstDigitChecker === parseInt(strCPF.charAt(9)) && secondtDigitChecker === parseInt(strCPF.charAt(10))) {
    return true;
  } else {
    return false;
  }
}
function repeatingNumbersCpf(strCPF) {
  let cpfInArray = transformCPFinArray(strCPF);
  return cpfInArray.every((elem) => elem === strCPF[0]);
}
function checkerCPF(strCpf) {
  let nineDigitS = nineDigitsCpf(strCpf);
  let cpfArray = transformCPFinArray(nineDigitS);
  let firstDigitChecker = validationDigit(cpfArray, 10);
  let secondtDigitChecker = validationDigit(cpfArray.concat(firstDigitChecker), 11);
  return compareDigits(firstDigitChecker, secondtDigitChecker, strCpf);
}
function validFormatCPF(strCpf) {
  let formatCorrectCPF = RegExp(/^([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11})/g);
  let formatCPF = strCpf.match(formatCorrectCPF);
  return formatCPF ? true : false;
}
function replaceCaracteres(strCpf) {
  return strCpf.replace(/[-.\\\\/]/gi, '');
}
function cpfValidator(strCpf) {
  if (validFormatCPF(strCpf)) {
    let cpfDigits = replaceCaracteres(strCpf);
    if (repeatingNumbersCpf(cpfDigits)) {
      return false;
    } else if (checkerCPF(cpfDigits)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
module.exports.cpfValidator = cpfValidator;