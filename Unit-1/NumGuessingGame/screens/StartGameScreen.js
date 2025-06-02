import { TextInput, Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <>
      <View>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </>
  );
}
