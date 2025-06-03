import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import StartGameScreen from "./screens/StartGameScreen";

import { LinearGradient } from "expo-linear-gradient";
export default function App() {

  

  return (
    <LinearGradient colors={["#f48b7b", "#fffa6a92"]} style={styles.rootScreen}>
      <ImageBackground
        // @ts-ignore
        source={require("./assets/images/NG-background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
    // backgroundColor: "#ffe375c5", "#f48b7b"
  },
  backgroundImage: {
    opacity: 0.25
  }
});
