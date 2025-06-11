// @ts-nocheck
//------------------ Default Imports -------------------------//
import React from "react";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50
  },
  pressed: {
    opacity: 0.5
  }
});
