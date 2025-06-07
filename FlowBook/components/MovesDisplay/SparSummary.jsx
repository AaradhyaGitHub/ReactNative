import React from "react";
import { StyleSheet, Text, View } from "react-native";

//icons
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function SparSummary({}) {
  return (
    <View>
      <View>
        <Text>Last 7 matches</Text>
        <Text>
          <SimpleLineIcons name="trophy" size={24} color="black" />:{" "}
          <Text>12</Text>
          <FontAwesome name="handshake-o" size={24} color="black" />:{" "}
          <Text>4</Text>
          <FontAwesome name="handshake-o" size={24} color="black" />:{" "}
          <Text>2</Text>
        </Text>
      </View>
    </View>
  );
}
