import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

const API_URL = 'https://dummyjson.com/recipes'

export const getRecipesData = async () => {
  const { data: response } = await axios.get(API_URL)
  await AsyncStorage.setItem('recipes', JSON.stringify(response.recipes))

  return response ? response.recipes : []
}
