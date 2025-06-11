import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import axios from "axios";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    if (!token) {
      console.log("No token available");
      setIsLoading(false);
      return;
    }

    console.log("Fetching message with token!");
    
    axios
      .get(
        `https://react-native-auth-72cd0-default-rtdb.firebaseio.com/message.json?auth=${token}`
      )
      .then((response) => {
        console.log("Message fetch successful:");
        setFetchedMessage(response.data || "No message available");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching message:", error);
        console.log("Error response:", error.response?.data);
        console.log("Error status:", error.response?.status);
        
        let errorMessage = "Failed to load message.";
        
        if (error.response?.status === 401) {
          errorMessage = "Session expired. Please log in again.";
          // Optionally logout the user
          // authCtx.logout();
        } else if (error.response?.status === 403) {
          errorMessage = "Access denied. You don't have permission to view this content.";
        } else if (error.code === "NETWORK_ERROR" || !error.response) {
          errorMessage = "Network error. Please check your connection.";
        }
        
        setFetchedMessage(errorMessage);
        setIsLoading(false);
        
        Alert.alert("Error", errorMessage);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      {isLoading ? (
        <Text style={styles.loadingText}>Loading message...</Text>
      ) : (
        <Text style={styles.messageText}>{fetchedMessage}</Text>
      )}
      <Text style={styles.tokenInfo}>Token: {token ? "Available" : "Not available"}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8
  },
  messageText: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 16
  },
  loadingText: {
    marginTop: 16,
    fontStyle: "italic",
    color: "#666"
  },
  tokenInfo: {
    marginTop: 20,
    fontSize: 12,
    color: "#888"
  }
});