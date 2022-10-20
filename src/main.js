import { getData, getDeads, getAlive, getFemale, getMale,ascendente, descendente } from './data.js';
import {tarjetas} from './template/cards.js';
import data from './data/rickandmorty/rickandmorty.js';

//Variable que me sirve para cualquier selector del DOM
const $=(selector)=>document.querySelector(selector);

//Función para que el menu se abra y se cierre al darle Click

$('.menu_filtros').addEventListener("click",()=>{
$('.menu_setting').classList.toggle('inactive');})

$('.menu_setting').addEventListener("click",()=>{
$('.menu_setting').classList.toggle('inactive');})

//Retorna el resultado de la fx de tarjetas, para realizarla
getData(data).forEach(personaje => {
  $('.cards').insertAdjacentHTML("beforeend", tarjetas(personaje))
})

//Creo un evento para volver a ver las tarjetas de todos los personajes
$('#todos').addEventListener("click", () => {
  $('.cards').innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resulTodos = getData(data);
  resulTodos.forEach(personaje => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personaje));
  })
})

// Creo un evento que al realizar click se muestres los personajes filtrados por gender"Male"
$('#hombre').addEventListener("click", () => {
  $('.cards').innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultMale = getMale(data);
  resultMale.forEach(personajeMale => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personajeMale));
  })
})

// Creo un evento que al realizar click se muestres los personajes filtrados por gender "Female"
$('#mujer').addEventListener("click", () => {
  $('.cards').innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultFemale = getFemale(data);
  resultFemale.forEach(personajeFemale => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personajeFemale));
  })
})

// Creo un evento que al realizar click se muestres los personajes filtrados por gender "Alive"
$('#vivos').addEventListener("click", () => {
  $('.cards').innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultAlive = getAlive(data);
  resultAlive.forEach(personajeAlive => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personajeAlive));
  })
})

//Creo un evento al realizar click en el enlace y filtro los personajes por status "Dead" 
$('#muertos').addEventListener("click", () => {
  $('.cards').innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultDead = getDeads(data);
  resultDead.forEach(personajeDead => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personajeDead));
  })
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
//Seleccionar como ordenar
$('.orden').addEventListener("change",()=>{
  const opcion= $('.orden').value;
if (opcion=="1"){
const resultA=ascendente(data);
$('.cards').innerHTML = "";
//Coloco los personajes en las tarjetas

resultA.forEach(personaje => {
$('.cards').insertAdjacentHTML("beforeend", tarjetas(personaje));
})
}
else{
  const ordenB=descendente(data);
  $('.cards').innerHTML = "";
//Coloco los personajes en las tarjetas
ordenB.forEach(personaje => {
$('.cards').insertAdjacentHTML("beforeend", tarjetas(personaje));
})
}
})


