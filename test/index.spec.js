let chai = require('chai');
let expect = chai.expect;
let validator = require('../index');

describe('Validator CPF lib', () => {
  describe('CPF Válidos', () => {
    describe('CPF com primeiro digito verificador 0', () => {
      it('Deveria retornar true para 289.499.132-08', () => {
        expect(validator.cpfValidator('289.499.132-08')).to.equal(true);
      });
    });
    describe('CPF com digitos verificadores verdadeiros', () => {
      it('Deveria retornar true para 4421804983', () => {
        expect(validator.cpfValidator('44218049831')).to.equal(true);
      });
    });
    describe('CPF válido com caracteres não numéricos', () => {
      it('Deveria retornar true para 442.180.498-31', () => {
        expect(validator.cpfValidator('442.180.498-31')).to.equal(true);
      });
    });
    describe(' resto é 10 ou 11 o dígito verificador deve ser zero', () => {
      it('deve retornar true para 36472172200 ', () => {
        expect(validator.cpfValidator('36472172200')).to.equal(true);
      });
    });
  });
  describe('CPF Inválidos', () => {
    describe('CPF digitos iguais', () => {
      it('Deveria retornar false para 11111111111', () => {
        expect(validator.cpfValidator('11111111111')).to.equal(false);
      });
    });
    describe('CPF com o segundo digito verificador errado', () => {
      it('Deveria retornar false para 03090575662', () => {
        expect(validator.cpfValidator('03090575662')).to.equal(false);
      });
    });
    describe('CPF com os dois digitos verificadores errados', () => {
      it('Deveria retornar false para 12345678912', () => {
        expect(validator.cpfValidator('12345678912')).to.equal(false);
      });
    });
    describe('CPF com letras', () => {
      it('Deveria retornar false para aaa.456.789-12', () => {
        expect(validator.cpfValidator('aaa.456.789-12')).to.equal(false);
      });
    });
    describe('CPF com quantidade de digitos menor que 11', () => {
      it('Deveria retornar false para 4421804983', () => {
        expect(validator.cpfValidator('4421804983')).to.equal(false);
      });
    });
    describe('CPF com quantidade de digitos maior que 11', () => {
      it('Deveria retornar false para 4421804983', () => {
        expect(validator.cpfValidator('442180498333')).to.equal(false);
      });
    });
  });
});
