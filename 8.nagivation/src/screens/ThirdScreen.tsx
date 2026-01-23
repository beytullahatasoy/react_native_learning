import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { use } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const thirdScreen = () => {
  const navigation = useNavigation<any>();
  const { name, params } = useRoute<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Üçüncü Ekran</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Second");
        }}
      >
        <Text>İkinci Ekrana Git</Text>
        <Text>Ekran: {name}</Text>
        <Text>Kimden: {params.kimden}</Text>
      </TouchableOpacity>
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
