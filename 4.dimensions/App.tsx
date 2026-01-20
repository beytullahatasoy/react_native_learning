import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function App() {

  console.log(Dimensions.get('screen'));

  const phoneWidth = Dimensions.get('screen').width;
  const phoneHeight = Dimensions.get('screen').height;

  return (
    <View style={styles.container}>
      <View
        style={{
          width: phoneWidth / 2,
          height: phoneHeight / 2,
          backgroundColor: 'orange',
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'},
});
