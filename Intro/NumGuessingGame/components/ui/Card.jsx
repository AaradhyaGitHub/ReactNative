import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    width: "80%",
    padding: 8,
    marginTop: deviceWidth < 380 ? 18 : "1%",
    alignItems: "center",
    marginHorizontal: 24,
    backgroundColor: Colors.primaryBg,
    borderRadius: 8,
    //shadow for android
    elevation: 4,
    //show for iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.225
  }
});
