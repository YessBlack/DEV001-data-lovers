import { getData, getDeads, getAlive,getMale, getFemale,ascendente,descendente } from '../src/data.js';

import data from '../src/data/rickandmorty/rickandmorty.js';

describe('getData', () => {
  it('Debería ser una funcion', () => {
    expect(typeof getData).toBe('function');
  });

  it('Deberia retornar un array con 100 personajes ', () => {
    expect(getData(data)).toHaveLength(129);
  });
});


describe('getDeads', () => {

  it('deberia ser una función', () => {
    expect(typeof getDeads).toBe('function');
  });

  it('Deberia retornar un array donde status==dead', () => {
    const deads = getDeads(data);
    deads.forEach((dead) => {
      expect(dead.status).toEqual("Dead");
    })

  });

});

describe('getAlive', () => {
  it('deberia ser una función', () => {
    expect(typeof getAlive).toBe('function');
  });

  it('Deberia retornar un array donde status==alive', () => {
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

  it('Deberia retornar un array donde gender==male', () => {
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

  it('Deberia retornar un array donde gender==female', () => {
    const females = getFemale(data);
    females.forEach((female) => {
      expect(female.gender).toEqual("Female");
    })
  });

});

describe('ascendente', () => {
  it('deberia ser una función', () => {
    expect(typeof ascendente).toBe('function');
  });

  it('Que ascendete(data) retorne el array ordenado de la A-Z', ()=>{
    const arrAsc = getData(data).sort((a,b) => {
      if(a.name<b.name) {
        return -1
      }
    })
    expect(ascendente(getData(data))).toStrictEqual(arrAsc)
  });
});

describe('descendente', () => {
  it('deberia ser una función', () => {
    expect(typeof ascendente).toBe('function');
  });

  it('Que ascendete(data) retorne un array ordenado de la Z-A', ()=>{
    const arrDes = getData(data).sort((a,b) => {
      if(a.name > b.name) {
        return -1
      }
    })
    expect(descendente(getData(data))).toStrictEqual(arrDes)
  });
});
