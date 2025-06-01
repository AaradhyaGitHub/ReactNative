import { StyleSheet, View, TextInput, Button, Text, Modal } from "react-native";
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goals!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: '7%',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#0000003f"

  },
  textInput: {
    borderWidth: 1,
    borderColor: "#0cbc4a",
    width: "100%",
    padding: 6
  },
  buttonContainer: {
    flexDirection: "row",
    paddingTop: 16
  },
  button:{
    width: '30%',
    marginHorizontal: 8
  }
});
