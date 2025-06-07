
//Expo and React Native packages
import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";


//Custom Compoents and funcitions
import CategoriesScreen from "./screens/CategoriesScreen";
import CarsOverviewScreen from "./screens/CarsOverviewScreen";
import CarDetailPage from "./screens/CarDetailPage";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/redux/favorites-context";

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
          headerTintColor: "#ffffff",
          //drawer container design config
          drawerContentStyle: { backgroundColor: "#135a59" },
          drawerStyle: {
            backgroundColor: "#fff",
            width: "70%", // ← Adjust this value to make the drawer narrower
            marginTop: 92,
            height: "80%",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 30,
            overflow: "hidden"
          },
          //drawer text config
          drawerInactiveTintColor: "#ffffff",
          drawerActiveTintColor: "#ffffff",
          //drawer text container config
          drawerActiveBackgroundColor: "rgba(255, 255, 255, 0.19)",
          drawerItemStyle: { borderRadius: 20, width: "100%" }
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Available Car Categories",
            drawerIcon: ({ color, size }) => {
              return (
                <>
                  <Ionicons name="car" color={color} size={size} />
                </>
              );
            }
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: "Favorites",
            drawerIcon: ({ color, size }) => {
              return (
                <>
                  <Ionicons name="star" color="#fef72d" size={size} />
                </>
              );
            }
          }}
        />
      </Drawer.Navigator>
    </>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
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
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});
