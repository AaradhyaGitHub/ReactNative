# Auth Flow App

## Summary

This project includes basic user authentication features such as:

- User SignUp and Login
- Fetching data from protected resources
- Managing app-wide authentication state using React Context
- Storing authentication tokens securely on the device using `AsyncStorage`
- Attaching tokens to outgoing HTTP requests for authenticated access

### Key Features

- **Authentication Token**  
  Used to determine if a user is authenticated and to access protected resources.

- **Auth Context**  
  Provides a centralized state management solution for authentication across the app.

- **AsyncStorage**  
  Tokens are stored locally on the device using `@react-native-async-storage/async-storage` for persistence across sessions.

- **HTTP Request Configuration**  
  Tokens are automatically attached to headers of outgoing HTTP requests to ensure secure communication with the backend.

