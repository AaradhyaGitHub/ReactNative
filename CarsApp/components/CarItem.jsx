// @ts-nocheck
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CarDetails from "./CarDetails";

export default function CarItem({
  id,
  title,
  imageUrl,
  year,
  complexity,
  affordability
}) {
  const navigation = useNavigation();

  function selectCarItemHandler() {
    navigation.navigate("CarDetail", { carId: id });
  }

  return (
    <View style={styles.carItem}>
      <Pressable
        android_ripple={{ color: "#00000054" }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={selectCarItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <CarDetails
            year={year}
            complexity={complexity}
            affordability={affordability}
          />
          {/* <View style={styles.details}>
            <Text style={styles.detailItem}>{year}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View> */}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  carItem: {
    margin: 12,
    borderRadius: 12,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    //ios shadow
    shadowColor: "black",
    backgroundColor: "#dbdbdb",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8
  },
  buttonPressed: {
    opacity: 0.8
  },
  innerContainer: {
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#dbdbdb"
  },
  image: {
    width: "100%",
    height: 200
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 6,
    color: "#295251"
  }
  //   details: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     padding: 8,
  //     justifyContent: "center"
  //   },
  //   detailItem: {
  //     marginHorizontal: 4,
  //     marginBottom: 10,
  //     backgroundColor: "#295251",
  //     fontSize: 16,
  //     borderRadius: 18,
  //     color: "white",
  //     padding: 8
  //   }
});
