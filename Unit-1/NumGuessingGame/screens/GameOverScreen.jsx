// @ts-nocheck
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Title from "../components/ui/Title";
export default function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text>Your Phone needed X rounds to guess the number Y</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100
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
  }
});
