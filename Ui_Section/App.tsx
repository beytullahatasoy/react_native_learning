import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baslik}>Selamlar</Text>
      <Text style={styles.altbaslik}>Bu bir test metnidir.</Text>
      <Text style={styles.anametin}>Şuan da </Text>
      <Text style={styles.anametin}>
        <Text style={styles.koyu}>React Native</Text> ile uygulama geliştiriyorum.
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#646464',

  },
  baslik: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#9d3131',
  },
  altbaslik: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: '#73aa73',
  },
  anametin: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color: '#fdf9f9',
  },
  koyu: {
    fontWeight: 'bold',
    color: '#693ac6',
    textDecorationLine: 'underline',
  },   
});
