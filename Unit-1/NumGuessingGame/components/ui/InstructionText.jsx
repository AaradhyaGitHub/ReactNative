import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
export default function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.primary1,
    fontSize: 32,
    fontWeight: "bold"
  }
});
