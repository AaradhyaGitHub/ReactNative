// @ts-nocheck
import React, { useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert, Platform } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true
    };
  }
});

export default function WelcomeScreen() {
  useEffect(() => {
    async function configurePushNotifications() {
      try {
        // Get current permissions
        const { status } = await Notifications.getPermissionsAsync();
        let finalStatus = status;

        // Request permissions if not granted
        if (finalStatus !== "granted") {
          const { status: newStatus } = await Notifications.requestPermissionsAsync();
          finalStatus = newStatus;
        }

        if (finalStatus !== "granted") {
          Alert.alert(
            "Permission Required!",
            "Push notifications need the appropriate permissions"
          );
          return;
        }

        // Get push token - this will only work in development builds, not Expo Go
        try {
          const pushTokenData = await Notifications.getExpoPushTokenAsync();
          console.log(`Push Token: ${pushTokenData.data}`);
        } catch (tokenError) {
          console.log("Error getting push token:", tokenError);
          console.log("Note: Push tokens only work in development builds, not Expo Go");
        }

      } catch (error) {
        console.log("Error configuring push notifications:", error);
      }
    }

    configurePushNotifications();

    // Set up Android notification channel
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.DEFAULT
      });
    }
  }, []);

  useEffect(() => {
    console.log("Setting up notification listeners");

    // Set up notification listeners
    const subscriptionReceived = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Notification Received");
        console.log("Notification data:", notification.request.content.data);
        console.log(
          "User name:",
          notification.request.content.data?.userName
        );
      }
    );

    const subscriptionResponse =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Notification tapped/responded to");
        console.log("Response:", response);
      });

    return () => {
      console.log("Cleaning up notification listeners");
      subscriptionReceived.remove();
      subscriptionResponse.remove();
    };
  }, []);

  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body",
        data: { userName: "Ryan" }
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
      <Text style={styles.warning}>
        Note: Push tokens only work in development builds, not Expo Go
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 20
  },
  highlight: {
    color: "#4a99fb",
    fontSize: 20
  },
  warning: {
    color: "#ff6b6b",
    fontSize: 12,
    textAlign: "center",
    marginTop: 10
  }
});