// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";
import OutlinedButton from "../ui/OutlinedButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus
} from "expo-location";
import { getAddress, getMapPreview } from "../../util/location";
import {
  useNavigation,
  useRoute,
  useIsFocused
} from "@react-navigation/native";

export default function LocationPicker({ onPickLocation }) {
  const navigation = useNavigation();
  const route = useRoute();

  const [pickedLocation, setPickedLocation] = useState();
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [isLoadingMapPreview, setIsLoadingMapPreview] = useState(false);
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
  }, [route, isFocused]);

  useEffect(() => {
    async function handleAddress() {
      console.log("handleAddress called with pickedLocation:", pickedLocation);
      if (pickedLocation) {
        console.log(
          "Getting address for:",
          pickedLocation.lat,
          pickedLocation.lon
        );
        try {
          const address = await getAddress(
            pickedLocation.lat,
            pickedLocation.lon
          );
          console.log("Address received:", address);
          const locationWithAddress = { ...pickedLocation, address };
          console.log("Calling onPickLocation with:", locationWithAddress);
          onPickLocation(locationWithAddress);
        } catch (error) {
          console.error("Error getting address:", error);
          // Still call onPickLocation with location but without address
          onPickLocation({
            ...pickedLocation,
            address: "Address not available"
          });
        }
      }
    }
    handleAddress();
  }, [pickedLocation, onPickLocation]);

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
        "This app needs location access. Please grant permission in your device settings.",
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
    setIsLoadingLocation(true);

    try {
      const hasPermission = await verifyPermissions();

      if (!hasPermission) {
        return;
      }

      const location = await getCurrentPositionAsync({
        timeout: 10000, // 10 second timeout
        accuracy: 6 // Balanced accuracy
      });

      setPickedLocation({
        lat: location.coords.latitude,
        lon: location.coords.longitude
      });
    } catch (error) {
      console.error("Error getting location:", error);
      Alert.alert(
        "Location Error",
        "Failed to get your location. Please try again or pick location on map."
      );
    } finally {
      setIsLoadingLocation(false);
    }
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  // Handle map preview loading
  function handleMapPreviewLoadStart() {
    setIsLoadingMapPreview(true);
  }

  function handleMapPreviewLoadEnd() {
    setIsLoadingMapPreview(false);
  }

  function handleMapPreviewError() {
    setIsLoadingMapPreview(false);
    console.warn("Failed to load map preview");
  }

  let locationPreview = (
    <Text style={styles.noLocationText}>No location picked yet</Text>
  );

  if (isLoadingLocation) {
    locationPreview = (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.accentCool} />
        <Text style={styles.loadingText}>Getting your location...</Text>
      </View>
    );
  } else if (pickedLocation) {
    locationPreview = (
      <View style={styles.imageContainer}>
        <Image
          style={styles.mapPreviewImage}
          source={{
            uri: getMapPreview(pickedLocation.lat, pickedLocation.lon)
          }}
          onLoadStart={handleMapPreviewLoadStart}
          onLoadEnd={handleMapPreviewLoadEnd}
          onError={handleMapPreviewError}
        />
        {isLoadingMapPreview && (
          <View style={styles.imageLoadingOverlay}>
            <ActivityIndicator size="small" color={Colors.accentCool} />
          </View>
        )}
      </View>
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton
          icon="location"
          onPress={getLocationHandler}
          disabled={isLoadingLocation}
        >
          {isLoadingLocation ? "Locating..." : "Locate User"}
        </OutlinedButton>
        <OutlinedButton
          icon="map"
          onPress={pickOnMapHandler}
          disabled={isLoadingLocation}
        >
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
    borderRadius: 9,
    overflow: "hidden"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  mapPreviewImage: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  imageLoadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12
  },
  loadingText: {
    color: Colors.textSecondary,
    fontSize: 16,
    textAlign: "center"
  },
  noLocationText: {
    color: Colors.textSecondary,
    fontSize: 16,
    textAlign: "center"
  }
});
