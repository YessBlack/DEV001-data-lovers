import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const $ = (selector) => document.querySelector(selector)
$('.btn-filtros').addEventListener('click', () => {
  $('.menu-lateral').classList.toggle('menu-lateral-activo')
})

console.log(example, data);
