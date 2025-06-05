import React from "react";
import { View, StyleSheet } from "react-native";
export default function ButtonsContainer({children}) {
  return <View style={styles.buttonContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    padding: 20,
    gap: 20,
    paddingBottom: 40
  }
});
