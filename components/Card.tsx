import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

type CardProps = {
  cardId: number,
  name: string,
  phoneNumber: string,
  address: string,
  title: string,
  price: number,
  shippingInformation: string,
  image: string[],
  cuisine: string,
  difficulty: string,
  getCardId: Dispatch<SetStateAction<number>>,
  openModal: () => void
}

export default function Card(props: CardProps) {
  const {
    name = '',
    phoneNumber = '',
    address = '',
    title = '',
    price = 0,
    shippingInformation = '',
    image = '',
    cuisine = '',
    difficulty = '',
    cardId,
    getCardId,
    openModal
  } = props

  const handlePress = () => {
    getCardId(cardId)
    openModal()
  }

  return (
    <TouchableOpacity key={name || title} onPress={handlePress} style={[styles.card, { backgroundColor: '#ffffff' }]}>
      <View style={{
        width: 120,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 25,
        alignSelf: 'center',
        marginRight: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
      >
        <Image
          style={styles.avatar}
          source={{ uri: image }}
        />
      </View>
      <View style={styles.cardDesc}>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.name}>
          {phoneNumber || price || cuisine}
        </Text>
        <Text style={styles.name}>
          {address || shippingInformation || difficulty}
        </Text>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.name}>
          {phoneNumber || price || cuisine}
        </Text>
        <Text style={styles.name}>
          {address || shippingInformation || difficulty}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 12,
    height: 150,
    borderRadius: 25,
    borderCurve: 'continuous',
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1
  },

  cardDesc: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  avatar: {
    width: 120,
    height: 120,
  },

  name: {
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center',
    color: '#000000',
    textOverflow: 'ellipsis',
    wordWrap: 'nowrap'
  }
})
