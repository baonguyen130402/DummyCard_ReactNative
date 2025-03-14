import axios from "axios"

const API_URL = 'https://dummyjson.com/users'

export const getUsersData = async () => {
  const { data: response } = await axios.get(API_URL)

  return response ? response.users : []
}

export const getUserById = async (userId: number) => {
  const { data: response } = await axios.get(`${API_URL}/${userId}`)

  return response ? response : []
}
