import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { s, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ProfileButtons = () => {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={[styles.button, { backgroundColor: "#d0d0d0" }]}>
        <Entypo name="share" size={24} color="black" />
        <Text>Paylaşımlarım</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: "#d0d0d0" }]}>
        <AntDesign name="like" size={24} color="black" />
        <Text>Beğendiklerim</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: "#d0d0d0" }]}>
        <MaterialIcons name="save-alt" size={24} color="black" />
        <Text>Kaydettiklerim</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: "#d0d0d0" }]}>
        <Entypo name="cross" size={24} color="black" />
        <Text>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileButtons;

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: vs(4),
    alignItems: "center",
    gap: vs(8),
  },
  button: {
    backgroundColor: "#e0e0e0",
    borderRadius: s(8),
    width: "98%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: s(10),
  },
  buttonText: {
    fontSize: s(14),
    marginLeft: s(8),
    color: "#000000",
    fontWeight: "bold",
  },
});
