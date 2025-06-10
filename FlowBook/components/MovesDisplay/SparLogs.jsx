import React from "react";
import { View, FlatList } from "react-native";
import SparItems from "./SparItems";

function renderIndividualSpars(itemData) {
  return <SparItems {...itemData.item} />;
}

export default function SparLogs({ spars }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={spars}
        renderItem={renderIndividualSpars}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
