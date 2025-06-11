// @ts-nocheck
import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {}
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  useEffect(() => {
    async function fetchToken() {
      try {
        const storedToken = await AsyncStorage.getItem("token");
        if (storedToken) {
          setAuthToken(storedToken);
          console.log("Token retrieved from storage:", storedToken);
        } else {
          console.log("No stored token found");
        }
      } catch (error) {
        console.log("Error fetching token from storage:", error);
      }
    }
    fetchToken();
  }, []);

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token)
      .then(() => {
        console.log("Token stored successfully");
      })
      .catch((error) => {
        console.log("Error storing token:", error);
      });
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token")
      .then(() => {
        console.log("Token removed from storage");
      })
      .catch((error) => {
        console.log("Error removing token:", error);
      });
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;