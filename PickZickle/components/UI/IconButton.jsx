// @ts-nocheck
//------------------ Default Imports -------------------------//
import React from "react";
import { Pressable } from "react-native";
import { StyleSheet, Text } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

export default function IconButton({ icon, size, color, onPress }) {
  console.log("IconButton props:", { icon, size, color });

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      {/* Debug text - remove this once working */}
      <Text style={{ color: "red", fontSize: 12 }}>BTN</Text>
      <Octicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    // Fixed: Remove fixed width/height or make them reasonable
    minWidth: 40,
    minHeight: 40
    // Or you can remove width/height entirely and let it size naturally
  },
  pressed: {
    opacity: 0.5
  }
});
