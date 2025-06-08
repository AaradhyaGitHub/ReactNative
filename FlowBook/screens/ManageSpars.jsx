// @ts-nocheck
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import Colors from "../constants/Colors";
import CButton from "../components/ui/CButton";

export default function ManageSpars({ route, navigation }) {
  const editedSparId = route.params?.sparId;
  const isEditing = !!editedSparId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Your Spar Log" : "Add Sparring Log"
    });
  }, [navigation, isEditing]);

  function DeleteSparLogHandler() {

    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <CButton mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </CButton>
        <CButton onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </CButton>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            color={Colors.error}
            onPress={DeleteSparLogHandler}
            size={44}
            icon={"delete-forever"}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.border
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    minWidth: 120,
    marginHorizontal: 40
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.error,
    alignItems: "center"
  }
});
