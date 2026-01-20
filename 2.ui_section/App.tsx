import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, Pressable, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {

  const mesajGoster = () => {
    alert("Butona tıklandı!");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <Image source={require('./assets/icon.png')} style={styles.img} />
        <Image source={{uri: 'https://cdn.pixabay.com/photo/2025/12/28/13/04/giant-panda-10039235_1280.jpg'}} style={styles.img} />
        <StatusBar style="auto" />
        <Text style={styles.text}>Selamlar</Text>

        <Button title= "Tıkla" onPress={mesajGoster} />
        <Button title= "Tıkla" onPress={mesajGoster} disabled/>

        <Pressable onPress={() => console.log("Buton tıklandı!")}> 
          <Text style={styles.text}>Test</Text>
        </Pressable>

        <Pressable onPress={() => console.log("Resim buton tıklandı!")}> 
          <Image source={require('./assets/icon.png')} style={styles.img} />
        </Pressable>

        <Pressable onPress={() => console.log("Animasyonlu Resim buton tıklandı!")}> 
          <Image source={require('./assets/icon.png')} style={styles.img} />
        </Pressable>

        <ActivityIndicator />
        <ActivityIndicator size={"large"}/>
        <ActivityIndicator size={"large"} color={"red"}/>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#646464',

  },
  img: {
    width: 200,
    height: 200
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    color: '#ffffff'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ff0000',
    color: '#00ff00'
  }
});
