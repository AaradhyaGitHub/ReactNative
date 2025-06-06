import React from "react";
import { Text, View } from "react-native";

export default function CarDetailPage({ route }) {
  const carId = route.params.carId;

  return (
    <View>
      <Text>{carId}</Text>
    </View>
  );
}
