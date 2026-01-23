import { StyleSheet, Text, View } from "react-native";
import React from "react";

const thirdScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Üçüncü Ekran</Text>
    </View>
  );
};

export default thirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#da6019",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
