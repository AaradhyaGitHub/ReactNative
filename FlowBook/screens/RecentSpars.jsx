// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SparsDisplay from "../components/MovesDisplay/SparsDisplay";
import { SparsContext } from "../store/spars-context";
import getDateMinusDays from "../util/date";
import { fetchSpars } from "../util/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErroOverlay from "../components/ui/ErrorOverlay";

export default function RecentSpars() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const sparsCtx = useContext(SparsContext);

  useEffect(() => {
    async function getSpars() {
      setIsFetching(true);
      try {
        const spars = await fetchSpars();
        sparsCtx.setSpars(spars);
      } catch (error) {
        setError("Failed to fetch spars");
      }
      setIsFetching(false);
    }
    getSpars();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !! isFetching) {
    return <ErroOverlay message={error} onConfirm={errorHandler} />;
  }
  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentSpars = sparsCtx.spars.filter((spar) => {
    const today = new Date();
    const dateRange = getDateMinusDays(today, 7);

    // Convert string date to Date object for comparison
    const sparDate =
      typeof spar.date === "string"
        ? new Date(spar.date + "T12:00:00") // Add noon time to avoid timezone issues
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
