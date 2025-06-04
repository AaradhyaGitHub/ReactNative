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
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>

      <Card>
        <InstructionText>Enter a number</InstructionText>
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
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center"
  },

  

  numInput: {
    height: 62,
    width: "30%",
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
