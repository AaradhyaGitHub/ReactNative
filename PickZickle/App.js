//------------------ Default Imports -------------------------//
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//------------------ React Imports --------------------------//

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//------------------ Custom Imports -------------------------//
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AllPlaces"
          screenOptions={{
            headerStyle: { backgroundColor: Colors.surface },
            headerTintColor: Colors.textPrimary,
            contentStyle: {
              backgroundColor: Colors.background
            }
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  color={Colors.accentCool}
                  icon="create" // or just "add"
                  size={30}
                  onPress={() => {
                    navigation.navigate("AddPlace");
                  }}
                />
              )
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: "Add a New Place"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
