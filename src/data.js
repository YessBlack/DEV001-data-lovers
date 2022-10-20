//Filtro para reducir el array
export const getData = (data) => {
   const dataReduce = data.results.slice(1,100)
   return dataReduce
}
//Filtrar personajes muertos
export const getDeads =(data) => {
  const arrayDeads = getData(data).filter(e=>e.status=="Dead");
  return arrayDeads
}

//Filtrar personajes vivos
export const getAlive=(data)=>{
  const arrayAlive= getData(data).filter(e=>e.status=="Alive");
  return arrayAlive
}
//Filtrat los personajes Femeninos
export const getFemale=(data)=>{
  const arrayFemale= getData(data).filter(e=>e.gender=="Female");
  return arrayFemale
}
//Filtrar los personajes Masculinos
export const getMale=(data)=>{
  const arrayMale= getData(data).filter(e=>e.gender=="Male");
  return arrayMale
}
// //Ordenar los personajes de la A-Z sin filtro
export const ascendente=(data,opcion)=>{
  if(opcion=="1" && $('#muertos')){
  let a=getDeads(data).sort(function(a,b){
    if(a.name < b.name){
          return -1}
    })
    if(opcion=="1" && $('#vivos')){
      let a=getAlive(data).sort(function(a,b){
        if(a.name < b.name){
               return -1}
        })
    return a
}}}
// Ordenar los personajes de a Z-A sin filtro
export const descendente=(data,opcion)=>{
  if(opcion=="2" && $('#muertos')){
    let a=getDeads(data).sort(function(a,b){
      if(a.name > b.name){
        
      return -1}
      })
      if(opcion=="2" && $('#vivos')){
        let a=getAlive(data).sort(function(a,b){
          if(a.name < b.name){
                     return -1}
          })}}}