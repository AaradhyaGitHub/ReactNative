import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Title from "../components/Title";
export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower?</Text>
        {/* + or - */}
      </View>
      {/* <View>Rounds</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: 64
  }
});
