import { Image, ImageBackground, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-size-matters";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/indir2.avif")}
        style={styles.bg}
      >
        <Text style={styles.title}>Mini Profile App</Text>

        <ProfileCard />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    flex: 1,
    padding: s(58),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: s(32),
    fontWeight: "bold",
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
