//import { tarjetas } from  './data.js';

 import data from './data/rickandmorty/rickandmorty.js';
 
 //Colocar las imagenes de los personajes en HTML
 const cards= document.querySelector(".cards");

 //Retorna el resultado de la fc de tarjetas, para realizarla
 data.results.forEach(personaje => {
  const tarjetas = (personaje) =>{
    const tarjeta=` <article class="card">
    <header class="header-card">
      <img src="${personaje.image}">
    </header>
    <div class="card-body spacing">
     <p>${personaje.species}</p>
      <p>${personaje.name}</p>
      <p>${personaje.status}</p>
    </div>
  </article>`
   return(tarjeta);
  }
   cards.insertAdjacentHTML("beforeend",tarjetas(personaje))
 })
 
 