function digitValidator(digitValidator) {
  if (digitValidator === 10 || digitValidator === 11) {
    return 0;
  } return digitValidator;
}
function mod11(valueMult) {
  return valueMult % 11;
}
function multiplicationValueReduced(sumValue) {
  return sumValue * 10;
}
function sumValue(ArrayCpf) {
  return ArrayCpf.reduce((total, element) => {
    return total + element;
  });
}
function digitsCPFMultiplication(strCPF, total) {
  return strCPF.map((element) => {
    return element * (total--);
  });
}
function compareDigits(firstDigitChecker, secondtDigitChecker, strCPF) {
  if (firstDigitChecker === parseInt(strCPF.charAt(9)) && secondtDigitChecker === parseInt(strCPF.charAt(10))) {
    return true;
  }
}
function validationDigit(cpfArray, valueToMultiply) {
  const digitsCpfMultiplication = digitsCPFMultiplication(cpfArray, valueToMultiply);
  const sumDigitsValue = sumValue(digitsCpfMultiplication);
  const multsum = multiplicationValueReduced(sumDigitsValue);
  const module11 = mod11(multsum);
  return digitValidator(module11);
}
function transformCPFinArray(strCPF) {
  return strCPF.split('');
}
function nineDigitsCpf(strCPF) {
  return strCPF.slice(0, 9);
}
function checkerCPF(strCpf) {
  const nineDigits = nineDigitsCpf(strCpf);
  const cpfArray = transformCPFinArray(nineDigits);
  const firstDigitChecker = validationDigit(cpfArray, 10);
  const secondtDigitChecker = validationDigit(cpfArray.concat(firstDigitChecker), 11);
  return compareDigits(firstDigitChecker, secondtDigitChecker, strCpf);
}
function repeatedNumbers(strCPF) {
  const cpfInArray = transformCPFinArray(strCPF);
  return cpfInArray.every((elem) => elem === strCPF[0]);
}
function replaceCaracteres(strCpf) {
  return strCpf.replace(/[-.\\\\/]/gi, '');
}
function validFormatCPF(strCpf) {
  const formatCorrectCPF = RegExp(/^([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11})/g);
  const formatCPF = strCpf.match(formatCorrectCPF);
  return formatCPF ? true : false;
}
function cpfValidator(strCpf) {
  if (validFormatCPF(strCpf)) {
    const cpfDigits = replaceCaracteres(strCpf);
    if (repeatedNumbers(cpfDigits)) {
      return false;
    } else if (checkerCPF(cpfDigits)) {
      return true;
    } return false;
  } return false;
}
module.exports.cpfValidator = cpfValidator;