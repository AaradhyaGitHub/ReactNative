import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function FlexBoxPracticeScreen() {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          padding: 50,
          flexDirection: "row",
          width: "80%",
          height: 300,
          justifyContent: "space-around",
          alignItems: "stretch",
          backgroundColor: "rgba(157, 0, 255, 0.595)"
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(255, 103, 79, 0.832)",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: " rgb(98, 145, 255)",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: "rgb(79, 255, 176)",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

{
  /*
  _______________________________________________
  |Direction  |      Axis       |   Cross-Axis  |
  |-----------|-----------------|---------------|
  |Row        | Left to Right → |Top to Bottom ↓|
  |Column     | Top to Bottom ↓ |Left to Right →|
  |Row-Reverse| Right to Left ← |Bottom to Top ↑|
  |Col-Reverse| Bottom to Top ↑ |Right to Left ←|
  |______________________________________________ 
  
  */
}
