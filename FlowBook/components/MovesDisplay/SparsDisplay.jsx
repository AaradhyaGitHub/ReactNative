//react stuff
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//custom components
import SparSummary from "./SparSummary";
import SparLogs from "./SparLogs";



export default function SparsDisplay({ spars, sparsPeriod }) {
  return (
    <View style={{ flex: 1 }}>
      <SparSummary periodName={sparsPeriod} spars={DUMMY_SPARS} />
      <SparLogs spars={DUMMY_SPARS} />
    </View>
  );
}
