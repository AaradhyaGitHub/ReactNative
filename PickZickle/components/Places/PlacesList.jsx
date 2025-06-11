// @ts-nocheck
//------------------ Default Imports -------------------------//
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import PlaceItem from "./PlaceItem";

export default function PlacesList({ places }) {
  return (
    <>
      <FlatList
        data={places}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={({ item }) => {
          <PlaceItem place={item} />;
        }}
      />
    </>
  );
}
