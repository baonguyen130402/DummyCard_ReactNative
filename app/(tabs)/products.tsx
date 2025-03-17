import { useEffect, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import CardList from '@/components/CardList';
import { MESSAGE } from '@/constants/message';
import { getProductsData } from '@/services/ProductsService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductsScreen() {
  const [products, setProducts] = useState([{}])
  const d = [] as any[]
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)

        const dataStorage = await AsyncStorage.getItem('products')
        const productsStorage = JSON.parse(dataStorage || '')

        const data = productsStorage ? productsStorage : await getProductsData()

        data.forEach((product: any) => {
          d.push({
            id: product.id,
            name: product.title,
            price: product.price,
            discountPercentage: product.discountPercentage,
            brand: product.brand,
            stock: product.stock,
            shippingInformation: product.shippingInformation,
            image: product.images[0],
            title: 'Product'
          })
        })

        setProducts(d)
      } catch (err) {
        setError(MESSAGE.ERROR)
        console.error(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return <CardList data={products} loading={loading} error={error} type='Product' />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
