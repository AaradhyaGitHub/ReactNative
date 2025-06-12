// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../ui/OutlinedButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus
} from "expo-location";
import { getMapPreview } from "../util/location";
import {
  useNavigation,
  useRoute,
  useIsFocused
} from "@react-navigation/native";

export default function LocationPicker() {
  const navigation = useNavigation();
  const route = useRoute();

  const [pickedLocation, setPickedLocation] = useState();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lon: route.params.pickedLon
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]); // Removed mapPickedLocation from dependencies

  async function verifyPermissions() {
    if (locationPermissionInformation.status === PermissionStatus.GRANTED) {
      return true;
    }

    // If undetermined, request permission
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    // If denied, show alert and try to request again
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Location Permission Required",
        "This app needs location access . Please grant permission in your device settings.",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Try Again",
            onPress: async () => {
              const permissionResponse = await requestPermission();
              return permissionResponse.granted;
            }
          }
        ]
      );
      return false;
    }

    return false;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync({});
    setPickedLocation({
      lat: location.coords.latitude,
      lon: location.coords.longitude
    });
  }
  
  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  let locationPreview = <Text style={{ color: "red" }}>Not Available yet</Text>;
  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.mapPreviewImage}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lon)
        }}
      />
    );
  }
  
  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.border,
    borderRadius: 9
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  mapPreviewImage: {
    width: "100%",
    height: "100%"
  }
});