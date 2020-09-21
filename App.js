import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import store from "./src/redux/reducers";
import { Provider } from "react-redux";
import Splash from "./src/screens/Splash";
import { Platform, StatusBar } from "react-native";
import Register from "./src/screens/Register";
import { HeaderOptions } from "./themeConfig";
const Stack = createStackNavigator();
const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00e676",
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator mode="modal">
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              ...HeaderOptions,
              title: "Verify your phone number",
              headerLeft: null,
            }}
          />
          <Stack.Screen name="Register" component={Register} options={HeaderOptions} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "WhatsUpp", ...HeaderOptions }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {Platform.OS === "android" && (
        <StatusBar barStyle="light-content" backgroundColor="#0c5149" />
      )}
    </Provider>
  );
}
