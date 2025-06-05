import { Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";
export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    backgroundColor: Colors.primaryBg,
    color: Colors.primaryText,
    textAlign: "center",
    borderRadius: 8,
    padding: 12,
    maxWidth: "80%",
    width: 300
  }
});
