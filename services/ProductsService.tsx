import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

const API_URL = 'https://dummyjson.com/products'

export const getProductsData = async () => {
  const { data: response } = await axios.get(API_URL)
  await AsyncStorage.setItem('products', JSON.stringify(response.products))

  return response ? response.products : []
}
