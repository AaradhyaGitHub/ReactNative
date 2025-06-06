import React from "react";

//Expo and React Native
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Custom Compoents
import CategoriesScreen from "./screens/CategoriesScreen";
import CarsOverviewScreen from "./screens/CarsOverviewScreen";
import CarDetailPage from "./screens/CarDetailPage";
import FavoritesScreen from "./screens/FavoritesScreen";

// ------------------------[END IMPORTS]------------------------ //

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#295251" },
          sceneStyle: { backgroundColor: "#c1c1c1ef" },
          headerTintColor: "#ffffff"
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ title: "Available Car Categories" }}
        />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      </Drawer.Navigator>
    </>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Drawer"
          screenOptions={{
            headerStyle: { backgroundColor: "#295251" },
            contentStyle: { backgroundColor: "#c1c1c1ef" },
            headerTintColor: "#ffffff"
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator} // switched from Catergories component
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen name="CarsOverview" component={CarsOverviewScreen} />
          <Stack.Screen
            name="CarDetail"
            component={CarDetailPage}
            options={{ title: "About the Car" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});
