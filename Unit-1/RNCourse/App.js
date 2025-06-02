import React from "react";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [listofGoals, setListofGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setListofGoals((currentListofGoals) => [
      ...currentListofGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    endAddGoalHandler();
  }
  function deleteGoalHandler(id) {
    setListofGoals((currentListofGoals) => {
      return currentListofGoals.filter((goal) => goal.id !== id);
    });
  }
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <View style={styles.button}>
          <Button
            title="＋ Add Goal"
            color={"#0cbc67"}
            onPress={startAddGoalHandler}
          />
        </View>
        {
          <GoalInput
            visible={modalIsVisible}
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}
          />
        }

        <View style={styles.goalsContainer}>
          <FlatList
            data={listofGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#6cd22823",
    flex: 1
  },

  goalsContainer: {
    flex: 5
  },

  button: {
    alignItems: "center", // Center child horizontally (the Button)
    marginVertical: 12,
  }
});
