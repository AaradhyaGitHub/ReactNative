// @ts-nocheck
import { useState, useLayoutEffect, useCallback } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import IconButton from "../ui/IconButton";

function PlaceForm() {
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
    setPickLocation(location); // ✅ This sets it to the new location parameter
  }, []);

  function savePlaceHandler() {
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
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker pickedImage={pickedImage} onImagePicked={setPickedImage} />
      <LocationPicker onPickLocation={pickLocationHandler} />
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24
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
  }
});
