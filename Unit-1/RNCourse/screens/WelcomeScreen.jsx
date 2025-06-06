import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Welcome"</Text> screen!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  highlight: {
    color: "#4a99fb",
    fontSize: 20
  }
});
