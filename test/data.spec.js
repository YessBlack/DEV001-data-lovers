
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

  it('Que getDeads(data) solo contenga status=="Dead"', () => {
    const deads = getDeads(data);
        expect(deads.map(e=>e.status)).toEqual(Array.from(deads,()=>'Dead'));
     });

  });

describe('getAlive', () => {
  it('deberia ser una función', () => {
    expect(typeof getAlive).toBe('function');
  });

  it('Que getAlive(data) que solo contenga status=="Alive"', () => {
    const alives = getAlive(data);
    expect(alives.map(e=>e.status)).toEqual(Array.from(alives,()=>'Alive'));
  });

});

describe('getMale', () => {

  it('deberia ser una función', () => {
    expect(typeof getMale).toBe('function');
  });

  it('Que getMale(data) contenga solo gender=="Male"', () => {
    const males = getMale(data);
    expect(males.map(e=>e.gender)).toEqual(Array.from(males,()=>'Male'));
  });
  });


describe('getFemale', () => {
  it('deberia ser una función', () => {
    expect(typeof getFemale).toBe('function');
  });

  it('Que getFemale(data) solo contenga gender=="Female', () => {
    const females = getFemale(data);
    expect(females.map(e=>e.gender)).toEqual(Array.from(females,()=>'Female'));
     });
  });

describe('getUnknow', () => {
  it('deberia ser una función', () => {
    expect(typeof getUnknow).toBe('function');
  });

  it('Que getUnknow(data) debería retornar un arreglo donde el gender=="unknown"', () => {
    const unknows = getUnknow(data);
    expect(unknows.map(e=>e.gender)).toEqual(Array.from(unknows,()=>'unknown'));
     });
  });
 describe ('ascendente',()=>{
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
})
