import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const firstScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>İlk Ekran</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Third", { kimden: "Beytullah'tan geldik" });
        }}
      >
        <Text>üçüncü ekrana git</Text>
      </TouchableOpacity>
    </View>
  );
};

export default firstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b4bd38",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
