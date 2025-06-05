import React from "react";

import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary1,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4dc7b5c"
  },
  numberText: {
    color: Colors.primaryText,
    fontSize: deviceWidth < 380 ? 28 : 36,
    // fontWeight: "bold"
    fontFamily: "open-sans-bold"
  }
});
