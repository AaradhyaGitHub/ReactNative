// @ts-nocheck
//------------------ Default Imports -------------------------//
import React, { useEffect, useState } from "react";
import { ScrollView, Pressable } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import OutlinedButton from "../components/ui/OutlinedButton";
import { Colors } from "../constants/colors";
import { fetchPlaceById } from "../util/database";

export default function PlaceDetails({ route, navigation }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageAspectRatio, setImageAspectRatio] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const [fetchedPlace, setFetchedPlace] = useState([]);

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    async function loadPlaceDetail() {
      const place = await fetchPlaceById(selectedPlaceId);
      setFetchedPlace(place);

      navigation.setOptions({
        title: place.title
      });
    }
    loadPlaceDetail();
  }, [selectedPlaceId]);

  const handleImageLoad = (event) => {
    const { width, height } = event.nativeEvent.source;
    setImageAspectRatio(width / height);
    setImageLoaded(true);
  };

  const isPortrait = imageAspectRatio < 1;

  function showOnMapHandler() {}

  function shareHandler() {}

  function likeHandler() {
    setIsLiked(!isLiked);
  }

  if (!fetchedPlace) {
    return (
      <View>
        <Text
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            color: Colors.accentWarm
          }}
        >
          Loading Place Data
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Beautiful Mountain Vista</Text>
        <Text style={styles.date}>June 12, 2025</Text>
      </View>

      {/* Main Image */}
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: fetchedPlace.imageUri
          }}
          style={[
            styles.image,
            isPortrait ? styles.portraitImage : styles.landscapeImage
          ]}
          resizeMode="contain"
          onLoad={handleImageLoad}
        />
      </View>

      {/* Location */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>
          📍 <Text style={styles.locationItalic}>{fetchedPlace.address}</Text>
        </Text>
      </View>

      {/* Caption */}
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>{fetchedPlace.title}</Text>
      </View>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <View style={styles.socialActions}>
          <Pressable
            style={[styles.actionButton, isLiked && styles.likedButton]}
            onPress={likeHandler}
          >
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={24}
              color={isLiked ? "#FF6B6B" : Colors.textPrimary}
            />
          </Pressable>

          <Pressable style={styles.actionButton} onPress={shareHandler}>
            <Ionicons
              name="share-outline"
              size={24}
              color={Colors.textPrimary}
            />
          </Pressable>
        </View>

        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View On Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },

  header: {
    padding: 20,
    paddingBottom: 16
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: Colors.textPrimary,
    marginBottom: 4
  },

  date: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: "500"
  },

  // Image Section - Same as PlaceItem
  imageWrapper: {
    position: "relative",
    minHeight: 200
  },

  image: {
    width: "100%",
    minHeight: 200
  },

  portraitImage: {
    height: 400,
    resizeMode: "contain"
  },

  landscapeImage: {
    height: undefined,
    aspectRatio: undefined,
    resizeMode: "contain"
  },

  // Location - Same as PlaceItem
  locationContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: "center"
  },

  locationText: {
    fontSize: 14,
    color: "white",
    fontWeight: "300",
    textAlign: "center"
  },

  locationItalic: {
    fontStyle: "italic"
  },

  // Caption - Same as PlaceItem
  captionContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.2)"
  },

  caption: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.textPrimary,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "400"
  },

  // Actions
  actionsContainer: {
    padding: 20,
    gap: 20
  },

  socialActions: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 32
  },

  actionButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.background,
    borderWidth: 1.5,
    borderColor: Colors.textSecondary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },

  likedButton: {
    borderColor: "#FF6B6B",
    backgroundColor: "rgba(255, 107, 107, 0.1)"
  }
});
