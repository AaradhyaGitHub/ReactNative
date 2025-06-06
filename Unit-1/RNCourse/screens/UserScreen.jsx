import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function UserScreen({ route, navigation }) {
  function operDrawerHandler() {
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title="Open Drawer" onPress={operDrawerHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  highlight: {
    color: "#fd5179",
    fontSize: 20
  }
});
