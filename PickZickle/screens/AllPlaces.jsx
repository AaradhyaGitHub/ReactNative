// @ts-nocheck
import React, { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import FloatingAddButton from "../components/ui/FloatingAddButton";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

export default function AllPlaces({ navigation, route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      try {
        const places = await fetchPlaces();
        setLoadedPlaces(places);
      } catch (error) {
        console.error("Error loading places:", error);
      }
    }

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  return (
    <>
      <PlacesList places={loadedPlaces} />
      <FloatingAddButton onPress={() => navigation.navigate("AddPlace")} />
    </>
  );
}
