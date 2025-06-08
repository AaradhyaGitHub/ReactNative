//react stuff
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//custom components
import SparSummary from "./SparSummary";
import SparLogs from "./SparLogs";

export default function SparsDisplay({ spars, sparsPeriod }) {
  return (
    <View style={{ flex: 1 }}>
      <SparSummary spars={spars} periodName={sparsPeriod} />
      <SparLogs spars={spars} />
    </View>
  );
}
