import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Input from "./Input";

export default function SparForm() {
  function resultChangedHandler() {}

  return (
    <View>
      <Input
        label="Result"
        textInputConfig={{
          onChangeText: resultChangedHandler
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChange: () => {}
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          placeholder: "Include details about your spar",
          multiline: true,
          autoCorrect: false

        }}
      />
      <Input
        label="Rating"
        textInputConfig={{
          keyboardType: "decimal-pad"
        }}
      />
    </View>
  );
}
