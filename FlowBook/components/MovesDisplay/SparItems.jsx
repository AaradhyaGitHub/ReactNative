import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

// Optional: Your app's color constants
import Colors from "../../constants/Colors";

// Function to return result icon
function renderResultIcon(result) {
  switch (result) {
    case "won":
      return <SimpleLineIcons name="trophy" size={28} color="#FFD700" />;
    case "lost":
      return <Ionicons name="skull-outline" size={28} color="#FF5C5C" />;
    case "draw":
      return <FontAwesome name="handshake-o" size={28} color="#000000" />;
    default:
      return null;
  }
}


// Format date nicely
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Main component
export default function SparItems({ result, date, rating }) {
  return (
    <Pressable>
      <View style={styles.root}>
        <View style={styles.iconBox}>{renderResultIcon(result)}</View>
        <Text style={styles.text}>{formatDate(date)}</Text>
        <Text style={styles.text}>{result.toUpperCase()}</Text>
        <Text style={styles.belt}>{rating}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginVertical: 6,
    elevation: 2,
  },
  iconBox: {
    width: 40,
    alignItems: "center",
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    color: '#ffffff',
  },
  belt: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#ffffff',

  },
});
