import React from "react";

import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary1,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4dc7b5c"
  },
  numberText: {
    color: Colors.primaryText,
    fontSize: 36,
    // fontWeight: "bold"
    fontFamily: "open-sans-bold"
  }
});
