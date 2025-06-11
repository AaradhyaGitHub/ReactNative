import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { signInUser } from "../util/auth";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isSigningOn, setIsSigningOn] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signInHandler({ email, password }) {
    setIsSigningOn(true);

    try {
      const userData = await signInUser(email, password);
      authCtx.authenticate(userData);
      console.log("Login successful!");

      // Here you would typically:
      // - Store the user token
      // - Navigate to authenticated screens
      // - Update global auth state
    } catch (error) {
      console.log("Login error:", error);
      console.log("Error response:", error.response?.data);
      console.log("Error status:", error.response?.status);

      // Determine user-friendly error message
      let errorMessage = "Login failed. Please try again.";

      if (error.response?.data?.error?.message) {
        const firebaseError = error.response.data.error.message;
        console.log("Firebase error:", firebaseError);

        switch (firebaseError) {
          case "EMAIL_NOT_FOUND":
            errorMessage = "No account found with this email address.";
            break;
          case "INVALID_PASSWORD":
            errorMessage = "Incorrect password. Please try again.";
            break;
          case "USER_DISABLED":
            errorMessage = "This account has been disabled.";
            break;
          case "TOO_MANY_ATTEMPTS_TRY_LATER":
            errorMessage = "Too many failed attempts. Please try again later.";
            break;
          case "INVALID_EMAIL":
            errorMessage = "Invalid email address format.";
            break;
          case "MISSING_PASSWORD":
            errorMessage = "Password is required.";
            break;
          case "MISSING_EMAIL":
            errorMessage = "Email is required.";
            break;
          case "INVALID_LOGIN_CREDENTIALS":
            errorMessage =
              "Invalid email or password. Please check your credentials.";
            break;
          default:
            errorMessage = `Login failed: ${firebaseError}`;
        }
      } else if (error.response?.status === 400) {
        errorMessage =
          "Invalid login credentials. Please check your email and password.";
      } else if (error.code === "NETWORK_ERROR" || !error.response) {
        errorMessage =
          "Network error. Please check your internet connection and try again.";
      } else if (error.response?.status === 401) {
        errorMessage = "Authentication failed. Please check your credentials.";
      } else if (error.response?.status >= 500) {
        errorMessage = "Server error. Please try again later.";
      }

      Alert.alert("Login Failed", errorMessage, [
        {
          text: "OK",
          style: "default"
        }
      ]);
    } finally {
      // This always runs, whether success or error
      setIsSigningOn(false);
    }
  }

  if (isSigningOn) {
    return <LoadingOverlay message="Logging In..." />;
  }

  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
