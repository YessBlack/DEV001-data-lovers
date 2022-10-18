import data from './data/rickandmorty/rickandmorty.js';
import { tarjetas } from './template/Card.js';
import { getData, getDeads,getAlive,getMale,getFemale } from './data.js';

const $ = (selector) => document.querySelector(selector)

//Obtener 100 personajes
getData(data).forEach(personaje => {
  $('.cards').insertAdjacentHTML("beforeend", tarjetas(personaje))
})

//Obtener todos los personajes
$('#todos').addEventListener('click', () => {
  $('.cards').innerHTML = ''
  getData(data).forEach(personaje => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personaje))
  })
})

//Obtener personajes muertos
$('#muertos').addEventListener('click', () => {
  $('.cards').innerHTML = "";

  getDeads(data).forEach(personajeDead => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personajeDead))
  })
})

//Obtener personajes vivos
$('#vivos').addEventListener('click', () => {
  $('.cards').innerHTML = "";

  getAlive(data).forEach(personajeAlive => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personajeAlive))
  })
})

//Obtener personajes masculinos
$('#hombre').addEventListener('click', () => {
  $('.cards').innerHTML = "";

  getMale(data).forEach(personajeMale => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personajeMale))
  })
})

//Obtener personajes femeninos
$('#mujer').addEventListener('click', () => {
  $('.cards').innerHTML = "";

  getFemale(data).forEach(personajeFemale => {
    $('.cards').insertAdjacentHTML("beforeend", tarjetas(personajeFemale))
  })
})

//Obtener personajes por busqueda
$('.busqueda').addEventListener('keyup', () => {
  $('.cards').innerHTML = "";
  let busqueda = $('.busqueda').value.toLowerCase()
  getData(data).forEach(personaje => {
    if (personaje.name.toLowerCase().indexOf(busqueda) != -1) {
      $('.cards').insertAdjacentHTML("beforeend", tarjetas(personaje))
    }
  })
})
