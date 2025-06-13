//------------------ Default Imports -------------------------//
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import { useFocusEffect } from "@react-navigation/native";

export default function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces", { place: place });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}
