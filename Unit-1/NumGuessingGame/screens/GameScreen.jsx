import { View, Text } from "react-native";
import React from "react";
export default function GameScreen() {
  return (
    <View>
      <Text>Opponent's Guess</Text>
      {/* GUESS */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* + or - */}
      </View>
      <View>Rounds</View>
    </View>
  );
}
