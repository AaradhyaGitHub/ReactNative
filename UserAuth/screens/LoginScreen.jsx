import React, { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { signInUser } from "../util/auth";

function LoginScreen() {
  const [isSigningOn, setIsSigningOn] = useState(false);

  async function signInHandler({ email, password }) {
    setIsSigningOn(true);
    await signInUser(email, password);
    setIsSigningOn(false);
  }

  if (isSigningOn) {
    return <LoadingOverlay message="Logging In..." />;
  }
  return <AuthContent isLogin  onAuthenticate={signInHandler}/>;
}

export default LoginScreen;
