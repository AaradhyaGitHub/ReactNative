// @ts-nocheck
//------------------ Default Imports -------------------------//
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";

export default function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places. Add some!</Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id} // ✅ Return the id directly
        renderItem={({ item }) => <PlaceItem place={item} />} // ✅ Return the component directly
      />
    </>
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fallbackText: {
    fontSize: 24,
    color: Colors.textSecondary
  }
});
