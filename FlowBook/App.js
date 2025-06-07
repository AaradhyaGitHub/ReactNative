import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//nav imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageMove from "./screens/ManageSpars";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

//custom imports
import RecentSpars from "./screens/RecentSpars";
import AllSpars from "./screens/AllSpars";
import Colors from "./constants/Colors";
//-------------- [END - IMPORTS] ------------------//

//-------------- NavSetup ------------------//
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

//nested navigation
function MovesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.background },
        headerTintColor: Colors.textPrimary,
        tabBarStyle: { backgroundColor: Colors.background },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary
      }}
    >
      <BottomTabs.Screen
        name="RecentSpars"
        component={RecentSpars}
        options={{
          title: "Recent Spars",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="hand-fist" size={24} color={color} />
          )
        }}
      />
      <BottomTabs.Screen
        name="AllSpars"
        component={AllSpars}
        options={{
          title: "All Spars",
          tabBarLabel: "All Spars",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="sports-martial-arts" size={24} color={color} />
          )
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MovesOverview">
          <Stack.Screen
            name="MovesOverview"
            component={MovesOverview}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="ManageMove" component={ManageMove} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
