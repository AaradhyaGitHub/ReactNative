import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";
export default function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Phone's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primaryBg,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary1,
    flexDirection: "row",

    justifyContent: "space-between",
    width: '100%',
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  itemText: {
    fontFamily: "open-sans"
  }
});
