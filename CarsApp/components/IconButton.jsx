import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ onStarPress, icon, color }) {
  return (
    <Pressable
      onPress={onStarPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed
      ]}
    >
      <View style={styles.iconContainer}>
        <Ionicons 
          name={icon} 
          size={28} // Increased size
          color={color} 
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
    paddingRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    minWidth: 32, // Ensure minimum width
    minHeight: 32, // Ensure minimum height
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.3
  }
});