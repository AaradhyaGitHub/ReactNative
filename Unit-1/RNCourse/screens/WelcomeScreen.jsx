// @ts-nocheck
import React, { useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert, Platform } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldSetBadge: false,
      shouldShowBanner: true, // Replaces shouldShowAlert
      shouldShowList: true // Shows in notification list
    };
  }
});

export default function WelcomeScreen() {
  useEffect(() => {
    async function configurePushNotifications() {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if (finalStatus !== "granted") {
        //ask for permission
        Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        Alert.alert(
          "Permission Required!",
          "Push notifications need the appropriate permissions"
        );
        return;
      }
      const pushTokenData = await Notifications.getExpoPushTokenAsync();
      console.log(pushTokenData);
    }

    configurePushNotifications();

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.DEFAULT
      });
    }
  }, []);

  useEffect(() => {
    console.log("Setting up notification listeners");

    let subscriptionReceived;
    let subscriptionResponse;

    const setupListeners = () => {
      subscriptionReceived = Notifications.addNotificationReceivedListener(
        (notification) => {
          console.log("Notification Received");
          console.log("Notification data:", notification.request.content.data);
          console.log(
            "User name:",
            notification.request.content.data?.userName
          );
        }
      );

      subscriptionResponse =
        Notifications.addNotificationResponseReceivedListener((response) => {
          console.log("Notification tapped/responded to");
          console.log("Response:", response);
        });
    };

    setupListeners();

    return () => {
      console.log("Cleaning up notification listeners");
      // Ensure subscriptions exist before removing
      if (
        subscriptionReceived &&
        typeof subscriptionReceived.remove === "function"
      ) {
        subscriptionReceived.remove();
      }
      if (
        subscriptionResponse &&
        typeof subscriptionResponse.remove === "function"
      ) {
        subscriptionResponse.remove();
      }
    };
  }, []); // Empty dependency array is crucial - prevents re-running on every render

  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body",
        data: { userName: "Ryan" }
        // Note: vibrate is not a standard property for content
        // Vibration is typically handled by the system based on user settings
      },
      trigger: {
        seconds: 5
      }
    });
  }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Welcome"</Text> screen!
      </Text>
      <Button
        title="Schedule Notification"
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
