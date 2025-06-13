// @ts-nocheck
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions,
  useMediaLibraryPermissions,
  PermissionStatus
} from "expo-image-picker";

import { Colors } from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";

function ImagePicker({ pickedImage, onImagePicked }) {
  const [cameraPermissionInformation, requestCameraPermission] =
    useCameraPermissions();
  const [mediaLibraryPermissionInformation, requestMediaLibraryPermission] =
    useMediaLibraryPermissions();
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0
  });
  const [previewHeight, setPreviewHeight] = useState(200);

  async function verifyCameraPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.GRANTED) {
      return true;
    }

    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestCameraPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Camera Permission Required",
        "This app needs camera access to take photos. Please grant permission in your device settings.",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Try Again",
            onPress: async () => {
              const permissionResponse = await requestCameraPermission();
              return permissionResponse.granted;
            }
          }
        ]
      );
      return false;
    }

    return false;
  }

  async function verifyMediaLibraryPermissions() {
    if (mediaLibraryPermissionInformation.status === PermissionStatus.GRANTED) {
      return true;
    }

    if (
      mediaLibraryPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestMediaLibraryPermission();
      return permissionResponse.granted;
    }

    if (mediaLibraryPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Media Library Permission Required",
        "This app needs access to your photo library to select images. Please grant permission in your device settings.",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Try Again",
            onPress: async () => {
              const permissionResponse = await requestMediaLibraryPermission();
              return permissionResponse.granted;
            }
          }
        ]
      );
      return false;
    }

    return false;
  }

  function showImageOptions(actionType) {
    Alert.alert(
      actionType === "camera" ? "Take Photo" : "Select Image",
      "Choose how you want to capture/select your image:",
      [
        {
          text: "Square (1:1)",
          onPress: () => handleImageAction(actionType, [1, 1])
        },
        {
          text: "Landscape (16:9)",
          onPress: () => handleImageAction(actionType, [16, 9])
        },
        {
          text: "Portrait (9:16)",
          onPress: () => handleImageAction(actionType, [9, 16])
        },
        {
          text: "Free Crop",
          onPress: () => handleImageAction(actionType, null)
        },
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    );
  }

  async function handleImageAction(actionType, aspectRatio) {
    try {
      let image;

      const imageOptions = {
        allowsEditing: true,
        quality: 0.5
      };

      // Only add aspect ratio if specified (null means free crop)
      if (aspectRatio) {
        imageOptions.aspect = aspectRatio;
      }

      if (actionType === "camera") {
        const hasPermission = await verifyCameraPermissions();
        if (!hasPermission) return;

        image = await launchCameraAsync(imageOptions);
      } else if (actionType === "library") {
        const hasPermission = await verifyMediaLibraryPermissions();
        if (!hasPermission) return;

        image = await launchImageLibraryAsync({
          mediaTypes: "images",
          ...imageOptions
        });
      }

      console.log("Image result:", image);

      if (!image.canceled && image.assets && image.assets.length > 0) {
        console.log("Setting image URI:", image.assets[0].uri);
        onImagePicked(image.assets[0].uri);

        // Get image dimensions to set adaptive preview
        if (image.assets[0].width && image.assets[0].height) {
          const { width, height } = image.assets[0];
          setImageDimensions({ width, height });

          // Calculate adaptive preview height
          const aspectRatio = height / width;
          if (aspectRatio > 1.5) {
            // Portrait image - make preview taller
            setPreviewHeight(300);
          } else if (aspectRatio < 0.7) {
            // Landscape image - keep normal height
            setPreviewHeight(200);
          } else {
            // Square-ish image
            setPreviewHeight(200);
          }
        }
      } else {
        console.log("Image selection was canceled or failed");
      }
    } catch (error) {
      console.error("Error with image:", error);
      Alert.alert("Error", "Failed to process image. Please try again.");
    }
  }

  function takeImageHandler() {
    showImageOptions("camera");
  }

  function pickImageHandler() {
    showImageOptions("library");
  }

  let imagePreview = (
    <Text
      style={{ color: Colors.textSecondary, fontSize: 16, textAlign: "center" }}
    >
      No image selected yet.
    </Text>
  );

  if (pickedImage) {
    imagePreview = (
      <View style={styles.imageContainer}>
        <Image
          style={[styles.image, { resizeMode: "contain" }]}
          source={{ uri: pickedImage }}
          onLoad={(event) => {
            // Fallback: Get dimensions when image loads if not available from picker
            const { width, height } = event.nativeEvent.source;
            if (imageDimensions.width === 0) {
              setImageDimensions({ width, height });
              const aspectRatio = height / width;
              if (aspectRatio > 1.5) {
                setPreviewHeight(300);
              } else if (aspectRatio < 0.7) {
                setPreviewHeight(200);
              } else {
                setPreviewHeight(200);
              }
            }
          }}
        />
      </View>
    );
  }

  return (
    <View>
      <View style={[styles.imagePreview, { height: previewHeight }]}>
        {imagePreview}
      </View>
      <View style={styles.buttonContainer}>
        <OutlinedButton icon="camera" onPress={takeImageHandler}>
          Take Photo
        </OutlinedButton>
        <OutlinedButton icon="image" onPress={pickImageHandler}>
          Gallery
        </OutlinedButton>
      </View>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.border,
    borderRadius: 9,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: "100%",
    height: "100%"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10
  }
});
