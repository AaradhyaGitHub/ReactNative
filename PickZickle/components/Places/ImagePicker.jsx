//------------------ Default Imports -------------------------//
import React from "react";
import { Button } from "react-native";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions,
  PermissionStatus
} from "expo-image-picker";
import { StyleSheet, Text, View } from "react-native";
import { Alert } from "react-native";

export default function ImagePicker() {
  const [camPermissionInfo, requestCamPermission] = useCameraPermissions();

  async function verifyPermissions() {
    if (camPermissionInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestCamPermission();
      return permissionResponse.granted;
    }
    if (camPermissionInfo?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission not Granted!",
        "Please allow Camera permission to use this app"
      );
      return false;
    }

    return true;
  }

  async function takeImage() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    console.log(image);
  }
  return (
    <View>
      <View></View>
      <Button title="Take Iamge" onPress={takeImage} />
    </View>
  );
}
