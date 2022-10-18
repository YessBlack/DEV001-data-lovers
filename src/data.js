export const getData = (data) => {
  const dataReduce = data.results.slice(1,100)
  return dataReduce
}

export const getDeads =(data) => {
  const dataDeads = getData(data).filter( e => e.status=="Dead")
  return dataDeads
}

export const getAlive =(data) => {
  const dataAlive = getData(data).filter( e => e.status=="Alive")
  return dataAlive
}

export const getMale =(data) => {
  const dataMale = getData(data).filter( e => e.gender == "Male")
  return dataMale
}

export const getFemale =(data) => {
  const dataFemale = getData(data).filter( e => e.gender == "Female")
  return dataFemale
}


