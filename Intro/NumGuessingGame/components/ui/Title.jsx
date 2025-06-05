import { Text, StyleSheet, Platform } from "react-native";
import React from "react";
import Colors from "../../constants/colors";
export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    backgroundColor: Platform.select({
      ios: Colors.primaryBg,
      android: Colors.primary1
    }),
    color: Colors.primaryText,
    textAlign: "center",
    borderRadius: Platform.OS === "android" ? 8 : 5,
    padding: 12,
    maxWidth: "80%",
    marginBottom: 16,
    width: "80%"
  }
});
