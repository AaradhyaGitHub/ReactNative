//------------------ Default Imports -------------------------//
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import { useFocusEffect } from "@react-navigation/native";
import { insertPlace } from "../util/database";

export default function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}
