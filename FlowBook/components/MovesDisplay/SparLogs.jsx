import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

function renderIndividualSpars(itemData) {
  return <Text>{itemData.item.description}</Text>;
}

export default function SparLogs({ spars }) {
  return (
    <View>
      <FlatList
        data={spars}
        renderItem={renderIndividualSpars}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
