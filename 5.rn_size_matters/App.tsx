import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        width: scale(250), // scale yerine s yazabilrsin
        height: verticalScale(250), // verticalScale yerine vs yazabilrsin
        backgroundColor: 'orange' }}>
      </View>
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
