import { getData, getDeads, getAlive, getFemale, getMale } from './data.js';
import { tarjetas } from './template/cards.js';
import data from './data/rickandmorty/rickandmorty.js';

const $ = (selector) => document.querySelector(selector);

//Ocultar y Mostrar Menu
const showHideMenu = () => {
  setTimeout(() => {
    $('.menu_setting').classList.toggle('inactive');
  }, 500);
}

$('.menu-filtro').addEventListener('click', e => {
  e.preventDefault()
  $('.menu_setting').classList.toggle('active');
  $('.menu_setting').classList.toggle('inactive');
})

//Retorna el resultado de la fx de tarjetas, para realizarla
getData(data).forEach(personaje => {
  $('.cards').insertAdjacentHTML("beforeend", tarjetas(personaje))
})

//Evento para volver a ver las tarjetas de todos los personajes
$('#todos').addEventListener("click", () => {
  $('.cards').innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resulTodos = getData(data);
  resulTodos.forEach(personaje => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personaje));
  })
  showHideMenu()
})

// Evento que al realizar click se muestres los personajes filtrados por gender"Male"
$('#hombre').addEventListener("click", () => {
  $('.cards').innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultMale = getMale(data);
  resultMale.forEach(personajeMale => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personajeMale));
  })
  showHideMenu()
})

// Evento que al realizar click se muestres los personajes filtrados por gender "Female"
$('#mujer').addEventListener("click", () => {
  $('.cards').innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultFemale = getFemale(data);
  resultFemale.forEach(personajeFemale => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personajeFemale));
  })
  showHideMenu()
})

// Creo un evento que al realizar click se muestres los personajes filtrados por gender "Alive"
$('#vivos').addEventListener("click", () => {
  $('.cards').innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultAlive = getAlive(data);
  resultAlive.forEach(personajeAlive => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personajeAlive));
  })
  showHideMenu()
})

//Creo un evento al realizar click en el enlace y filtro los personajes por status "Dead"
$('#muertos').addEventListener("click", () => {
  $('.cards').innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultDead = getDeads(data);
  resultDead.forEach(personajeDead => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personajeDead));
  })
  showHideMenu()
})

//Busqueda de personjaes le agrego evento al input con keyup
$('.busqueda').addEventListener("keyup", () => {
  //busqueda de personaje con indexOf
  const busqueda = document.querySelector(".busqueda")
  let textoBusqueda = busqueda.value.toLowerCase();
  $('.cards').innerHTML = "";
  for (let nombre of getData(data)) {
    let nombrePersonaje = nombre.name.toLowerCase();
    if (nombrePersonaje.indexOf(textoBusqueda) != -1) {
      $('.cards').insertAdjacentHTML("beforeend", tarjetas(nombre));

    }
  }
});

/*
 console.log(getData(data).sort(function(a,b){
 if(a.name < b.name){
 return -1}}))
*/
