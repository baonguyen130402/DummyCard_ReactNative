import CardList from '@/components/CardList';
import { getProductsData } from '@/services/ProductsService';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProductsScreen() {
  const [products, setProducts] = useState([{}])
  const d = [] as any[]

  useEffect(() => {
    (async () => {
      const data = await getProductsData()

      data.forEach((product: any) => {
        d.push({
          id: product.id,
          name: product.title,
          price: product.price,
          shippingInformation: product.shippingInformation,
          image: product.images[0],
          title: 'Product'
        })
      })

      setProducts(d)
    })()
  }, [])

  return <CardList data={products} type='Product' />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
