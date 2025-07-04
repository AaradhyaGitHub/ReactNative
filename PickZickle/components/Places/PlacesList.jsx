// @ts-nocheck
//------------------ Default Imports -------------------------//
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function PlacesList({ places }) {

  const navigation = useNavigation();

  function selectPlaceHandler(id){
    navigation.navigate('PlaceDetails', {
      placeId: id
    })
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places. Add some!</Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id} // ✅ Return the id directly
        renderItem={({ item }) => <PlaceItem place={item} onSelect={selectPlaceHandler}/>} // ✅ Return the component directly
      />
    </>
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fallbackText: {
    fontSize: 24,
    color: Colors.textSecondary
  }
});
