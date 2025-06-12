//------------------ Default Imports -------------------------//
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

export default function OutlinedButton({ onPress, icon, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed
      ]}
    >
      <Ionicons
        name={icon}
        size={18}
        color={Colors.accentWarm}
        style={styles.icon}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.accentCool
  },
  pressed: {
    opacity: 0.4
  },
  icon: {
    marginRight: 6
  },
  text: {
    color: Colors.textPrimary
  }
});
