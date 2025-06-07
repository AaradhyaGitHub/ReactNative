import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
//Expo and React Native
import CarItemCard from "../components/CarItemCard";
import { FavoritesContext } from "../store/redux/favorites-context";
import { CARS } from "../data/dummy-data";

export default function FavoritesScreen() {
  const favoriteCarCtx = useContext(FavoritesContext);
  const favoriteCars = CARS.filter((car) =>
    // @ts-ignore
    favoriteCarCtx.ids.includes(car.id)
  );
  return (
    <>
      {favoriteCars.length === 0 ? (
        <View style={styles.rootContainer}>
          <Text style={styles.defaultText}>
            No <Text style={styles.highlight}>cars</Text> added :(
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70%'
  },
  defaultText: {
    flex: 1.5,
    textAlign: "center",
    fontSize: 32,
    color: "#818181"
  },
  highlight: {
    color: "#9d0830"
  }
});
