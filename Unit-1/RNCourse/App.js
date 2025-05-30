import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your goals" />
        <Button title="Add Goal" />
      </View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#15714b",
    width: "80%",
    marginRight: 8,
    padding: 16
  }
});
