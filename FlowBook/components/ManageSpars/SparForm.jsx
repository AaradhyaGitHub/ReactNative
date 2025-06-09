import React, { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Input from "./Input";

export default function SparForm() {
  const [inputValues, setInputValues] = useState({
    result: "",
    date: "",
    description: "",
    rating: ""
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue
      };
    });
  }

  return (
    <View>
      <View>
        <Input
          label="Result"
          textInputConfig={{
            onChangeText: inputChangedHandler.bind(this, "result"),
            value: inputValues.result
          }}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputValues.date
          }}
        />
        <Input
          label="Description"
          textInputConfig={{
            placeholder: "Include details about your spar",
            multiline: true,
            autocorrect: false,
            onChangeText: inputChangedHandler.bind(this, "description"),
            value: inputValues.description
          }}
        />
        <Input
          label="Rating"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "rating"),
            value: inputValues.rating
          }}
        />
      </View>
    </View>
  );
}
