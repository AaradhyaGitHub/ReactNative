import React, { useLayoutEffect } from "react";
// @ts-ignore
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CARS, CATEGORIES } from "../data/dummy-data";
import CarItem from "../components/CarItem";

export default function CarsOverviewScreen({ route, navigation }) {
  {
    /* 
      Alternative to route using a hook: 

      import {useRoute} from '@react-navigation/native'
      const route = useRoute();
      route.params
    */
  }
  const catId = route.params.categoryId;

  const displayedCars = CARS.filter((carItem) => {
    return carItem.categoryIds.indexOf(catId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === catId
  )?.title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle
    });
  }, [catId, navigation]);

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
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={displayedCars}
        // @ts-ignore
        renderItem={renderCarItem}
        // @ts-ignore
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
