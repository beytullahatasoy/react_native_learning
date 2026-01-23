import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="First" component={FirstScreen} />
      <Tab.Screen name="Second" component={SecondScreen} />
      <Tab.Screen name="Third" component={ThirdScreen} />
    </Tab.Navigator>
  );
};
