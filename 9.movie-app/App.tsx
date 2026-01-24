import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/nagivation/MainStackNagivator";
import MyTabs from "./src/nagivation/BottomTabs";

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
