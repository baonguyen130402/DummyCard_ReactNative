import CardList from '@/components/CardList';
import { MESSAGE } from '@/constants/message';
import { getRecipesData } from '@/services/RecipesService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function RecipesScreen() {
  const [recipes, setRecipes] = useState([{}])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const d = [] as any[]

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)

        const dataStorage = await AsyncStorage.getItem('recipes')
        const recipesStorage = JSON.parse(dataStorage || '')

        const data = recipesStorage ? recipesStorage : await getRecipesData()

        data.forEach((recipe: any) => {
          d.push({
            id: recipe.id,
            name: recipe.name,
            cuisine: recipe.cuisine,
            difficulty: recipe.difficulty,
            prepTimeMinutes: recipe.prepTimeMinutes,
            cookTimeMinutes: recipe.cookTimeMinutes,
            servings: recipe.servings,
            caloriesPerServing: recipe.caloriesPerServing,
            image: recipe.image
          })
        })
        setRecipes(d)
      } catch(err) {
        setError(MESSAGE.ERROR)
        console.error(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return <CardList data={recipes} loading={loading} error={error} type='Recipe' />;
}
