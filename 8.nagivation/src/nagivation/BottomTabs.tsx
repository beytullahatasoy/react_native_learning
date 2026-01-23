import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          color: "#000000",
        },
        tabBarStyle: {
          backgroundColor: "#ffffff",
        },
        tabBarActiveTintColor: "#ff0000",
        tabBarInactiveTintColor: "#000000",
        animation: "fade",
      }}
    >
      <Tab.Screen
        options={{
          title: "First Sc.",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="user" size={size} color={color} />;
          },
        }}
        name="First"
        component={FirstScreen}
      />
      <Tab.Screen
        options={{
          title: "Second Sc.",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="home" size={size} color={color} />;
          },
        }}
        name="Second"
        component={SecondScreen}
      />
      <Tab.Screen
        options={{
          title: "Third Sc.",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="setting" size={size} color={color} />;
          },
        }}
        name="Third"
        component={ThirdScreen}
      />
    </Tab.Navigator>
  );
}
