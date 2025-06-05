// @ts-nocheck
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  useWindowDimensions
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

// const deviceWidth = Dimensions.get("window").width;

export default function GameOverScreen({
  roundsNumnber,
  userNumber,
  onRestartGame
}) {
  const { width, height } = useWindowDimensions();
  let defaultImageSize = 300;
  if (width < 380) {
    defaultImageSize = 150;
  }
  if (height < 400) {
    defaultImageSize = 80;
  }
  const imageStyle = {
    width: defaultImageSize,
    height: defaultImageSize,
    borderRadius: defaultImageSize / 2
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/trophy.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your Phone needed{" "}
          <Text style={styles.hgihlight}>{roundsNumnber}</Text> rounds to guess
          the number <Text style={styles.hgihlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onRestartGame}>Restart Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 75,
    gap: 10
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150: 300,
    // height: deviceWidth < 380 ? 150: 300,

    // borderRadius: 150,
    borderWidth: 0.2,
    borderColor: "white",
    overflow: "hidden",
    margin: 36
  },
  imageStyle: {
    width: "100%",
    height: "100%"
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    backgroundColor: Colors.primaryBg,
    width: "88%",
    borderRadius: 8,
    paddingVertical: 8
  },

  hgihlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary1
  }
});
