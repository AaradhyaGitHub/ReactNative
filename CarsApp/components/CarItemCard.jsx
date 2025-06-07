//Expo and React Native packages
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import CarItem from "./CarItem";

export default function CarItemCard({ data }) {
  function renderCarItem(itemData) {
    const item = itemData.item;
    const carItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      year: item.year
    };
    return <CarItem {...carItemProps} />;
  }
  return (
    <>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderCarItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
