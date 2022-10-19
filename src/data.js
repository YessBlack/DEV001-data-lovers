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

//Funcion para obtener los personajes de la data filtrados por gender "Female"
export const getFemale =(data) => {
  const dataFemale = getData(data).filter( e => e.gender == "Female")
  return dataFemale
}



