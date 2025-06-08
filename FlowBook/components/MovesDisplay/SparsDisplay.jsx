//react stuff
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//custom components
import SparSummary from "./SparSummary";
import SparLogs from "./SparLogs";

const DUMMY_SPARS = [
  {
    id: "s1",
    description: "Round 1 with Jose",
    result: "won",
    date: new Date("2025-06-07")
  },
  {
    id: "s2",
    description: "Round 2 with Dan",
    result: "won",
    date: new Date("2025-06-09")
  },
  {
    id: "s3",
    description: "Round 3 with Conor",
    result: "lost",
    date: new Date("2025-06-17")
  }
];

export default function SparsDisplay({ spars, sparsPeriod }) {
  return (
    <View>
      <SparSummary periodName={sparsPeriod} spars={DUMMY_SPARS} />
    </View>
  );
}
