import React from "react";

import { View, Text, StyleSheet } from "react-native";

export default function CarDetails({ year, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{year}</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center"
  },
  detailItem: {
    marginHorizontal: 4,
    marginBottom: 10,
    backgroundColor: "#295251",
    fontSize: 16,
    borderRadius: 18,
    color: "white",
    padding: 8
  }
});
