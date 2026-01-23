import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/nagivation/MainStackNagivator";
import BottomTabs from "./src/nagivation/BottomTabs";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
