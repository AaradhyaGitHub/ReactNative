// @ts-nocheck
import { CATEGORIES } from "../data/dummy-data";
import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("CarsOverview");
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelectCategory={pressHandler}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        key="categories-2"
        numColumns={2}
      />
    </View>
  );
}
