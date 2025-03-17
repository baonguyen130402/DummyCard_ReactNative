import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

const API_URL = 'https://dummyjson.com/users'

export const getUsersData = async () => {
  const { data: response } = await axios.get(API_URL)
  await AsyncStorage.setItem('users', JSON.stringify(response.users))

  return  response ? response.users : []
}
