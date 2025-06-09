// @ts-nocheck
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import Colors from "../../constants/Colors";

export default function Input({ label, textInputConfig, inValid }) {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiLine);
  }
  if (inValid) {
    inputStyles.push(styles.inValidInput);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, inValid && styles.inValidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  label: {
    fontSize: 14,
    color: "white",
    marginBottom: 4
  },
  input: {
    backgroundColor: Colors.primary,
    padding: 6,
    borderRadius: 7,
    fontSize: 18,
    color: "white"
  },
  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: "top"
  },
  inValidLabel: {
    color: Colors.error
  },
  inValidInput: {
    backgroundColor: "#ab5858"
  }
});
