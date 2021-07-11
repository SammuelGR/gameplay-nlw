import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/styles/theme";

import Home from "../screens/Home";
import SignIn from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes = () => (
  <Navigator
    headerMode="none"
    screenOptions={{
      gestureEnabled: false,
      cardStyle: {
        backgroundColor: theme.colors.secondary90,
      },
    }}
  >
    <Screen name="SignIn" component={SignIn} />
    <Screen name="Home" component={Home} />
  </Navigator>
);
