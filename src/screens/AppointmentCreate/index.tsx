import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";

export const AppointmentCreate = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Agendar partida",
      headerShown: true,
      headerBackground: () => (
        <LinearGradient
          style={{ flex: 1 }}
          colors={[theme.colors.secondary70, theme.colors.secondary40]}
        />
      ),
      headerTintColor: theme.colors.heading,
      headerTitleStyle: {
        fontFamily: theme.fonts.title700,
        fontSize: 20,
      },
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  return (
    <View>
      <Text>New Appointment</Text>
    </View>
  );
};
