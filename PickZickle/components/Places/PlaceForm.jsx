// @ts-nocheck
import { useState, useLayoutEffect, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import IconButton from "../ui/IconButton";
import { Place } from "../../models/places";

function PlaceForm({ onCreatePlace }) {
  const navigation = useNavigation();
  const [enteredTitle, setEnteredTitle] = useState("");
  const [pickedImage, setPickedImage] = useState(); // Lifted state
  const [pickLocation, setPickLocation] = useState(); // Lifted state

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }
  function pickImageHandler(imageUri) {
    setPickedImage(imageUri);
  }

  const pickLocationHandler = useCallback((location) => {
    console.log("pickLocationHandler called with:", location);
    setPickLocation(location); // ✅ This sets it to the new location parameter
  }, []);

  function savePlaceHandler() {
    
    // Add validation
    if (!enteredTitle.trim()) {
      Alert.alert("Invalid Input", "Please enter a title for the place.");
      return;
    }

    if (!pickLocation) {
      Alert.alert("Invalid Input", "Please pick a location.");
      return;
    }

    const placeData = new Place(enteredTitle, pickedImage, pickLocation);
    onCreatePlace(placeData);
    console.log(
      `
        ----------------------------------------
        The entered Title was: ${enteredTitle},
        ----------------------------------------
        The image was: ${pickedImage},
        ----------------------------------------
        The location was: ${JSON.stringify(pickLocation, null, 2)}
        ----------------------------------------
      `
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="send"
          size={27}
          color={Colors.info}
          onPress={savePlaceHandler}
        />
      )
    });
  }, [navigation, savePlaceHandler]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.form}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            onChangeText={changeTitleHandler}
            value={enteredTitle}
          />
        </View>
        <View style={styles.imageContainer}>
          <ImagePicker
            pickedImage={pickedImage}
            onImagePicked={setPickedImage}
          />
        </View>
        <View style={styles.locationContainer}>
          <LocationPicker onPickLocation={pickLocationHandler} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    flex: 1,
    padding: 24
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 50 // Extra padding at bottom to ensure content is accessible
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.textSecondary
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomWidth: 2,
    backgroundColor: Colors.border,
    borderRadius: 8,
    color: Colors.textPrimary
  },
  imageContainer: {
    marginVertical: 8
  },
  locationContainer: {
    marginVertical: 8,
    minHeight: 120 // Ensure minimum space for location buttons
  }
});
