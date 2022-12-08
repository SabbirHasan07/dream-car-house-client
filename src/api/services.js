export const addHome = async homeData => {
  const url = `https://server-nine-mocha.vercel.app/allproducts`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(homeData),
  })

  const data = await response.json()

  return data
}
