import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SparsDisplay from "../components/MovesDisplay/SparsDisplay";
import { SparsContext } from "../store/spars-context";
import getDateMinusDays from "../util/date";

export default function RecentSpars() {
  const sparsCtx = useContext(SparsContext);

  const recentSpars = sparsCtx.spars.filter((spar) => {
    const today = new Date();
    const dateRange = getDateMinusDays(today, 7);

    return new Date(spar.date) > dateRange;
  });

  return <SparsDisplay spars={recentSpars} sparsPeriod="Last 7 days" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
