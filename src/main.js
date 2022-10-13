//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';
import { card }from './componentes/Tarjeta.js';

const $ = (selector) => document.querySelector(selector)
$('.btn-filtros').addEventListener('click', () => {
  $('.menu-lateral').classList.toggle('menu-lateral-activo')
})



data.results.forEach(personaje => {
  $('.cards').insertAdjacentHTML('beforeend',card(personaje))
})


