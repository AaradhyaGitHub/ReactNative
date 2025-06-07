// @ts-ignore
import React from "react";
import { Text, View, StyleSheet } from "react-native";
//Expo and React Native
import CarItemCard from "../components/CarItemCard";
import { CARS } from "../data/dummy-data";
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
  // @ts-ignore
  const favoriteCarIds = useSelector((state) => state.favoriteCars.ids);
  const favoriteCars = CARS.filter((car) =>
    favoriteCarIds.includes(car.id)
  );
  return (
    <>
      {favoriteCars.length === 0 ? (
        <View style={styles.rootContainer}>
          <Text style={styles.defaultText}>
            No favorite <Text style={styles.highlight}>cars</Text> added :(
          </Text>
        </View>
      ) : (
        <CarItemCard data={favoriteCars} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70%"
  },
  defaultText: {
    flex: 1.5,
    textAlign: "center",
    fontSize: 30,
    color: "#818181"
  },
  highlight: {
    color: "#9d0830"
  }
});
