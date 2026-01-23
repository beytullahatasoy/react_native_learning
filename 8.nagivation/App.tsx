import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/nagivation/MainStackNagivator";

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
