import RenderIf from "@/helper/renderIf"
import { useEffect, useState } from "react"
import { ActivityIndicator, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"

type CardDetailProps = {
  data: any,
  type: string,
  cardId: number,
  closeModal: () => void
}

export default function CardDetail(props: CardDetailProps) {
  const { cardId, data, type, closeModal } = props
  const [loading, setLoading] = useState(true)
  const detailData = data[cardId - 1]

  console.log(data)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])

  const renderDetailInfo = (type: string) => {
    return (
      <View style={styles.detailInfo}>
        {detailData.image && (
          <Image
            source={{ uri: detailData.image }}
            style={styles.detailImage}
            resizeMode="contain"
          />
        )}
        <View style={{ alignSelf: 'flex-start', marginLeft: 16 }}>
          <Text style={[styles.detailTitle, { textAlign: 'left' }]}>{detailData.name}</Text>
          <RenderIf isTrue={type === 'User'}>
            <Text>Email: {detailData?.email}</Text>
            <Text>Age: {detailData?.age}</Text>
            <Text>Gender: {detailData?.gender}</Text>
            <Text>Phone Number: {detailData?.phoneNumber}</Text>
            <Text>Address: {detailData?.address?.address}, {detailData?.address?.country}</Text>
          </RenderIf>
          <RenderIf isTrue={type === 'Product'}>
            <Text>Price: {detailData?.price}$</Text>
            <Text>Discount: {detailData?.discountPercentage}%</Text>
            <Text>Brand: {detailData?.brand}</Text>
            <Text>Amount: {detailData?.stock}</Text>
            <Text>Des: {detailData?.shippingInformation}</Text>
          </RenderIf>
          <RenderIf isTrue={type === 'Recipe'}>
            <Text>Cuisine: {detailData.cuisine}</Text>
            <Text>Difficulty: {detailData.difficulty}</Text>
            <Text>Prep Minutes: {detailData.prepTimeMinutes} phút</Text>
            <Text>Cooking Time: {detailData.cookTimeMinutes} phút</Text>
            <Text>Serving: {detailData.servings}</Text>
            <Text>Calo: {detailData.caloriesPerServing} kcal</Text>
          </RenderIf>
        </View>
      </View>
    )
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={closeModal}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Title */}
          <Text style={styles.title}>{`${type}'s Detail`}</Text>

          {/* Render data */}
          {loading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : detailData ? renderDetailInfo(type) : null}

          {/* Close button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={closeModal}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
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
  detailInfo: {
    width: '100%',
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 8
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  detailImage: {
    width: 250,
    height: 250,
    marginBottom: 15,
  },

  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
})
