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
    date: new Date("2025-06-07"),
    rating: 10
  },
  {
    id: "s2",
    description: "Round 2 with Dan",
    result: "lost",
    date: new Date("2025-06-09"),
    rating: 4
  },
  {
    id: "s3",
    description: "Round 3 with Conor",
    result: "lost",
    date: new Date("2025-06-17"),
    rating: 10
  },
  {
    id: "s4",
    description: "Round 1 with Jose",
    result: "draw",
    date: new Date("2025-06-07"),
    rating: 2
  },
  {
    id: "s5",
    description: "Round 2 with Dan",
    result: "draw",
    date: new Date("2025-06-09"),
    rating: 3
  },
  {
    id: "s6",
    description: "Round 3 with Conor",
    result: "won",
    date: new Date("2025-06-17"),
    rating: 5
  },
  {
    id: "s7",
    description: "Round 3 with Conor",
    result: "lost",
    date: new Date("2025-06-17"),
    rating: 10
  }
];

export default function SparsDisplay({ spars, sparsPeriod }) {
  return (
    <View style={{ flex: 1 }}>
      <SparSummary periodName={sparsPeriod} spars={DUMMY_SPARS} />
      <SparLogs spars={DUMMY_SPARS} />
    </View>
  );
}
