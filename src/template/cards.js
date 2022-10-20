<<<<<<< HEAD
export const tarjetas = (personaje) => {
    const tarjeta =
      ` <article class="card">
    <header class="header-card">
      <img src="${personaje.image}">
    </header>
    <div class="card-body spacing">
     <p class="title-card"> ${personaje.name}  </p>
      <p>${personaje.species} </p>
      <p> ${personaje.status}</p>
    </div>
  </article>`
    return (tarjeta);
  }
 
=======
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
>>>>>>> dcabe8dc6e29c9c89a960792e83a176ee0973835
