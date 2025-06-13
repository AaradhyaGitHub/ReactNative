// @ts-nocheck
//------------------ Default Imports -------------------------//
import React, { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/ui/IconButton";
import { Colors } from "../constants/colors";

export default function Map({ navigation, route }) {
  const initialLocation = route.params && {
    lat: route.params.initialLat,
    lon: route.params.initialLon
  };

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const region = {
    latitude: initialLocation ? initialLocation.lat : 37.78,
    longitude: initialLocation ? initialLocation.lon : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  function selectLocationHandler(event) {
    //diable moving marker
    if (initialLocation) {
      return;
    }
    const lat = event.nativeEvent.coordinate.latitude;
    const lon = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({
      lat: lat,
      lon: lon
    });
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("No location picked!", "Please pick a location on the map");
      return;
    }

    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.lat,
      pickedLon: selectedLocation.lon
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialLocation) {
      return;
    }
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={30}
          color={Colors.success}
          onPress={savePickedLocationHandler}
        />
      )
    });
  }, [navigation, savePickedLocationHandler, initialLocation]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Selected Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lon
          }}
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
