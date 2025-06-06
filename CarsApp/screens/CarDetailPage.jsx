// @ts-nocheck

import React from "react";
import { Text, View, Image } from "react-native";

import { CARS } from "../data/dummy-data";
import CarDetails from "../components/CarDetails";

export default function CarDetailPage({ route }) {
  const carId = route.params.carId;
  const selectedCar = CARS.find((car) => car.id === carId);

  return (
    <View>
      <Image source={{ uri: selectedCar.imageUrl }} />
      <Text>{selectedCar?.title}</Text>
      <View>
        <CarDetails
          year={selectedCar.year}
          complexity={selectedCar.complexity}
          affordability={selectedCar.affordability}
        />
      </View>
      <Text>Specification</Text>
      {selectedCar.specifications.map((specification) => (
        <Text key={specification}>{specification}</Text>
      ))}
      <Text>
        {selectedCar.details.map((detail) => (
          <Text key={detail}>{detail}</Text>
        ))}
      </Text>
    </View>
  );
}

const styles 