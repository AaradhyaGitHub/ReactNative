import React from "react";
// @ts-ignore
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CARS } from "../data/dummy-data";
import CarItem from "../components/CarItem";

export default function CarsOverviewScreen({ route }) {
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

  function renderCarItem(itemData) {
    return <CarItem title={itemData.item.title} imageUrl={itemData.item.imageUrl}/>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedCars}
        // @ts-ignore
        renderItem={renderCarItem}
        // @ts-ignore
        keyExtractor={(item) => {
          item.id;
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
