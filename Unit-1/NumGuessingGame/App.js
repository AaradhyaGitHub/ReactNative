// @ts-nocheck
import React from "react";
import { useState } from "react";

import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/font/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/font/OpenSans-Bold.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  function restartGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumnber={guessRounds}
        userNumber={userNumber}
        onRestartGame={restartGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primaryBg, Colors.primaryText]}
      style={styles.rootScreen}
    >
      <ImageBackground
        // @ts-ignore
        source={require("./assets/images/NG-background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
