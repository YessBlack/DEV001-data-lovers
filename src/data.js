
export  const tarjetas = (personaje) =>{
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

export const anotherExample = () => {
  return 'OMG';
};
