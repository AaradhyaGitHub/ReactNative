import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Modal,
  Image
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { useState } from "react";
import React from "react";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <>
      <StatusBar style="dark" />
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/CheckList.webp")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your goals!"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          {enteredGoalText === "" ? (
            <Text style={{ paddingTop: 16, color: "#029335", fontSize: 20 }}>
              Please enter your goals
            </Text>
          ) : (
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Cancel"
                  onPress={props.onCancel}
                  color="#e5326a"
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Add Goal"
                  onPress={addGoalHandler}
                  color="#0cbc4a"
                />
              </View>
            </View>
          )}
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: "7%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6cd22823"
  },
  image: {
    width: 70,
    height: 70,
    margin: 0
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#0cbc4a",
    borderRadius: 8,
    backgroundColor: "#00ff591e",
    width: "100%",
    padding: 16
  },
  buttonContainer: {
    flexDirection: "row",
    paddingTop: 16
  },
  button: {
    width: "30%",
    marginHorizontal: 8
  }
});
