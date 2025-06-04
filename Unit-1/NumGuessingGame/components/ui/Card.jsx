import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Pressable,
  Alert
} from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    padding: 8,
    marginTop: "10%",
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
