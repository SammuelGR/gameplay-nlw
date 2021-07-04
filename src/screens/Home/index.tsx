import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";

import styles from "./styles";

const SignIn = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <LinearGradient
        style={styles.profileImgBackground}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <Image
          style={styles.profileImg}
          source={{ uri: "https://github.com/sammuelgr.png" }}
        />
      </LinearGradient>

      <View style={styles.greetings}>
        <View style={styles.greetingsRow}>
          <Text style={styles.greetingsTitle}>Olá, </Text>
          <Text style={[styles.greetingsTitle, styles.greetingsBold]}>
            Sammuel
          </Text>
        </View>
        <Text style={styles.greetingsSubtitle}>Hoje é dia de vitória</Text>
      </View>

      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => {}}
        activeOpacity={0.7}
      >
        <MaterialCommunityIcons name="plus" color="#FFF" size={24} />
      </TouchableOpacity>
    </View>
  </View>
);

export default SignIn;
