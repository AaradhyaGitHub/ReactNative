import React, { useLayoutEffect } from "react";
// @ts-ignore
import { CARS, CATEGORIES } from "../data/dummy-data";
import CarItemCard from "../components/CarItemCard";

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

  return <CarItemCard data={displayedCars} />;
}
