import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState("");

  return ( <ImageBackground 
  source={require('./assets/indir2.jpg')} 
  style={styles.container}>

  <TextInput style={styles.input}  
    placeholder="Enter text here" 
    keyboardType='numeric' 
    secureTextEntry multiline={false} 
    value={text}
    onChangeText={(text) => setText(text)}
  />

    <Text style={styles.text}>Yazılan değer: {text}</Text>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 5,
  },
});
