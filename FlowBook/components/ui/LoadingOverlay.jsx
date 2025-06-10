import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

// Optional: Your app's color constants

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="red" />
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
  }
});
