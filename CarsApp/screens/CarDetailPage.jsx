// @ts-nocheck

//Expo and React Native packages
import React, { useContext, useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//Custom Compoents and funcitions
import { CARS } from "../data/dummy-data";
import CarDetails from "../components/CarDetails";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

// ------------------------[END IMPORTS]------------------------ //

export default function CarDetailPage({ route, navigation }) {
  const carId = route.params.carId;
  const selectedCar = CARS.find((car) => car.id === carId);

  const favoriteCarsCtx = useContext(FavoritesContext);
  const carIsFavorite = favoriteCarsCtx.ids.includes(carId);

  function changeFavoriteStatusHandler() {
    if (carIsFavorite) {
      favoriteCarsCtx.removeFavorite(carId);
    } else {
      favoriteCarsCtx.addFavorite(carId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onStarPress={changeFavoriteStatusHandler}
            icon={!carIsFavorite ? "star-outline" : "star"} // or the corrected icon name
            color="#fef72d"
          />
        );
      }
    });
  }, [navigation, changeFavoriteStatusHandler]); // Fixed this line

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: selectedCar?.imageUrl }}
          style={styles.carImage}
          resizeMode="cover"
        />
        <View style={styles.overlay} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{selectedCar?.title}</Text>

        <View style={styles.detailsWrapper}>
          <CarDetails
            year={selectedCar.year}
            complexity={selectedCar.complexity}
            affordability={selectedCar.affordability}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name="settings-outline" size={24} color="#295251" />
            <Text style={styles.sectionTitle}>Specifications</Text>
          </View>
          <View style={styles.specificationsContainer}>
            {selectedCar.specifications.map((specification, index) => (
              <View key={specification} style={styles.specificationItem}>
                <Icon name="checkmark-circle" size={16} color="#295251" />
                <Text style={styles.specificationText}>{specification}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name="information-circle-outline" size={24} color="#295251" />
            <Text style={styles.sectionTitle}>Details</Text>
          </View>

          <View style={styles.detailsContainer}>
            {selectedCar.details.map((detail, index) => (
              <View key={detail} style={styles.bulletRow}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.detailText}>{detail}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa"
  },
  imageContainer: {
    height: 280,
    position: "relative"
  },
  carImage: {
    width: "100%",
    height: "100%"
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  contentContainer: {
    padding: 20,
    marginTop: -30,
    backgroundColor: "#f8f9fa",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 16,
    textAlign: "center"
  },
  detailsWrapper: {
    marginBottom: 24
  },
  section: {
    marginBottom: 24
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#295251",
    marginLeft: 8
  },
  specificationsContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  specificationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0"
  },
  specificationText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 12,
    flex: 1
  },
  detailsContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },

  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12
  },

  bullet: {
    fontSize: 16,
    color: "#444",
    marginRight: 8,
    marginTop: 2 // slight adjustment for alignment
  },

  detailText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
    flex: 1 // takes remaining space
  }
  // Your existing CarDetails styles
});
