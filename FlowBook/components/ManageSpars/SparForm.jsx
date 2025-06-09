import React, { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Input from "./Input";

import CButton from "../ui/CButton";
export default function SparForm({ onCancel, onSubmit, submitButtonLabel }) {
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

  function submitHandler() {
    const sparData = {
      result: inputValues.result,
      date: inputValues.date, // Keep as string, don't convert to Date
      description: inputValues.description,
      rating: +inputValues.rating
    };
    onSubmit(sparData);
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
        <View style={styles.buttonsContainer}>
          <CButton mode="flat" onPress={onCancel} style={styles.button}>
            Cancel
          </CButton>
          <CButton onPress={submitHandler} style={styles.button}>
            {submitButtonLabel}
          </CButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    minWidth: 120,
    marginHorizontal: 40
  }
});
