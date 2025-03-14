import CardList from '@/components/CardList';
import { getRecipesData } from '@/services/RecipesService';
import { useEffect, useState } from 'react';

export default function RecipesScreen() {
  const [recipes, setRecipes] = useState([{}])

  useEffect(() => {
    (async () => {
      const data = await getRecipesData()
      console.log(data)
      setRecipes(data)
    })()
  }, [])

  return <CardList data={recipes} type='Recipe' />;
}
