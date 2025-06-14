//------------------ Enhanced OutlinedButton -------------------------//
import React from "react";
import { Pressable, StyleSheet, Text, View, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

export default function OutlinedButton({ onPress, icon, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed
      ]}
    >
      <Ionicons
        name={icon}
        size={20}
        color={Colors.info}
        style={styles.icon}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    margin: 6,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  pressed: {
    opacity: 0.6,
    transform: [{ scale: 0.98 }]
  },
  icon: {
    marginRight: 8
  },
  text: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: "500"
  }
});
