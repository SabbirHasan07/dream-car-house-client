export const getAllHomes = async email => {
    const url = `${process.env.REACT_APP_API_URL}/allproduc`
  
    const response = await fetch(url)
  
    const data = await response.json()
  
    return data
  }
  //get all cetagories




