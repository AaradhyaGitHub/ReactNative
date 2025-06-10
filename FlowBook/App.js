import React from "react";
import { StatusBar } from "expo-status-bar";

//nav imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//icon imports
import ManageSpars from "./screens/ManageSpars";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

//custom imports
import RecentSpars from "./screens/RecentSpars";
import AllSpars from "./screens/AllSpars";
import Colors from "./constants/Colors";
import IconButton from "./components/ui/IconButton";
import SparsContextProvider from "./store/spars-context";

//-------------- [END - IMPORTS] ------------------//

//-------------- NavSetup ------------------//
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

//nested navigation
function SparsOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route, navigation }) => ({
        headerStyle: { backgroundColor: Colors.background },
        headerTintColor: Colors.textPrimary,
        tabBarStyle: { backgroundColor: Colors.background },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="lead-pencil"
            size={30}
            color={tintColor}
            onPress={() => navigation.navigate("ManageSpars")}
          />
        )
      })}
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
      <SparsContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SparsOverview"
            screenOptions={{
              headerStyle: { backgroundColor: Colors.background }
            }}
          >
            <Stack.Screen
              name="SparsOverview"
              component={SparsOverview}
              options={{
                headerShown: false
                
              }}
            />
            <Stack.Screen
              name="ManageSpars"
              component={ManageSpars}
              options={{
                presentation: "modal"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SparsContextProvider>
    </>
  );
}
