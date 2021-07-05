// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

let card = new validator();

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof card).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof card.isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      card = new validator('4083952015263');
      expect(card.isValid().valid).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      card = new validator('79927398713');
      expect(card.isValid().valid).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      card = new validator('1234567890');
      expect(card.isValid().valid).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof card.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      card = new validator('4556364607935616');
      expect(card.maskify().cNumberFinalScreen).toBe('############ 5616');
    });

    it('Debería retornar "1" para "1"', () => {
      card = new validator('1');
      expect(card.maskify().cNumberFinalScreen).toBe(' 1');
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      card = new validator('helloworld');
      expect(card.maskify().cNumberFinalScreen).toBe('###### orld');
    });
  });
});
