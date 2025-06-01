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
        {enteredGoalText === "" ? (
          <Text>Enter Goal</Text>
        ) : (
          <Button title="Add Goal" onPress={addGoalHandler} />
        )}
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#0000003f"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#0cbc4a",
    width: "75%",
    marginRight: 8,
    padding: 6
  }
});
