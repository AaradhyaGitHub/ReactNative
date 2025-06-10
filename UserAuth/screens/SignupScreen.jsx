// @ts-nocheck
import React, { useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    
    try {
      const userData = await createUser(email, password);
      console.log("Signup successful:", userData);
      
      // Here you would typically:
      // - Store the user token
      // - Navigate to authenticated screens
      // - Update global auth state
      // - Maybe show a welcome message
      
      Alert.alert(
        "Account Created!", 
        "Your account has been created successfully. Welcome!", 
        [{ text: "OK", style: "default" }]
      );
      
    } catch (error) {
      console.log("Signup error:", error);
      console.log("Error response:", error.response?.data);
      console.log("Error status:", error.response?.status);
      
      // Determine user-friendly error message
      let errorMessage = "Account creation failed. Please try again.";
      
      if (error.response?.data?.error?.message) {
        const firebaseError = error.response.data.error.message;
        console.log("Firebase error:", firebaseError);
        
        switch (firebaseError) {
          case 'EMAIL_EXISTS':
            errorMessage = "An account with this email already exists. Please use a different email or try logging in.";
            break;
          case 'WEAK_PASSWORD : Password should be at least 6 characters':
          case 'WEAK_PASSWORD':
            errorMessage = "Password is too weak. Please choose a password with at least 6 characters.";
            break;
          case 'INVALID_EMAIL':
            errorMessage = "Invalid email address format. Please enter a valid email.";
            break;
          case 'MISSING_PASSWORD':
            errorMessage = "Password is required. Please enter a password.";
            break;
          case 'MISSING_EMAIL':
            errorMessage = "Email is required. Please enter an email address.";
            break;
          case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            errorMessage = "Too many attempts. Please try again later.";
            break;
          case 'OPERATION_NOT_ALLOWED':
            errorMessage = "Email/password accounts are not enabled. Please contact support.";
            break;
          default:
            errorMessage = `Account creation failed: ${firebaseError}`;
        }
      } else if (error.response?.status === 400) {
        errorMessage = "Invalid request. Please check your email and password format.";
      } else if (error.code === 'NETWORK_ERROR' || !error.response) {
        errorMessage = "Network error. Please check your internet connection and try again.";
      } else if (error.response?.status >= 500) {
        errorMessage = "Server error. Please try again later.";
      } else if (error.message?.includes('API key not valid')) {
        errorMessage = "Configuration error. Please contact support.";
      }
      
      Alert.alert("Signup Failed", errorMessage, [
        {
          text: "Try Again",
          style: "default"
        }
      ]);
    } finally {
      // This always runs, whether success or error
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
}

export default SignupScreen;