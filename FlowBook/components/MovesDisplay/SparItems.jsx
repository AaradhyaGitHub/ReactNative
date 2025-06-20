import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

// Optional: Your app's color constants
import Colors from "../../constants/Colors";

// Function to return result icon
function renderResultIcon(result) {
  switch (result) {
    case "won":
      return <FontAwesome6 name="trophy" size={24} color="#ffc400" />;
    case "lost":
      return <FontAwesome5 name="skull-crossbones" size={24} color="#fa0202" />;
    case "draw":
      return <FontAwesome6 name="handshake-simple" size={24} color="#71fe05" />;

    default:
      return null;
  }
}

function renderResultColor(result) {
  switch (result) {
    case "won":
      return { color: "#ffc400" };
    case "lost":
      return { color: "#fa0202" };
    case "draw":
      return { color: "#71fe05" };

    default:
      return { color: "#ffffff" };
  }
}

function formatDate(dateString) {
  // If it's already a string in YYYY-MM-DD format, parse it as local date
  if (typeof dateString === 'string' && dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day); // month is 0-indexed
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }
  
  // Fallback for existing Date objects (in case you have mixed data)
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

// Main component
export default function SparItems({ id, result, date, rating }) {
  const navigation = useNavigation();

  function sparLogPressHandler() {
    // @ts-ignore
    navigation.navigate("ManageSpars", {
      sparId: id
    });
  }

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedLog}
      onPress={sparLogPressHandler}
    >
      <View style={styles.root}>
        <View style={styles.leftSection}>
          <View style={styles.iconBox}>{renderResultIcon(result)}</View>
          <Text
            style={[
              styles.resultText,
              renderResultColor(result),
              { fontWeight: "bold" }
            ]}
          >
            {result.toUpperCase()}
          </Text>
        </View>
        <View style={styles.centerSection}>
          <MaterialCommunityIcons
            name="calendar-month"
            size={25}
            color="#fbd042"
          />
          <Text style={styles.dateText}>{formatDate(date)}</Text>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.ratingNumber}>{rating}/10</Text>
          <View style={styles.boxesContainer}>
            <FontAwesome name="square" size={10} color="white" />
            <FontAwesome name="square" size={10} color="white" />
            <FontAwesome name="square" size={10} color="white" />
            <FontAwesome name="square" size={10} color="white" />
            <FontAwesome name="square" size={10} color="white" />
            <FontAwesome name="square" size={10} color="white" />
            <FontAwesome name="square" size={10} color="white" />
            <FontAwesome name="square" size={10} color="white" />
            <FontAwesome name="square" size={10} color="white" />
            <FontAwesome name="square" size={10} color="white" />
          </View>
        </View>
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
  leftSection: {
    alignItems: "center",
    justifyContent: "center"
  },
  iconBox: {
    width: 40,
    alignItems: "center",
    marginBottom: 4
  },
  resultText: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center"
  },
  centerSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  dateText: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 4
  },
  rightSection: {
    alignItems: "center",
    justifyContent: "center"
  },
  ratingNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700", // Gold color to stand out
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 4
  },
  boxesContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2 // Minimal gap between boxes
  },
  pressedLog: {
    opacity: 0.75
  }
});