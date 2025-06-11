// @ts-nocheck
//------------------ Default Imports -------------------------//
import React, { useState } from "react";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

export default function PlaceForm() {
  
  const [title, setTitle] = useState("");
  function changeTitleHandler(enteredTitle) {
    setTitle(enteredTitle);
  }
  return (
    <ScrollView style={styles.formContainer}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={title}
        />
      </View>

      <ImagePicker />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 14
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.textPrimary
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomWidth: 2,
    borderRadius: 8,
    backgroundColor: Colors.info
  }
});
