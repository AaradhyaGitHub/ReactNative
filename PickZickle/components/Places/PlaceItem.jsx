// @ts-nocheck
//------------------ Default Imports -------------------------//
import React, { useState } from "react";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Add this import for icons
import { Colors } from "../../constants/colors"; // Import your color palette

export default function PlaceItem({ place, onSelect }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageAspectRatio, setImageAspectRatio] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleImageLoad = (event) => {
    const { width, height } = event.nativeEvent.source;
    setImageAspectRatio(width / height);
    setImageLoaded(true);
  };

  const isPortrait = imageAspectRatio < 1;

  return (
    <View style={styles.container}>
      {/* Header Section with explore button */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={[styles.avatar, styles.avatarGradient]}>
            <Text style={styles.avatarText}>
              {place.title.charAt(0).toUpperCase()}
            </Text>
            <View style={styles.avatarBorder} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{place.title}</Text>
            <Text style={styles.dateText}>
              {place.dateCreated
                ? new Date(place.dateCreated).toLocaleDateString()
                : "Today"}
            </Text>
          </View>
        </View>

        {/* Explore Button - Top Right */}
        <Pressable
          style={({ pressed }) => [
            styles.exploreButton,
            pressed && styles.exploreButtonPressed
          ]}
          onPress={onSelect.bind(this, place.id)}
        >
          <Ionicons name="eye-sharp" size={24} color={Colors.accentCool} />
        </Pressable>
      </View>

      {/* Image Container */}
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: place.imageUri }}
          style={[
            styles.image,
            isPortrait ? styles.portraitImage : styles.landscapeImage
          ]}
          resizeMode="contain"
          onLoad={handleImageLoad}
        />
        {imageLoaded && (
          <View style={styles.imageOverlay}>
            <View style={styles.imageStats}>
              <Text style={styles.imageStatsText}>
                📷 {isPortrait ? "Portrait" : "Landscape"}
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* Location Display - Under Image */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText} numberOfLines={2}>
          📍{" "}
          <Text style={styles.locationItalic}>
            {place.address || "Unknown location"}
          </Text>
        </Text>
      </View>
      {/* Content Section */}
      <View style={styles.content}>
        {/* Caption */}
        {place.caption ? (
          <View style={styles.captionContainer}>
            <Text style={styles.caption}>"{place.caption}"</Text>
          </View>
        ) : (
          <View style={styles.captionPlaceholder}>
            <Text style={styles.captionPlaceholderText}>Add a caption...</Text>
          </View>
        )}
      </View>

      {/* Post Separator */}
      <View style={styles.postSeparator}>
        <View style={styles.separatorLine} />
        <View style={styles.separatorDots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <View style={styles.separatorLine} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    marginBottom: 8, // Reduced since we have separator
    marginTop: 1,
    borderRadius: 20,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
    overflow: "hidden"
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
    backgroundColor: Colors.background
  },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.info,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    position: "relative"
  },

  avatarGradient: {
    shadowColor: Colors.accentCool,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6
  },

  avatarBorder: {
    position: "absolute",
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: Colors.accentCool,
    opacity: 0.3
  },

  avatarText: {
    color: Colors.textPrimary,
    fontSize: 20,
    fontWeight: "800"
  },

  profileInfo: {
    flex: 1
  },

  profileName: {
    fontSize: 17,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: 2
  },

  dateText: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: "500"
  },

  // New Explore Button Styles
  exploreButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.background,
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

  exploreButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
    backgroundColor: Colors.accentWarm
  },

  // Location Styles (under image)
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

  imageWrapper: {
    position: "relative",
    minHeight: 200
  },

  image: {
    width: "100%",
    minHeight: 200
  },

  portraitImage: {
    height: 350,
    resizeMode: "contain"
  },

  landscapeImage: {
    height: undefined,
    aspectRatio: undefined,
    resizeMode: "contain"
  },

  imageOverlay: {
    position: "absolute",
    top: 16,
    left: 16
  },

  imageStats: {
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 20
  },

  imageStatsText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600"
  },

  content: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },

  captionContainer: {
    paddingVertical: 16,
    paddingHorizontal: 0,
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

  captionPlaceholder: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "rgba(0,0,0,0.02)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.textSecondary,
    borderStyle: "dashed"
  },

  captionPlaceholderText: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontStyle: "italic"
  },

  // Post Separator Styles
  postSeparator: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 8
  },

  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.textSecondary,
    opacity: 0.2
  },

  separatorDots: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    gap: 6
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.accentWarm,
    opacity: 0.6
  }
});
