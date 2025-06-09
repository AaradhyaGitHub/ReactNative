import React, { useState } from "react";
import { Pressable, View, Text, StyleSheet, Alert } from "react-native";
import Colors from "../../constants/Colors";
import Input from "./Input";

import CButton from "../ui/CButton";

function validateDate(dateString) {
  // Check if it's a string in YYYY-MM-DD format
  if (
    typeof dateString !== "string" ||
    !dateString.match(/^\d{4}-\d{2}-\d{2}$/)
  ) {
    return false;
  }

  const [year, month, day] = dateString.split("-").map(Number);

  // Check year range (2000-2125)
  if (year < 2000 || year > 2125) {
    return false;
  }

  // Check month range (1-12)
  if (month < 1 || month > 12) {
    return false;
  }

  // Check day range (1-31, but also validate against the actual month/year)
  if (day < 1 || day > 31) {
    return false;
  }

  // Create a date object and verify it matches the input
  // This catches invalid dates like Feb 30, Nov 31, etc.
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

export default function SparForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultFormValues
}) {
  const [inputValues, setInputValues] = useState({
    result: defaultFormValues ? defaultFormValues.result : "",
    date: defaultFormValues ? defaultFormValues.date : "",
    description: defaultFormValues ? defaultFormValues.description : "",
    rating: defaultFormValues ? defaultFormValues.rating.toString() : ""
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

    const resultIsValid =
      sparData.result === "won" ||
      sparData.result === "draw" ||
      sparData.result === "lost";

    const descriptionIsValid = sparData.description.trim().length > 0;
    const ratingIsValid = sparData.rating <= 10 && sparData.rating >= 0;
    const dateIsValid = validateDate(sparData.date);

    if (
      !resultIsValid ||
      !descriptionIsValid ||
      !ratingIsValid ||
      !dateIsValid
    ) {
      Alert.alert(
        "Invalid input",
        "Please ensure description is not empty, date matches the format and the result is won, lost or draw "
      );
      return;
    }
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
