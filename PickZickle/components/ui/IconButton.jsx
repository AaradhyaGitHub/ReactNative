// @ts-nocheck
//------------------ Default Imports -------------------------//
import React from "react";
import { Pressable } from "react-native";
import { StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function IconButton({ icon, size, color, onPress }) {

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      {/* Debug text - remove this once working */}
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    // Fixed: Remove fixed width/height or make them reasonable
    minWidth: 10,
    minHeight: 10,
    // Or you can remove width/height entirely and let it size naturally
  },
  pressed: {
    opacity: 0.5
  }
});
