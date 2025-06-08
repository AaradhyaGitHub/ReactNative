import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { TextInput } from "react-native";

export default function Input({ label, textInputConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}
