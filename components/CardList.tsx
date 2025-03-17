import React, { useEffect, useState } from 'react'

import { View, ScrollView, StyleSheet, TextInput, Modal, Text, ActivityIndicator, TouchableOpacity, Button } from 'react-native'
import Card from './Card'
import CardDetail from './CardDetail'
import RenderIf from '@/helper/renderIf'

type CardListProps = {
  type: string,
  data: any[],
  loading: boolean,
  error: string
}

export default function CardList(props: CardListProps) {
  const { data, type, loading, error } = props
  const [query, onChangeQuery] = useState('')
  const [renderData, setRenderData] = useState(data)
  const [cardId, setCardId] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);

  const handleQuery = (query: string) => {
    const filteredData = [data.find((item) => item?.name?.includes(query))]

    if (filteredData) {
      setRenderData(filteredData)
    }
  }

  useEffect(() => {
    if (query) {
      handleQuery(query)
    } else setRenderData(data)
  }, [query, data])

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const listCards = renderData?.map(data => (
    <Card
      key={data?.id}
      name={data?.name}
      phoneNumber={data?.phoneNumber}
      address={data?.address?.address}
      title={data?.title}
      price={data?.price}
      shippingInformation={data?.shippingInformation}
      image={data?.image}
      cuisine={data?.cuisine}
      difficulty={data?.difficulty}
      cardId={data?.id}
      getCardId={setCardId}
      openModal={openModal}
    />
  ))

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <TextInput
          style={styles.inputSearch}
          onChangeText={query => onChangeQuery(query)}
          placeholder='Search...' />
        <RenderIf isTrue={modalVisible}>
          <CardDetail cardId={cardId} data={data} type={type} closeModal={closeModal} />
        </RenderIf>
        {loading ? (
          <View style={{ width: '100%', height: '800%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color='#0000ff' />
          </View>
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : listCards}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  inputSearch: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 12
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  userInfo: {
    width: '100%',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    marginTop: 16
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
