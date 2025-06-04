import { Pressable, View, StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    onPress();
    console.log(`${children} button pressed`);
  }
  return (
    <View style={styles.outerButtonContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.innerbuttonContainer, styles.pressed]
            : styles.innerbuttonContainer
        }
        android_ripple={{ color: Colors.primary1 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerButtonContainer: {
    borderRadius: 50,
    overflow: "hidden",
    margin: 8,
    shadowColor: "#000", // Soft shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5, // Shadow for Android
    backgroundColor: Colors.primary1,
  },
  innerbuttonContainer: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.primaryText,
    letterSpacing: 0.5,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
});

