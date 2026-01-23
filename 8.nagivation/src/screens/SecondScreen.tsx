import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const secondScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>İkinci Ekran</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("First");
        }}
      >
        <Text>Birinci Ekrana Git</Text>
      </TouchableOpacity>
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
