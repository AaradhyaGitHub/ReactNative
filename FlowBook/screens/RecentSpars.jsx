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
    
    // Convert string date to Date object for comparison
    const sparDate = typeof spar.date === 'string' 
      ? new Date(spar.date + 'T12:00:00') // Add noon time to avoid timezone issues
      : spar.date;
  
    return sparDate >= dateRange && sparDate <= today;
  });

  return (
    <SparsDisplay
      spars={recentSpars}
      sparsPeriod="Last 7 days"
      fallbackText="No Spar Logged for the last 7 days"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
