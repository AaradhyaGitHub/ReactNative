import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList
} from "react-native";
import React from "react";

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
            return (
              <View style={styles.goalItem}>
                <Text style={{ color: "black" }}>✓ {itemData.item.text}</Text>
              </View>
            );
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
    backgroundColor: "#1d350356",
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#15714b"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#15714b",
    width: "75%",
    marginRight: 8,
    padding: 6
  },
  goalsContainer: {
    backgroundColor: "#78d51525",
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#76a93eb0",
    color: "black"
  }
});
