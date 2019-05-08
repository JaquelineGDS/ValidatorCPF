let chai = require('chai');
let expect = chai.expect;
let validator = require('../index');

describe('Validator CPF lib', () => {
  describe('CPF valid', () => {
    it('Return true 289.499.132-08', () => {
      expect(validator.cpfValidator('289.499.132-08')).to.equal(true);
    });
    it('Return true para 4421804983', () => {
      expect(validator.cpfValidator('44218049831')).to.equal(true);
    });
    it('Return true 442.180.498-31', () => {
      expect(validator.cpfValidator('442.180.498-31')).to.equal(true);
    });
    it('Return true 36472172200 ', () => {
      expect(validator.cpfValidator('36472172200')).to.equal(true);
    });
  });
  describe('CPF invalid', () => {
    it('Return false 11111111111', () => {
      expect(validator.cpfValidator('11111111111')).to.equal(false);
    });
    it('Return false 03090575662', () => {
      expect(validator.cpfValidator('03090575662')).to.equal(false);
    });
    it('Return false 12345678912', () => {
      expect(validator.cpfValidator('12345678912')).to.equal(false);
    });
    it('Return false aaa.456.789-12', () => {
      expect(validator.cpfValidator('aaa.456.789-12')).to.equal(false);
    });
    it('Return false 4421804983', () => {
      expect(validator.cpfValidator('4421804983')).to.equal(false);
    });
    it('Return false para 442180498333', () => {
      expect(validator.cpfValidator('442180498333')).to.equal(false);
  });
});
