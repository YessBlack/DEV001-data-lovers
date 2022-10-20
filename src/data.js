//Funcion para obtener los personajes de la data
export const getData = (data) => {
  const dataReduce = data.results.slice(1,100)
  return dataReduce
}

//Funcion para obtener los personajes de la data filtrados por status "Dead"
export const getDeads =(data) => {
  const dataDeads = getData(data).filter( e => e.status=="Dead")
  return dataDeads
}

//Funcion para obtener los personajes de la data filtrados por status "Alive"
export const getAlive =(data) => {
  const dataAlive = getData(data).filter( e => e.status=="Alive")
  return dataAlive
}

//Funcion para obtener los personajes de la data filtrados por gender "Male"
export const getMale =(data) => {
  const dataMale = getData(data).filter( e => e.gender == "Male")
  return dataMale
}
<<<<<<< HEAD
// //Ordenar los personajes de la A-Z sin filtro
export const ascendente=(data)=>{
  const a=getData(data).sort(function(a,b){
    if(a.name < b.name){
    return -1}
    })
    return a
}
//Ordenar los personajes de a Z-A sin filtro
export const descendente=(data)=>{
  const b=getData(data).sort(function(a,b){
    if(a.name>b.name){
      return -1
    }
  }
  )
  return b
}
=======

//Funcion para obtener los personajes de la data filtrados por gender "Female"
export const getFemale =(data) => {
  const dataFemale = getData(data).filter( e => e.gender == "Female")
  return dataFemale
}



>>>>>>> dcabe8dc6e29c9c89a960792e83a176ee0973835
