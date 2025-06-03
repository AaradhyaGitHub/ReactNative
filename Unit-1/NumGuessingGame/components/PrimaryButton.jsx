import { Pressable, View, StyleSheet, Text } from "react-native";
import React from "react";
export default function PrimaryButton({ children }) {
  function pressHandler() {
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
        android_ripple={{ color: "#fdca00" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerButtonContainer: {
    borderRadius: 59,
    overflow: "hidden"
  },
  innerbuttonContainer: {
    paddingVertical: 2,
    paddingHorizontal: 9,
    backgroundColor: "#ffe375",
    elevation: 4
  },
  buttonText: {
    fontSize: 32,
    color: "#4a4a4a",
    textAlign: "center"
  },
  pressed: {
    opacity: 0.5
  }
});
