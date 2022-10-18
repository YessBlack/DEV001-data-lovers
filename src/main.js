import { getData, getDeads, getAlive, getFemale, getMale } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

//Colocar las imagenes de los personajes en HTML
const cards = document.querySelector(".cards");
const btnTodos = document.getElementById("todos");
const btnMale = document.getElementById("hombre");
const btnFemale = document.getElementById("mujer");
const btnAlive = document.getElementById("vivos");
const btnDead = document.getElementById("muertos");
const busqueda = document.querySelector(".busqueda")

//Retorna el resultado de la fc de tarjetas, para realizarla
getData(data).forEach(personaje => {
  const tarjetas = (personaje) => {
    const tarjeta =
      ` <article class="card">
    <header class="header-card">
      <img src="${personaje.image}">
    </header>
    <div class="card-body spacing">
     <p>${personaje.species}</p>
      <p>${personaje.name}</p>
      <p>${personaje.status}</p>
    </div>
  </article>`
    return (tarjeta);
  }
  cards.insertAdjacentHTML("beforeend", tarjetas(personaje))
})
//Creo un evento para volver a ver las tarjetas de todos los personajes
btnTodos.addEventListener("click", (e) => {
  e.preventDefault();
  const tarjetas = (personaje) => {
    const tarjeta =
      ` <article class="card">
    <header class="header-card">
      <img src="${personaje.image}">
    </header>
    <div class="card-body spacing">
     <p>${personaje.species}</p>
      <p>${personaje.name}</p>
      <p>${personaje.status}</p>
    </div>
  </article>`
    return (tarjeta);
  }
  cards.innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resulTodos = getData(data);
  resulTodos.forEach(personaje => {
    cards.insertAdjacentHTML("beforeend", tarjetas(personaje));
  })
})
// Creo un evento que al realizar click se muestres los personajes filtrados por gender"Male"
btnMale.addEventListener("click", (e) => {
  e.preventDefault();
  const tarjetasMale = (personajeMale) => {
    const tarjetaMale =
      ` <article class="card">
    <header class="header-card">
      <img src="${personajeMale.image}">
    </header>
    <div class="card-body spacing">
     <p>${personajeMale.species}</p>
      <p>${personajeMale.name}</p>
      <p>${personajeMale.status}</p>
    </div>
  </article>`
    return (tarjetaMale);
  }
  cards.innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultMale = getMale(data);
  resultMale.forEach(personajeMale => {
    cards.insertAdjacentHTML("beforeend", tarjetasMale(personajeMale));
  })
})
// Creo un evento que al realizar click se muestres los personajes filtrados por gender "Female"
btnFemale.addEventListener("click", (e) => {
  e.preventDefault();
  const tarjetasFemale = (personajeFemale) => {
    const tarjetaFemale =
      ` <article class="card">
    <header class="header-card">
      <img src="${personajeFemale.image}">
    </header>
    <div class="card-body spacing">
     <p>${personajeFemale.species}</p>
      <p>${personajeFemale.name}</p>
      <p>${personajeFemale.status}</p>
    </div>
  </article>`
    return (tarjetaFemale);
  }
  cards.innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultFemale = getFemale(data);
  resultFemale.forEach(personajeFemale => {
    cards.insertAdjacentHTML("beforeend", tarjetasFemale(personajeFemale));
  })
})


// Creo un evento que al realizar click se muestres los personajes filtrados por status "Alive"
btnAlive.addEventListener("click", (e) => {
  e.preventDefault();
  const tarjetasAlive = (personajeAlive) => {
    const tarjetaAlive =
      ` <article class="card">
    <header class="header-card">
      <img src="${personajeAlive.image}">
    </header>
    <div class="card-body spacing">
     <p>${personajeAlive.species}</p>
      <p>${personajeAlive.name}</p>
      <p>${personajeAlive.status}</p>
    </div>
  </article>`
    return (tarjetaAlive);
  }
  cards.innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultAlive = getAlive(data);
  resultAlive.forEach(personajeAlive => {
    cards.insertAdjacentHTML("beforeend", tarjetasAlive(personajeAlive));
  })
})


//Creo un evento al realizar click en el enlace y filtro los personajes por status "Dead" 
btnDead.addEventListener("click", (e) => {
  e.preventDefault();
  //Funcion para filtras los personajes por status "Dead"
  const tarjetasDead = (personajeDead) => {
    const tarjetaDead =
      ` <article class="card">
  <header class="header-card">
    <img src="${personajeDead.image}">
  </header>
  <div class="card-body spacing">
   <p>${personajeDead.species}</p>
    <p>${personajeDead.name}</p>
    <p>${personajeDead.status}</p>
  </div>
</article>`
    return (tarjetaDead);
  }
  cards.innerHTML = "";
  //Coloco los personajes en las tarjetas
  const resultDead = getDeads(data);
  resultDead.forEach(personajeDead => {
    cards.insertAdjacentHTML("beforeend", tarjetasDead(personajeDead));
  })
})

//Busqueda de personjaes le agrego evento al input con keyup
busqueda.addEventListener("keyup", (e) => {
  e.preventDefault();
  //busqueda de personaje con indexOf
  const busqueda = document.querySelector(".busqueda")
  let textoBusqueda = busqueda.value.toLowerCase();
  cards.innerHTML = "";
      for (let nombre of getData(data)) {
      let nombrePersonaje = nombre.name.toLowerCase();
      if (nombrePersonaje.indexOf(textoBusqueda) != -1) {
        console.log(nombrePersonaje);
const busquedaPersonajes=
             ` <article class="card">
          <header class="header-card">
            <img src="${nombre.image}">
          </header>
          <div class="card-body spacing">
           <p>${nombre.species}</p>
            <p>${nombre.name}</p>
            <p>${nombre.status}</p>
          </div>
        </article>`
         
        
        //Coloco los personajes en las tarjetas
        // const resultAlive = getAlive(data);
        // resultAlive.forEach(personajeAlive => {
          cards.insertAdjacentHTML("beforeend", busquedaPersonajes);
        // })
      }
      }});
