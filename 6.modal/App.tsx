import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Button title="Modal Aç" onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} animationType="slide">
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20, marginBottom: 20}}>Modal açıldı</Text>

        <AntDesign name="close-square" size={30} color="orange" />

        <Button title="Modal Kapat" onPress={() => setModalVisible(false)} />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
