import { getData, getDeads, getAlive, getFemale, getMale } from './data.js';
import {tarjetas} from './template/cards.js';
import data from './data/rickandmorty/rickandmorty.js';

//Variables.
const cards = document.querySelector(".cards");
const btnTodos = document.getElementById("todos");
const btnMale = document.getElementById("hombre");
const btnFemale = document.getElementById("mujer");
const btnAlive = document.getElementById("vivos");
const btnDead = document.getElementById("muertos");
const busqueda = document.querySelector(".busqueda")

//Retorna el resultado de la fx de tarjetas, para realizarla
getData(data).forEach(personaje => {
  cards.insertAdjacentHTML("beforeend", tarjetas(personaje))
})
//Creo un evento para volver a ver las tarjetas de todos los personajes
btnTodos.addEventListener("click", () => {
   cards.innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resulTodos = getData(data);
  resulTodos.forEach(personaje => {
    cards.insertAdjacentHTML("beforeend", tarjetas(personaje));
  })
})
// Creo un evento que al realizar click se muestres los personajes filtrados por gender"Male"
btnMale.addEventListener("click", () => {
   cards.innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultMale = getMale(data);
  resultMale.forEach(personajeMale => {
    cards.insertAdjacentHTML("beforeend", tarjetas(personajeMale));
  })
})
// Creo un evento que al realizar click se muestres los personajes filtrados por gender "Female"
btnFemale.addEventListener("click", () => {
  cards.innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultFemale = getFemale(data);
  resultFemale.forEach(personajeFemale => {
    cards.insertAdjacentHTML("beforeend", tarjetas(personajeFemale));
  })
})
// Creo un evento que al realizar click se muestres los personajes filtrados por gender "Alive"
btnAlive.addEventListener("click", () => {
  cards.innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultAlive = getAlive(data);
  resultAlive.forEach(personajeAlive => {
    cards.insertAdjacentHTML("beforeend", tarjetas(personajeAlive));
  })
})

//Creo un evento al realizar click en el enlace y filtro los personajes por status "Dead" 
btnDead.addEventListener("click", () => {
 cards.innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultDead = getDeads(data);
  resultDead.forEach(personajeDead => {
    cards.insertAdjacentHTML("beforeend", tarjetas(personajeDead));
  })
})

//Busqueda de personjaes le agrego evento al input con keyup
busqueda.addEventListener("keyup", () => {
  //busqueda de personaje con indexOf
  const busqueda = document.querySelector(".busqueda")
  let textoBusqueda = busqueda.value.toLowerCase();
  cards.innerHTML = "";
  for (let nombre of getData(data)) {
    let nombrePersonaje = nombre.name.toLowerCase();
    if (nombrePersonaje.indexOf(textoBusqueda) != -1) {
        cards.insertAdjacentHTML("beforeend", tarjetas(nombre));

    }
  }
});

 console.log(getData(data).sort(function(a,b){
 if(a.name < b.name){
 return -1}}))
