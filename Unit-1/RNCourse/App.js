import React from "react";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [listofGoals, setListofGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setListofGoals((currentListofGoals) => [
      ...currentListofGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
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
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color={"#0cbc4935"}
        onPress={startAddGoalHandler}
      />
      {<GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />}

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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#0cbc4a18",
    flex: 1
  },

  goalsContainer: {
    flex: 5
  }
});
