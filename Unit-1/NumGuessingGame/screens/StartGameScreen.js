import { TextInput, Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: "20%",
    marginHorizontal: 24,
    backgroundColor: "#f48b7b",
    borderRadius: 8,
    //shadow for android
    elevation: 4,
    //show for iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1
  }
});
