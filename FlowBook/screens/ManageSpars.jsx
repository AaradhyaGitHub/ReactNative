import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import Colors from "../constants/Colors";

export default function ManageSpars({ route, navigation }) {
  const editedSparId = route.params?.sparId;
  const isEditing = !!editedSparId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Your Spar Log" : "Add Sparring Log"
    });
  }, [navigation, isEditing]);

  function DeleteSparLogHandler() {}

  return (
    <View style={styles.container}>
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
    backgroundColor: Colors.background
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.error,
    alignItems: "center"
  }
});
