// @ts-nocheck
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus
} from "expo-image-picker";
import { useState } from "react";

import { Colors } from "../../constants/colors";

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    // Check if permission is already granted
    if (cameraPermissionInformation.status === PermissionStatus.GRANTED) {
      return true;
    }

    // If undetermined, request permission
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    // If denied, show alert and try to request again
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Camera Permission Required",
        "This app needs camera access to take photos. Please grant permission in your device settings.",
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

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    try {
      const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5
      });

      // Check if user didn't cancel
      if (!image.canceled && image.assets && image.assets.length > 0) {
        setPickedImage(image.assets[0].uri);
      }
    } catch (error) {
      console.error("Error taking image:", error);
      Alert.alert("Error", "Failed to take image. Please try again.");
    }
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.border,
    borderRadius: 9
  },
  image: {
    width: "100%",
    height: "100%"
  }
});