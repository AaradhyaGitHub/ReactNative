import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import SparsDisplay from "../components/MovesDisplay/SparsDisplay";
import { SparsContext } from "../store/spars-context";

export default function AllSpars() {
  const sparsCtx = useContext(SparsContext);
  return (
    <SparsDisplay
      spars={sparsCtx.spars}
      sparsPeriod="Total"
      fallbackText="No Spar Logged"
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
