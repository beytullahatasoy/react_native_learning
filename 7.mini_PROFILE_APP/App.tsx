import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import ProfileCard from "./components/ProfileCard";
import Favorites from "./components/Favorites";
import ProfileButtons from "./components/ProfileButtons";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/indir2.avif")}
        style={styles.bg}
      >
        <Text style={styles.title}>Mini Profile App</Text>

        <ProfileCard onEdit={() => setModalVisible(true)} />
        <Favorites />
        <ProfileButtons />

        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalcontainer}>
            <TextInput placeholder="Adı Soyadı" style={styles.textInput} />
            <TextInput placeholder="Açıklaması" style={styles.textInput} />

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Profili Düzenle</Text>
              <AntDesign name="edit" size={18} color="black" />
            </Pressable>

            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Modal Kapat</Text>
              <AntDesign name="close" size={18} color="black" />
            </Pressable>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  bg: {
    flex: 1,
    paddingHorizontal: s(15),
    paddingTop: s(15),
    paddingBottom: s(60),
  },
  title: {
    fontSize: s(25),
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#796868",
    marginVertical: vs(4),
  },
  modalcontainer: {
    flex: 1,
    padding: s(20),
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
    marginRight: s(8),
  },
  buttonClose: {
    backgroundColor: "#a58686",
    borderRadius: s(8),
    width: "98%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: s(10),
    marginTop: vs(8),
  },
});
