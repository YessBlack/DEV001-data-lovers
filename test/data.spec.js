import { getData, getDeads, getAlive,getMale, getFemale } from '../src/data.js';

import data from '../src/data/rickandmorty/rickandmorty.js';

describe('getData', () => {
  it('Debería ', () => {
    expect(typeof getData).toBe('function');
  });
  it('return `array`', () => {
    expect(getData(data)).toHaveLength(99);
  });
});
<<<<<<< HEAD
describe('getDeads', () => {
=======


describe('getDeads', () => {

>>>>>>> dcabe8dc6e29c9c89a960792e83a176ee0973835
  it('deberia ser una función', () => {
    expect(typeof getDeads).toBe('function');
  });
  it('Que getDeads(data) no tenga la palabra "Alive"', () => {
    const deads = getDeads(data);
    deads.forEach((dead) => {
      expect(dead.status).toEqual("Dead");
    })
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
describe('getAlive', () => {
  it('deberia ser una función', () => {
    expect(typeof getAlive).toBe('function');
  });
  it('Que getAlive(data) no sea igual a (data)', () => {
    const alives = getAlive(data);
    alives.forEach((alive) => {
      expect(alive.status).toEqual("Alive");
    })
  });
});
describe('getMale', () => {
  it('deberia ser una función', () => {
    expect(typeof getMale).toBe('function');
  });
  it('Que getMale(data) no sea igual a (data)', () => {
    const males = getMale(data);
    males.forEach((male) => {
      expect(male.gender).toEqual("Male");
    })
  });
});
describe('getFemale', () => {
  it('deberia ser una función', () => {
    expect(typeof getFemale).toBe('function');
  });
  it('Que getFemale(data) no sea igual a (data)', () => {
    const females = getFemale(data);
    females.forEach((female) => {
      expect(female.gender).toEqual("Female");
    })
  });
});
