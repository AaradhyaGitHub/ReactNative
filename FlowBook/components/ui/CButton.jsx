import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function CButton({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? mode === "flat"
              ? styles.flatPressed
              : styles.pressed
            : null
        }
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: Colors.primary,
    marginTop: 20
  },
  flat: {
    backgroundColor: "transparent",
    borderRadius: 8
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  flatText: {
    color: 'white',
    textAlign: "center"
  },
  flatPressed: {
    color: Colors.error,
    opacity: 0.20,
    borderRadius: 0
  },
  pressed: {
    opacity: 0.20,
    backgroundColor: Colors.primary,
    borderRadius: 10
  }
});
