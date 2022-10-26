
import { getData, getDeads, getAlive,getMale, getFemale,getUnknow,ascendente,descendente } from '../src/data.js';
import data from '../src/data/rickandmorty/rickandmorty.js';

describe('getData', () => {
  it('Debería ser una funcion', () => {
    expect(typeof getData).toBe('function');
  });

  it('return `array`', () => {
    expect(getData(data)).toHaveLength(129);
  });
});

describe('getDeads', () => {

  it('deberia ser una función', () => {
    expect(typeof getDeads).toBe('function');
  });

  it('Que getDeads(data) no tenga la palabra "Alive"', () => {
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
describe('getUnknow', () => {
  it('deberia ser una función', () => {
    expect(typeof getUnknow).toBe('function');
  });

  it('Que getUnknow(data) debería retornar un arreglo donde el gender=="unknown"', () => {
    const unknows = getUnknow(data);
    unknows.forEach((unknow) => {
      expect(unknow.gender).toEqual("unknown");
    })
  });

});
 describe('ascendente',()=>{
  it('Debería ser una función', ()=>{
    expect(typeof ascendente).toBe('function');
  });
});

it('Que ascendete(data) retorne el array ordenado de la A-Z', ()=>{
  const arrAesc=getData(data).sort(((a,b)=>{
    if(a.name<b.name){
      return -1 }
      }));
  expect(ascendente(getData(data))).toStrictEqual(arrAesc)
});

describe ('descendente',()=>{
  it('Debería ser una función', ()=>{
    expect(typeof descendente).toBe('function');
  });
});

it('Que descendente(data) retorne el array ordenado de la Z-A', ()=>{
  const arrDesc=getData(data).sort(((a,b)=>{
    if(a.name>b.name){
      return -1 }
      }));
  expect(descendente(getData(data))).toStrictEqual(arrDesc)
});
