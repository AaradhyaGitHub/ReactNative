// @ts-nocheck
import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as Notifications from "expo-notifications";

export default function WelcomeScreen() {
  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body",
        data: { userName: "Ryan" },
        vibrate: true
      },
      trigger: {
        seconds: 7,
      }
    });
  }
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Welcome"</Text> screen!
      </Text>
      <Button
        title="schedule notification"
        onPress={scheduleNotificationHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },
  highlight: {
    color: "#4a99fb",
    fontSize: 20
  }
});
