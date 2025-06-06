import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#6ca206" },
          headerTintColor: "#0d1261",
          drawerActiveBackgroundColor: "#d3f497",
          drawerActiveTintColor: "#0816d7",
          drawerStyle: { borderColor: "pink", backgroundColor: "#e9e9e9" }
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color, size }) => (
              <>
                <Ionicons color={color} name="home" size={size} />
              </>
            )
            
          }}
        />
        <Drawer.Screen
          name="UserScreen"
          component={UserScreen}
          options={{
            drawerLabel: "User Screen",
            drawerIcon: ({ color, size }) => (
              <>
                <Ionicons color={color} name="person" size={size} />
              </>
            )
          }}
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
