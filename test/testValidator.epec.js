let chai = require('chai');
let expect = chai.expect;
let validator = require('../lib/validatorCPF');
console.log(validator)
describe("Validator CPF lib", () => {
  describe("Validator CPF", () => {
    it("Deveria retornar true para 44218049831 ", () => {
      expect(validator.setValidationCPF('44218049831')).to.equal(true);
    });
    it("Deveria retornar true para 16494043879", () => {
      expect(validator.setValidationCPF('16494043879')).to.equal(true);
    });
    it("Deveria retornar false para 11111111111 ", () => {
      expect(validator.setValidationCPF('11111111111')).to.equal(false);
    });
    it("Deveria retornar false para 03090575662 ", () => {
      expect(validator.setValidationCPF('03090575662')).to.equal(false)
    });
    it("Deveria retornar false para 03090575662", () => {
      expect(validator.setValidationCPF('03090575662')).to.equal(false)
    });
    it("Deveria retornar false para 12345678912", () => {
      expect(validator.setValidationCPF('12345678912')).to.equal(false)
    });
  });
});
