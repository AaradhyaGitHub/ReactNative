import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export default function CarItem({
  title,
  imageUrl,
  year,
  complexity,
  affordability
}) {
  return (
    <View style={styles.carItem}>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{year}</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  carItem: {
    margin: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#d1d1d18b"
  },
  image: {
    width: "100%",
    height: 200
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color: "#295251",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center"
  },
  detailItem: {
    marginHorizontal: 8,
    backgroundColor: "#295251",
    fontSize: 15,
    borderRadius: 12,
    color: "white",
    padding: 9
  }
});
