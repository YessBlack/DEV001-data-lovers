import { tarjetas } from  './data.js';

 import data from './data/rickandmorty/rickandmorty.js';
 
 //Colocar las imagenes de los personajes en HTML
 const cards= document.querySelector(".cards");

 //Retorna el resultado de la fc de tarjetas, para realizarla
 data.results.forEach(personaje => {
   cards.insertAdjacentHTML("beforeend",tarjetas(personaje))
 })

const newArray= (razaHumana => {
  data.results.species.filter(species.length >6)
  console.log(razaHumana)
  newArray=razaHumana.value;
console.log(newArray);

})
