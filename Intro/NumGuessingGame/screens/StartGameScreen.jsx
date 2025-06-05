import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

import { useState } from "react";
import React from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import ButtonsContainer from "../components/ui/ButtonsContainer";

import { Ionicons } from "@expo/vector-icons";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

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

  const marginTopDist = height < 380 ? 30 : 60;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDist }]}>
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
            <ButtonsContainer>
              <PrimaryButton onPress={resetInputHandler}>
                <Ionicons name="refresh-outline" size={24} />
              </PrimaryButton>
              <PrimaryButton onPress={confirmInputHandler}>
                <Ionicons name="checkmark-sharp" size={24} color="black" />
              </PrimaryButton>
            </ButtonsContainer>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
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
  }
});
