import { createStackNavigator } from "@react-navigation/stack";

import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name="Second" component={SecondScreen} />
      <Stack.Screen name="First" component={FirstScreen} />
      <Stack.Screen
        options={{ headerShown: true, title: "Deneme başlık" }}
        name="Third"
        component={ThirdScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
