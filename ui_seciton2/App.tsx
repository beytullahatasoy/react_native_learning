import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return ( <ImageBackground 
  source={require('./assets/indir.jpg')} 
  style={styles.container}>

    <Text style={styles.text}>Deneme</Text>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
  },
});
