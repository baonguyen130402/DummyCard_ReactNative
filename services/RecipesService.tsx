import axios from "axios"

const API_URL = 'https://dummyjson.com/recipes'

export const getRecipesData = async () => {
  const { data: response } = await axios.get(API_URL)

  return response ? response.recipes : []
}
