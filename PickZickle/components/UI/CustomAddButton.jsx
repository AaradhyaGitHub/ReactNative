import React from "react";
import { Pressable, View, StyleSheet } from "react-native";

export default function CustomAddButton({ color = "white", size = 30, onPress }) {
  console.log('CustomAddButton props:', { color, size, onPress: !!onPress });
  const iconSize = size * 0.6; // Make the plus smaller relative to the container
  
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { width: size, height: size, backgroundColor: 'red' }, // Temporary red background
        pressed && styles.pressed
      ]}
      onPress={onPress}
    >
      <View style={styles.plusContainer}>
        {/* Horizontal line */}
        <View 
          style={[
            styles.line,
            styles.horizontal,
            { 
              backgroundColor: color,
              width: iconSize,
              height: iconSize * 0.15 
            }
          ]} 
        />
        {/* Vertical line */}
        <View 
          style={[
            styles.line,
            styles.vertical,
            { 
              backgroundColor: color,
              width: iconSize * 0.15,
              height: iconSize 
            }
          ]} 
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
  plusContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    position: "absolute",
  },
  horizontal: {
    // Horizontal line styling handled by props
  },
  vertical: {
    // Vertical line styling handled by props
  },
});