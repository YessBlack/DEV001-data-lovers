
export const tarjetas = (personaje) =>{
  const tarjeta =`
    <article class="card">
      <header class="header-card">
        <img src="${personaje.image}">
      </header>
      <div class="card-body spacing">
        <p class="title-card">${personaje.species}</p>
        <p class="name-character">${personaje.name}</p>
        <p>${personaje.status}</p>
      </div>
    </article>`
  return(tarjeta);
}

