import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import React from "react";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState();
  const [listofGoals, setListofGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setListofGoals((currentListofGoals) => [
      ...currentListofGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    setEnteredGoalText(" ");
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goals"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={listofGoals}
          renderItem={(itemData) => {
            return <GoalItem />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#0cbc4a18",
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#2e29ac0"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#0cbc4a",
    width: "75%",
    marginRight: 8,
    padding: 6
  },
  goalsContainer: {
    flex: 5
  }
});
