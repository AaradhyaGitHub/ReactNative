import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CARS } from "../data/dummy-data";

export default function CarsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Carrs OverView Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
