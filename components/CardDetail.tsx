import { useEffect, useState } from "react"
import { ActivityIndicator, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])

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
          ) : detailData ? (
            <View style={styles.detailInfo}>
              <Text>Name: {detailData?.name}</Text>
              <Text>Email: {detailData?.email}</Text>
              <Text>Age: {detailData?.age}</Text>
              <Text>Gender: {detailData?.gender}</Text>
              <Text>Phone Number: {detailData?.phoneNumber}</Text>
              <Text>Address: {detailData?.address?.address}, {detailData?.address?.country}</Text>
            </View>
          ) : null}

          {/* Close button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={closeModal}
          >
            <Text style={styles.closeButtonText}>Đóng</Text>
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
