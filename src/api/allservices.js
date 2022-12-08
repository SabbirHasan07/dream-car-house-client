export const getAllHomes = async email => {
    const url = `https://server-nine-mocha.vercel.app/allproduc`
  
    const response = await fetch(url)
  
    const data = await response.json()
  
    return data
  }
  //get all cetagories




