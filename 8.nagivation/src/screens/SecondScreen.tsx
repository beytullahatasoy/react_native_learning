import { StyleSheet, Text, View } from "react-native";
import React from "react";

const secondScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>İkinci Ekran</Text>
    </View>
  );
};

export default secondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9042c8",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
