import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SparsDisplay from "../components/MovesDisplay/SparsDisplay";

export default function AllSpars() {
  return <SparsDisplay sparsPeriod="Total"/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
