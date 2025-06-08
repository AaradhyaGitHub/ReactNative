import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

// Optional: Your app's color constants
import Colors from "../../constants/Colors";

// Function to return result icon
function renderResultIcon(result) {
  switch (result) {
    case "won":
      return <FontAwesome6 name="trophy" size={24} color="#fbd042" />;
    case "lost":
      return <FontAwesome5 name="skull-crossbones" size={24} color="#a90404" />;

    case "draw":
      return <FontAwesome6 name="handshake-simple" size={24} color="#99fcb0" />;

    default:
      return null;
  }
}

function renderResultColor(result) {
  switch (result) {
    case "won":
      return { color: "#fbd042" };
    case "lost":
      return { color: "#e10000" };
    case "draw":
      return { color: "#6bfc8d" };

    default:
      return { color: "#ffffff" };
  }
}

// Format date nicely
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

// Main component
export default function SparItems({ result, date, rating }) {
  return (
    <Pressable>
      <View style={styles.root}>
        <View style={styles.iconBox}>{renderResultIcon(result)}</View>
        <Text style={styles.text}>{formatDate(date)}</Text>
        <Text
          style={[
            styles.text,
            renderResultColor(result),
            { fontWeight: "bold" }
          ]}
        >
          {result.toUpperCase()}
        </Text>
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
    marginHorizontal: 16
  },
  iconBox: {
    width: 40,
    alignItems: "center"
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    color: "#ffffff"
  },
  belt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff"
  }
});
