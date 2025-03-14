import axios from "axios"

const API_URL = 'https://dummyjson.com/products'

export const getProductsData = async () => {
  const { data: response } = await axios.get(API_URL)

  return response ? response.products : []
}
