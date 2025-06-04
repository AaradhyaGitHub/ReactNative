import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Pressable,
  Alert
} from "react-native";
import { useState } from "react";
import React from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert("Invalid Number😵", "Number has to be bewtween 0 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler }
      ]);
      return;
    }
    onPickNumber(chosenNumber);
    console.log("Valid Number");
  }

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>↻</PrimaryButton>
          <PrimaryButton onPress={confirmInputHandler}>✓</PrimaryButton>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 8,
    marginTop: "20%",
    alignItems: "center",
    marginHorizontal: 24,
    backgroundColor: Colors.primaryBg,
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
    borderColor: Colors.primary1,
    backgroundColor: "#f4dc7b2d",
    marginVertical: 1,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primaryText,
    marginTop: 20
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 20
  }
});
