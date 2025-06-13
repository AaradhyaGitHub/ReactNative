// @ts-nocheck
import React, { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import FloatingAddButton from "../components/ui/FloatingAddButton";
import { useIsFocused } from "@react-navigation/native";

export default function AllPlaces({ navigation, route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]); // ← Initialize as empty array

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((currentPlaces) => [
        ...currentPlaces, // ← Now this works because currentPlaces is always an array
        route.params.place
      ]);
    }
  }, [isFocused, route]);

  return (
    <>
      <PlacesList places={loadedPlaces} />
      <FloatingAddButton onPress={() => navigation.navigate("AddPlace")} />
    </>
  );
}