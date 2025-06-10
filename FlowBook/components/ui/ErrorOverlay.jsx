import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Optional: Your app's color constants

export default function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An Error Occured</Text>
      <Text style={styles.text}>{message}</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "black"
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
    color: "white"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  message: {
    fontSize: 14
  }
});
