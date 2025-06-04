// @ts-nocheck
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
export default function GameOverScreen({
  roundsNumnber,
  userNumber,
  onRestartGame
}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.hgihlight}>{roundsNumnber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.hgihlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestartGame}>Restart Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 75,
    gap: 10
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
    margin: 36
  },
  imageStyle: {
    width: "100%",
    height: "100%"
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    backgroundColor: Colors.primaryBg,
    width: "88%",
    borderRadius: 8,
    paddingVertical: 8
  },

  hgihlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary1
  }
});
