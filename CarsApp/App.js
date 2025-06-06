import React from "react";

//Expo and React Native
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Custom Compoents
import CategoriesScreen from "./screens/CategoriesScreen";
import CarsOverviewScreen from "./screens/CarsOverviewScreen";
import CarDetailPage from "./screens/CarDetailPage";

// ------------------------[END IMPORTS]------------------------ //

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: { backgroundColor: "#29525187" },
            contentStyle: { backgroundColor: "#c1c1c1ef" },
            headerTintColor: "#ffffff"
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "All Categories"
            }}
          />
          <Stack.Screen
            name="CarsOverview"
            component={CarsOverviewScreen}
            // options={({ route, navigation }) => {
            //   // @ts-ignore
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   };
            // }}
          />
          <Stack.Screen name="CarDetail" component={CarDetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});
