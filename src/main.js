//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import { tarjetas } from './template/Card.js';
import data from './data/rickandmorty/rickandmorty.js';

//Funcion para selectores
const $ = (selector) => document.querySelector(selector)

//Template

//Retorna el resultado de la fc de tarjetas, para realizarla

 //Retorna el resultado de la fc de tarjetas, para realizarla
 data.results.forEach(personaje => {
   $('.cards').insertAdjacentHTML("beforeend",tarjetas(personaje))
 })


