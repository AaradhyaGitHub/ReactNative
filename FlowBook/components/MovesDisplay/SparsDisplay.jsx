//react stuff
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//custom components
import SparSummary from "./SparSummary";
import SparLogs from "./SparLogs";

export default function SparsDisplay({ moves }) {
  return (
    <View>
      <SparSummary />
      <SparLogs />
    </View>
  );
}
