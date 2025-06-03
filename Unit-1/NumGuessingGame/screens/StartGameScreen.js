import { TextInput, Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton>↻</PrimaryButton>
          <PrimaryButton>✓</PrimaryButton>

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: "20%",
    alignItems: "center",
    marginHorizontal: 24,
    backgroundColor: "#f48b7b",
    borderRadius: 8,
    //shadow for android
    elevation: 4,
    //show for iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.225
  },

  numInput: {
    height: 62,
    width: "20%",
    fontSize: 32,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#f4dc7b",
    backgroundColor: "#f4dc7b2d",
    color: "#fde950d5",
    marginVertical: 1,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems:'center',
    padding: 20,
    gap:20
  }
});
