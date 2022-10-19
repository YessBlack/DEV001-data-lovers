import { getData, getDeads, getAlive,getMale, getFemale } from '../src/data.js';

import data from '../src/data/rickandmorty/rickandmorty.js';

describe('getData', () => {
  it('is a function', () => {
    expect(typeof getData).toBe('function');
  });

  it('return `array`', () => {
    expect(getData(data)).toHaveLength(99);
  });
});


describe('getDeads', () => {

  it('deberia ser una función', () => {
    expect(typeof getDeads).toBe('function');
  });

  it('Que getDeads(data) no sea igual a (data)', () => {
    expect(getDeads(data)).not.toBe(data);
  });

  it('Que getDeads(data) no tenga la palabra "Alive"', () => {
    expect(getDeads(data)).toEqual(expect.not.stringContaining("Mortys"));
  });

});

describe('getAlive', () => {
  it('deberia ser una función', () => {
    expect(typeof getAlive).toBe('function');
  });

  it('Que getAlive(data) no sea igual a (data)', () => {
    expect(getAlive(data)).not.toBe(data);
  });

});

describe('getMale', () => {

  it('deberia ser una función', () => {
    expect(typeof getMale).toBe('function');
  });

  it('Que getMale(data) no sea igual a (data)', () => {
    expect(getMale(data)).not.toBe(data);
  });

});
describe('getFemale', () => {
  it('deberia ser una función', () => {
    expect(typeof getFemale).toBe('function');
  });
  it('Que getFemale(data) no sea igual a (data)', () => {
    expect(getFemale(data)).not.toBe(data);
  });
});

describe('Deberia ser una función', () => {
  it('deberia ser una función', () => {
    expect(typeof getAlive).toBe('function');
  });

  it('Que getAlive(data) no sea igual a (data)', () => {
    expect(getAlive(data)).not.toBe(data);
  });
});
describe('Deberia ser una función', () => {
  it('deberia ser una función', () => {
    expect(typeof getMale).toBe('function');
  });

  it('Que getMale(data) no sea igual a (data)', () => {
    expect(getMale(data)).not.toBe(data);
  });
});
describe('Deberia ser una función', () => {
  it('deberia ser una función', () => {
    expect(typeof getFemale).toBe('function');
  });

  it('Que getFemale(data) no sea igual a (data)', () => {
    expect(getFemale(data)).not.toBe(data);
  });
});
