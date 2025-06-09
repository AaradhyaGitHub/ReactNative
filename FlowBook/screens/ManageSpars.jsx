// @ts-nocheck
import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import IconButton from "../components/ui/IconButton";
import Colors from "../constants/Colors";
import CButton from "../components/ui/CButton";
import { SparsContext } from "../store/spars-context";
import SparForm from "../components/ManageSpars/SparForm";

export default function ManageSpars({ route, navigation }) {
  const sparCtx = useContext(SparsContext);

  const editedSparId = route.params?.sparId;
  const isEditing = !!editedSparId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Your Spar Log" : "Add Sparring Log"
    });
  }, [navigation, isEditing]);

  function DeleteSparLogHandler() {
    sparCtx.deleteSpar(editedSparId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    if (isEditing) {
      sparCtx.updateSpar(editedSparId, {
        description: "update test",
        result: "UPDATE!!",
        date: new Date("2019-01-13"),
        rating: 8
      });
    } else {
      sparCtx.addSpar({
        description: "add test",
        result: "ADD!!",
        date: new Date("2020-01-12"),
        rating: 8
      });
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <SparForm />

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
