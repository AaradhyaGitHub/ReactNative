import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FlexBoxPracticeScreen from "./screens/FlexBoxPracticeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{}} />
        <Drawer.Screen name="UserScreen" component={UserScreen} options={{}} />
        <Drawer.Screen name="FlexBoxPractice" component={FlexBoxPracticeScreen} options={{}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
