// @ts-nocheck
import React from "react";
import PlacesList from "../components/Places/PlacesList";
import FloatingAddButton from "../components/ui/FloatingAddButton";

export default function AllPlaces({ navigation }) {
  return (
    <>
      <PlacesList />
      <FloatingAddButton
        onPress={() => navigation.navigate("AddPlace")}
      />
    </>
  );
}