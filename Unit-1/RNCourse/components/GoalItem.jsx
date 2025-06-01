import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={{ color: "black", padding: 8 }}>✓ {props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#0cbc4935",
    color: "black"
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "#ff0000c3",
    borderRadius: 6,
  }
});
