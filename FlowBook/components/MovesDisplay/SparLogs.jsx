import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function SparLogs({ }) {
  return (
    <View>
      <View>
        <Text>Last 7 matches</Text>
        <Text>
          Wins: <Text>12</Text>
          Draws: <Text>4</Text>
          Ass Kicked: <Text>2</Text>
        </Text>
        <FlatList />
      </View>

    </View>
  );
}
