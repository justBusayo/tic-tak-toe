import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SideDrawer from "./components/SideDrawer";
import SideSelection from "./screens/SideSelection";
import GameScreen from "./screens/GameScreen";
import ResultScreen from "./screens/ResultScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <SideDrawer {...props} />}>
        <Drawer.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Drawer.Screen
          options={{ headerShown: false }}
          name="SideSelection"
          component={SideSelection}
        />
      <Drawer.Screen
          options={{ headerShown: false }}
          name="GameScreen"
          component={GameScreen}
        />
      <Drawer.Screen
          options={{ headerShown: false }}
          name="ResultScreen"
          component={ResultScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
