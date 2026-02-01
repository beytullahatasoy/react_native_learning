import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/nagivation/MainStackNagivator";
import MyTabs from "./src/nagivation/BottomTabs";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
