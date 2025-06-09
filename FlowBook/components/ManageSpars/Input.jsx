import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { TextInput } from "react-native";

export default function Input({ label, textInputConfig }) {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiLine);
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
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
  }
});
