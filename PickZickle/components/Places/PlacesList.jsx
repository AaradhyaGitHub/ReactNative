// @ts-nocheck
//------------------ Default Imports -------------------------//
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function PlacesList({ places }) {
  return (
    <>
      <FlatList
        data={places}
        keyExtractor={(item) => {
          item.id;
          renderItem={}
        }}
      />
    </>
  );
}
