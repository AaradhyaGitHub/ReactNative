import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function UserScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text >
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    color: '#fd5179',
    fontSize: 20,
  }
});
