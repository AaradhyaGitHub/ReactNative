// @ts-nocheck
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

function getDateString(dateValue) {
  if (!dateValue) return "";

  // If it's already a string in YYYY-MM-DD format, return it
  if (typeof dateValue === "string" && dateValue.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return dateValue;
  }

  // If it's a Date object, convert it to YYYY-MM-DD string
  const date = new Date(dateValue);
  if (isNaN(date.getTime())) return ""; // Invalid date

  return date.toISOString().split("T")[0]; // Returns YYYY-MM-DD format
}

export default function SparForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultFormValues
}) {
  const [inputs, setInputs] = useState({
    result: {
      value: defaultFormValues ? defaultFormValues.result : "",
      isValid: true
    },
    date: {
      value: defaultFormValues ? getDateString(defaultFormValues.date) : "",
      isValid: true
    },
    description: {
      value: defaultFormValues ? defaultFormValues.description : "",
      isValid: true
    },
    rating: {
      value: defaultFormValues ? defaultFormValues.rating.toString() : "",
      isValid: true
    }
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true }
      };
    });
  }

  function submitHandler() {
    const sparData = {
      result: inputs.result.value,
      date: inputs.date.value, // Keep as string, don't convert to Date
      description: inputs.description.value,
      rating: +inputs.rating.value
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
      //   Alert.alert(
      //     "Invalid input",
      //     "Please ensure description is not empty, date matches the format and the result is won, lost or draw "
      //   );
      setInputs((currInputs) => {
        return {
          result: { value: currInputs.result.value, isValid: resultIsValid },
          description: {
            value: currInputs.description.value,
            isValid: descriptionIsValid
          },
          rating: { value: currInputs.rating.value, isValid: ratingIsValid },
          date: { value: currInputs.date.value, isValid: dateIsValid }
        };
      });
      return;
    }
    onSubmit(sparData);
  }

  const formIsInvalid =
    !inputs.result.isValid ||
    !inputs.description.isValid ||
    !inputs.date.isValid ||
    !inputs.rating.isValid;

  return (
    <View>
      <View>
        <Input
          label="Result"
          inValid={!inputs.result.isValid}
          textInputConfig={{
            onChangeText: inputChangedHandler.bind(this, "result"),
            value: inputs.result.value
          }}
        />
        <Input
          label="Date"
          inValid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputs.date.value
          }}
        />
        <Input
          label="Description"
          inValid={!inputs.description.isValid}
          textInputConfig={{
            placeholder: "Include details about your spar",
            multiline: true,
            autocorrect: false,
            onChangeText: inputChangedHandler.bind(this, "description"),
            value: inputs.description.value
          }}
        />
        <Input
          label="Rating"
          inValid={!inputs.rating.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "rating"),
            value: inputs.rating.value
          }}
        />
        {formIsInvalid && (
          <Text style={{ textAlign: "center", color: "red" }}>
            Invalid input! Try Again
          </Text>
        )}
        <View style={styles.buttonsContainer}>
          <CButton mode="flat" onPress={onCancel} style={styles.button}>
            Cancel
          </CButton>
          <CButton mode="" onPress={submitHandler} style={styles.button}>
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
