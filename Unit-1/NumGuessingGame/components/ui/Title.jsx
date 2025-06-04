import { Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";
export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: Colors.primaryBg,
    color: Colors.primaryText,
    textAlign: "center",
    borderRadius: 8,
    padding: 12,
  }
});
