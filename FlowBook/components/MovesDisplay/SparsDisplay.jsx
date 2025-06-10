//react stuff
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//custom components
import SparSummary from "./SparSummary";
import SparLogs from "./SparLogs";
import Colors from "../../constants/Colors";

export default function SparsDisplay({ spars, sparsPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;
  if (spars.length > 0) {
    content = <SparLogs spars={spars} />;
  }
  return (
    <View style={{ flex: 1 }}>
      <SparSummary spars={spars} periodName={sparsPeriod} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  infoText: {
    color: Colors.error,
    fontSize: 22,
    textAlign: "center",
    marginTop: 32
  }
});
