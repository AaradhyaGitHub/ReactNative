import React from "react";
import { StyleSheet, Text, View } from "react-native";

//icons
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Ionicons from "@expo/vector-icons/Ionicons";

import Colors from "../../constants/Colors";

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

  return (
    <View>
      <View>
        <Text>{periodName}</Text>
        <Text>
          <SimpleLineIcons name="trophy" size={24} color="gold" />:{" "}
          {sparStats.totalWins}
        </Text>
        <Text>
          <FontAwesome name="handshake-o" size={24} color={Colors.info} />:{" "}
          {sparStats.totalDraws}
        </Text>
        <Text>
          <Ionicons name="skull-outline" size={24} color="black" />:{" "}
          {sparStats.totalLosses}
        </Text>
      </View>
    </View>
  );
}
