import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SparSummary({  }) {
  return (
    <View>
      <View>
        <Text>Last 7 matches</Text>
        <Text>
          Wins: <Text>12</Text>
          Draws: <Text>4</Text>
          Ass Kicked: <Text>2</Text>
        </Text>
      </View>
    </View>
  );
}
