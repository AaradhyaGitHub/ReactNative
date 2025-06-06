import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  NavigationContainer,
  NavigationIndependentTree
} from "@react-navigation/native";

import FlexBoxPracticeScreen from "./FlexBoxPracticeScreen";
import FlexBoxDocScreen from "./FlexBoxDocScreen";

export default function UserScreen({ route, navigation }) {
  const BottomTab = createBottomTabNavigator();

  function HomeScreen() {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.welcomeText}>
          Welcome to the <Text style={styles.highlight}>FlexBox</Text>{" "}
          Playground!
        </Text>
        <Pressable onPress={navigation.toggleDrawer} style={styles.button}>
          <Text style={styles.buttonText}>Open Drawer</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#4a6cf7",
              shadowOpacity: 0,
              borderBottomWidth: 0
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
              color: "#ffffff"
            },
            headerTitleAlign: "center",
            tabBarActiveTintColor: "#4a6cf7",
            tabBarInactiveTintColor: "#777",
            tabBarStyle: {
              backgroundColor: "#f5f5f5",
              borderTopColor: "#ddd",
              paddingBottom: 90,
              height: 90
            },
            tabBarLabelStyle: {
              fontSize: 12
            }
          }}
        >
          <BottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
              title: "Home Page"
            }}
          />
          <BottomTab.Screen
            name="FlexBoxDocs"
            component={FlexBoxDocScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="document-text" size={size} color={color} />
              ),
              title: "Flex Box Docs"
            }}
          />
          <BottomTab.Screen
            name="FlexBoxPractice"
            component={FlexBoxPracticeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="book" size={size} color={color} />
              ),
              title: "Flex Box Practice"
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f0f4ff"
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20
  },
  highlight: {
    color: "#4a6cf7",
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#4a6cf7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16
  }
});
