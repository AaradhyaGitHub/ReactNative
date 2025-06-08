import React from "react";
import { StyleSheet, Text, View } from "react-native";

//icons
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

import Colors from "../../constants/Colors";
import SparItems from "./SparItems";

export default function SparSummary({ spars, periodName }) {
  const sparStats = spars.reduce(
    (totals, spar) => {
      if (spar.result === "won") {
        totals.totalWins += 1;
      } else if (spar.result === "draw") {
        totals.totalDraws += 1;
      } else if (spar.result === "lost") {
        totals.totalLosses += 1;
      }
      return totals;
    },
    {
      totalWins: 0,
      totalDraws: 0,
      totalLosses: 0
    }
  );

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const renderStatCard = (icon, count, label, color, bgColor) => (
    <View style={styles.statCard}>
      <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
        {icon}
      </View>
      <Text style={styles.statNumber}>{count}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.periodTitle}>{periodName}</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          {renderStatCard(
            <SimpleLineIcons name="trophy" size={32} color="#FFD700" />,
            sparStats.totalWins,
            "Wins",
            "#FFD700",
            "rgba(255, 215, 0, 0.15)"
          )}

          {renderStatCard(
            <FontAwesome name="handshake-o" size={32} color={Colors.info} />,
            sparStats.totalDraws,
            "Draws",
            Colors.info,
            "rgba(0, 180, 216, 0.15)"
          )}

          {renderStatCard(
            <Ionicons name="skull-outline" size={32} color={Colors.error} />,
            sparStats.totalLosses,
            "Losses",
            Colors.error,
            "rgba(255, 107, 107, 0.15)"
          )}
        </View>
      </View>
      <SparItems result="draw" date={new Date()} rating="3.2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 6,
    shadowColor: Colors.textPrimary,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16

  },
  header: {
    alignItems: "center",
    marginBottom: 24
  },
  periodTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.textPrimary,
    textAlign: "center"
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 8
  },
  statCard: {
    alignItems: "center",
    flex: 1
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    borderWidth: 3,
    borderColor: "rgba(237, 237, 237, 0.582)",
    shadowColor: Colors.textPrimary,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.15,
    shadowRadius: 8
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.textPrimary,
    marginBottom: 0
  },
  statLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textSecondary,
    textTransform: "uppercase",
    letterSpacing: 0.5
  }
});
